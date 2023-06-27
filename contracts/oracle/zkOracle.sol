// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/access/Ownable.sol";

import "../interfaces/ILayerZeroOracleV2.sol";

import "../interfaces/IProtocolState.sol";

import "../interfaces/ILayerZeroEndpoint.sol";

import "../interfaces/IZKLightClient.sol";

import "../interfaces/ILayerZeroUltraLightNodeV2.sol";


contract EthereumLightClient is ILayerZeroOracleV2, Ownable {

    event ModLayerZeroEndpoint(address oldLayerZeroEndpoint, address newLayerZeroEndpoint);
    event OracleNotified(uint16 dstChainId, uint16 proofType, uint blockConfirmations, address ua, uint fee);
    event WithdrawFee(address receiver, uint256 amount);

    // userApplication => lightClient address
    mapping(address => address) lightClients;
    mapping(uint16 => mapping(uint16 => uint)) public chainPriceLookup;
    address[] ULNs;
    ILayerZeroEndpoint public layerZeroEndpoint;

    constructor(address[] memory _ULNs) {
        ULNs = _ULNs;
    }

    function setlightClient(address _lightClient, address _userApplication) external {
        lightClients[_userApplication] = _lightClient;
    }

    function setLayerZeroEndpoint(address _layerZeroEndpoint) external {
        require(_layerZeroEndpoint != address(0), "ZkBridgeOracle:Zero address");
        emit ModLayerZeroEndpoint(address(_layerZeroEndpoint), _layerZeroEndpoint);
        layerZeroEndpoint = ILayerZeroEndpoint(_layerZeroEndpoint);
    }

    function processRequest(uint16 dstChainId, uint16 proofType, address userApplication, LightClientUpdate calldata lcUpdate) external {
        
        require(lightClients[userApplication] != address(0), "there's no such user applicaion!");

        address uln = layerZeroEndpoint.getReceiveLibraryAddress(userApplication);
        bool status;
        
        bytes memory stepInputData = abi.encodeWithSelector(
                IZKLightClient.step.selector,
                proofType,
                dstChainId,
                lcUpdate,
                uln // here must be public input
        );
        
        (status,) = lightClients[userApplication].call(stepInputData);

        require(status, "update step fail!");
    }

    function assignJob(uint16 _dstChainId, uint16 _proofType, uint64 _outboundBlockConfirmation, address _userApplication) external override returns (uint price) {
        price = chainPriceLookup[_proofType][_dstChainId];
        emit OracleNotified(_dstChainId, _proofType, _outboundBlockConfirmation, _userApplication, price);
    }

    function getFee(uint16 _dstChainId, uint16 _proofType, uint64 _outboundBlockConfirmation, address _userApplication) external override view returns (uint price) {
        price = _getFee(_dstChainId, _proofType, _outboundBlockConfirmation, _userApplication);
    }

    function _getFee(uint16 _dstChainId, uint16 _proofType, uint64 _outboundBlockConfirmation, address _userApplication) private view returns (uint price) {
        price = chainPriceLookup[_proofType][_dstChainId];
    }

    function getLzUlnLength() public view returns (uint256) {
        return ULNs.length;
    }

    function getLzUln(uint256 _index) public view returns (address) {
        return ULNs[_index];
    }

    function feeBalance() public view returns (uint256 balance){
        for (uint256 i = 0; i < getLzUlnLength(); i++) {
            uint256 ulnBalance = ILayerZeroUltraLightNodeV2(getLzUln(i)).accruedNativeFee(address(this));
            balance += ulnBalance;
        }
    }

    function withdrawFee(address payable _to, uint _amount) external override onlyOwner {
        require(feeBalance() >= _amount, "ZkBridgeOracle:Insufficient Balance");
        uint256 surplusAmount = _amount;
        for (uint256 i = 0; i < getLzUlnLength(); i++) {
            uint256 ulnBalance = ILayerZeroUltraLightNodeV2(getLzUln(i)).accruedNativeFee(address(this));
            if (ulnBalance > 0) {
                if (ulnBalance >= surplusAmount) {
                    ILayerZeroUltraLightNodeV2(getLzUln(i)).withdrawNative(_to, surplusAmount);
                    break;
                } else {
                    ILayerZeroUltraLightNodeV2(getLzUln(i)).withdrawNative(_to, ulnBalance);
                }
            }
            surplusAmount = surplusAmount - ulnBalance;
        }
        emit WithdrawFee(_to, _amount);
    }
}

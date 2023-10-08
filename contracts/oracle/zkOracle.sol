// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@nilfoundation/evm-lorem-ipsum/contracts/interfaces/IZKLightClient.sol";

import "../interfaces/ILayerZeroOracleV2.sol";
import "../interfaces/ILayerZeroEndpoint.sol";
import "../interfaces/ILayerZeroUltraLightNodeV2.sol";


contract zkOracle is ILayerZeroOracleV2 {

    event ModLayerZeroEndpoint(address oldLayerZeroEndpoint, address newLayerZeroEndpoint);
    event OracleNotified(
        uint16 dstChainId, 
        uint16 _outboundProofType, 
        uint blockConfirmations, 
        address ua, 
        uint fee);
    event WithdrawFee(address receiver, uint256 amount);

    // userApplication => lightClient address
    mapping(address => address) lightClients;
    // _outboundProofType => dstChainId => price on chain with designated proof type
    mapping(uint16 => mapping(uint16 => uint)) public chainPriceLookup;
    // array of ultra light nodes
    address[] ULNs;

    ILayerZeroEndpoint public layerZeroEndpoint;

    constructor(address _layerZeroEndpoint, address[] memory _ULNs) {
        ULNs = _ULNs;
        layerZeroEndpoint = ILayerZeroEndpoint(_layerZeroEndpoint);
    }

    function setLightClient(address _lightClient, address _userApplication) external {
        lightClients[_userApplication] = _lightClient;
    }

    /// @notice set LayerZero endpoint address
    function setLayerZeroEndpoint(address _layerZeroEndpoint) external  {
        require(_layerZeroEndpoint != address(0), "zero address!");

        layerZeroEndpoint = ILayerZeroEndpoint(_layerZeroEndpoint);

        emit ModLayerZeroEndpoint(address(_layerZeroEndpoint), _layerZeroEndpoint);
    }

    ///@notice the function is called by the Oracle to verify and update the light client state and then update the hash on ULN
    // 1) get ULN address for a specific user application
    // 2) update light client (depending on the user application) state after proof verification
    // 3) update hash on ULN
    function processRequest(
        uint16 srcChainId, 
        uint16 _outboundProofType, 
        address userApplication, 
        LightClientUpdate calldata lcUpdate
        ) external {
        
        require(lightClients[userApplication] != address(0), "there's no such user applicaion!");

        address uln = layerZeroEndpoint.getReceiveLibraryAddress(userApplication);
        bool status;
        
        require(uln != address(0), "ULN is not defined for the user application!");

        bytes memory stepInputData = abi.encodeWithSelector(
                IZKLightClient.step.selector,
                lcUpdate
        );
        
        (status,) = lightClients[userApplication].call(stepInputData);
        
        require(status, "light client update call fail!");

        ILayerZeroUltraLightNodeV2(uln).updateHash(
                srcChainId, // _srcChainId
                lcUpdate.executionStateRoot, // _lookupHash
                lcUpdate.participation, // _confirmations
                lcUpdate.finalizedHeaderRoot // _blockData
            );

    }
    function assignJob(
        uint16 _dstChainId, 
        uint16 __outboundProofType, 
        uint64 _outboundBlockConfirmation, 
        address _userApplication
        ) external override returns (uint price) {
            
        price = chainPriceLookup[__outboundProofType][_dstChainId];
        emit OracleNotified(_dstChainId, __outboundProofType, _outboundBlockConfirmation, _userApplication, price);
    }

    /// @notice query the oracle price for relaying block information to the destination chain
    function getFee(
        uint16 _dstChainId, 
        uint16 __outboundProofType, 
        uint64 _outboundBlockConfirmation, 
        address _userApplication
        ) external override view returns (uint price) {

        price = _getFee(_dstChainId, __outboundProofType, _outboundBlockConfirmation, _userApplication);
    }

    function _getFee(
        uint16 _dstChainId, 
        uint16 __outboundProofType, 
        uint64 _outboundBlockConfirmation, 
        address _userApplication
        ) private view returns (uint price) {
            
        price = chainPriceLookup[__outboundProofType][_dstChainId];
    }

    function getLzUlnLength() public view returns (uint256) {
        return ULNs.length;
    }

    function getLzUln(uint256 _index) public view returns (address) {
        return ULNs[_index];
    }

    /// @notice finds total uln balance
    function feeBalance() public view returns (uint256 balance) {
        for (uint256 i = 0; i < getLzUlnLength(); i++) {
            uint256 ulnBalance = 
                ILayerZeroUltraLightNodeV2(getLzUln(i)).accruedNativeFee(address(this));
            balance += ulnBalance;
        }
    }

    /// @notice withdraw the accrued fee in ultra light node
    function withdrawFee(
        address payable _to, 
        uint _amount
        ) external override  {
        
        require(feeBalance() >= _amount, "insufficient balance");
        
        uint256 surplusAmount = _amount;
        
        for (uint256 i = 0; i < getLzUlnLength(); ++i) {
            uint256 ulnBalance = 
                ILayerZeroUltraLightNodeV2(getLzUln(i)).accruedNativeFee(address(this));
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

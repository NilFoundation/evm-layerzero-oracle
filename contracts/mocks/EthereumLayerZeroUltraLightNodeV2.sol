// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/ILayerZeroUltraLightNodeV2.sol";

contract EthereumLayerZeroUltraLightNodeV2 is ILayerZeroUltraLightNodeV2 {

    event HashUpdated(uint16 _srcChainId, bytes32 _lookupHash, uint _confirmations, bytes32 _blockData);
    event WithdrawNative(address payable _to, uint _amount);
    event MagicCodeVerify(uint256);

    function updateHash(
        uint16 _srcChainId, 
        bytes32 _lookupHash, 
        uint _confirmations, 
        bytes32 _blockData
        ) external {
        
        emit HashUpdated(_srcChainId, _lookupHash, _confirmations, _blockData);
        ///@notice The number can be easily verified from the logs
        emit MagicCodeVerify(0xAABBCCDDEEFF);
    }

    // can only withdraw the receivable of the msg.sender
    function withdrawNative(address payable _to, uint _amount) external {
        emit WithdrawNative(_to, _amount);
    }

    function hashLookup(
        address _oracle, 
        uint16 _srcChainId,
        bytes32 _blockHash, 
        bytes32 _receiptsHash
        ) external view returns(uint256) {
        
        return uint256(keccak256(abi.encode(_oracle, _srcChainId, _blockHash, _receiptsHash)));
    }

    function accruedNativeFee(address _address) external view returns (uint) {
        return _address.balance;
    }
}

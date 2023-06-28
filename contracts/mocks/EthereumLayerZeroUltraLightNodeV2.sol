// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



import "../interfaces/ILayerZeroUltraLightNodeV2.sol";


contract EthereumLayerZeroUltraLightNodeV2 is ILayerZeroUltraLightNodeV2 {

    function updateHash(uint16 _srcChainId, bytes32 _lookupHash, uint _confirmations, bytes32 _blockData) external {

    }

    // can only withdraw the receivable of the msg.sender
    function withdrawNative(address payable _to, uint _amount) external {

    }

    function hashLookup(address _oracle, uint16 _srcChainId,bytes32 _blockHash,bytes32 _receiptsHash) external view returns(uint256) {

    }

    function accruedNativeFee(address _address) external view returns (uint) {
        
    }
}

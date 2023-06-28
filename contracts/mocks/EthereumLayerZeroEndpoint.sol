// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



import "../interfaces/ILayerZeroEndpoint.sol";


contract EthereumLayerZeroEndpoint is ILayerZeroEndpoint {

    function getSendLibraryAddress(address _userApplication) external view returns (address) {

    }

    function getReceiveLibraryAddress(address _userApplication) external view returns (address) {

    }

}

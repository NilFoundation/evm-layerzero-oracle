// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/ILayerZeroEndpoint.sol";

contract EthereumLayerZeroEndpoint is ILayerZeroEndpoint {

    mapping(address => address) receiveLibraryAddressMapping;

    constructor(
        address[] memory userApplications, 
        address[] memory receiveLibraryAddress) {
            
        require(userApplications.length == receiveLibraryAddress.length, "Length not equal!");

        for (uint i = 0; i < userApplications.length; ++i) {
            receiveLibraryAddressMapping[userApplications[i]] = receiveLibraryAddress[i];
        }
    }

    function getReceiveLibraryAddress(address _userApplication) external view returns (address) {
        return receiveLibraryAddressMapping[_userApplication];
    }

}

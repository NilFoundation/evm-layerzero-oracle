/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVerifier__factory>;
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlUpgradeable__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1967Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "TimelockController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockController__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IERC1967",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ILayerZeroEndpoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILayerZeroEndpoint__factory>;
    getContractFactory(
      name: "ILayerZeroOracleV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILayerZeroOracleV2__factory>;
    getContractFactory(
      name: "ILayerZeroUltraLightNodeV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILayerZeroUltraLightNodeV2__factory>;
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;
    getContractFactory(
      name: "IExecuteMessageTransitionHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IExecuteMessageTransitionHandler__factory>;
    getContractFactory(
      name: "ILoremIpsumReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILoremIpsumReceiver__factory>;
    getContractFactory(
      name: "ILoremIpsumRequestHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILoremIpsumRequestHandler__factory>;
    getContractFactory(
      name: "ILoremIpsumResonseHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILoremIpsumResonseHandler__factory>;
    getContractFactory(
      name: "ILoremIpsumSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILoremIpsumSender__factory>;
    getContractFactory(
      name: "LoremIpsumAccess",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LoremIpsumAccess__factory>;
    getContractFactory(
      name: "LoremIpsumRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LoremIpsumRouter__factory>;
    getContractFactory(
      name: "ReceiverStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReceiverStorage__factory>;
    getContractFactory(
      name: "SenderStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SenderStorage__factory>;
    getContractFactory(
      name: "SharedStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SharedStorage__factory>;
    getContractFactory(
      name: "SourceAMB",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SourceAMB__factory>;
    getContractFactory(
      name: "TargetAMB",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TargetAMB__factory>;
    getContractFactory(
      name: "EthereumLightClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EthereumLightClient__factory>;
    getContractFactory(
      name: "IProofHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProofHandler__factory>;
    getContractFactory(
      name: "IProtocolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProtocolState__factory>;
    getContractFactory(
      name: "IZKLightClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZKLightClient__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "UUPSProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSProxy__factory>;
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;
    getContractFactory(
      name: "MockEthereumLightClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockEthereumLightClient__factory>;
    getContractFactory(
      name: "MockEthereumLightClientHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockEthereumLightClientHandler__factory>;
    getContractFactory(
      name: "MockRequestHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockRequestHandler__factory>;
    getContractFactory(
      name: "MockResponseHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockResponseHandler__factory>;
    getContractFactory(
      name: "LoremIpsumOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LoremIpsumOracle__factory>;
    getContractFactory(
      name: "LoremIpsumTransitionsManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LoremIpsumTransitionsManager__factory>;
    getContractFactory(
      name: "EthereumLayerZeroEndpoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EthereumLayerZeroEndpoint__factory>;
    getContractFactory(
      name: "EthereumLayerZeroUltraLightNodeV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EthereumLayerZeroUltraLightNodeV2__factory>;
    getContractFactory(
      name: "LightClientUpdateGen",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LightClientUpdateGen__factory>;
    getContractFactory(
      name: "ZkOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZkOracle__factory>;

    getContractAt(
      name: "IVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVerifier>;
    getContractAt(
      name: "AccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeable>;
    getContractAt(
      name: "IAccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlUpgradeable>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC1967Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "ReentrancyGuardUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "TimelockController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockController>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "IERC1967",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "ERC1967Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Proxy>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ILayerZeroEndpoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILayerZeroEndpoint>;
    getContractAt(
      name: "ILayerZeroOracleV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILayerZeroOracleV2>;
    getContractAt(
      name: "ILayerZeroUltraLightNodeV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILayerZeroUltraLightNodeV2>;
    getContractAt(
      name: "Timelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Timelock>;
    getContractAt(
      name: "IExecuteMessageTransitionHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IExecuteMessageTransitionHandler>;
    getContractAt(
      name: "ILoremIpsumReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILoremIpsumReceiver>;
    getContractAt(
      name: "ILoremIpsumRequestHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILoremIpsumRequestHandler>;
    getContractAt(
      name: "ILoremIpsumResonseHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILoremIpsumResonseHandler>;
    getContractAt(
      name: "ILoremIpsumSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILoremIpsumSender>;
    getContractAt(
      name: "LoremIpsumAccess",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LoremIpsumAccess>;
    getContractAt(
      name: "LoremIpsumRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LoremIpsumRouter>;
    getContractAt(
      name: "ReceiverStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReceiverStorage>;
    getContractAt(
      name: "SenderStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SenderStorage>;
    getContractAt(
      name: "SharedStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SharedStorage>;
    getContractAt(
      name: "SourceAMB",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SourceAMB>;
    getContractAt(
      name: "TargetAMB",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TargetAMB>;
    getContractAt(
      name: "EthereumLightClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EthereumLightClient>;
    getContractAt(
      name: "IProofHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProofHandler>;
    getContractAt(
      name: "IProtocolState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProtocolState>;
    getContractAt(
      name: "IZKLightClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZKLightClient>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "UUPSProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSProxy>;
    getContractAt(
      name: "Timelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Timelock>;
    getContractAt(
      name: "MockEthereumLightClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockEthereumLightClient>;
    getContractAt(
      name: "MockEthereumLightClientHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockEthereumLightClientHandler>;
    getContractAt(
      name: "MockRequestHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockRequestHandler>;
    getContractAt(
      name: "MockResponseHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockResponseHandler>;
    getContractAt(
      name: "LoremIpsumOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LoremIpsumOracle>;
    getContractAt(
      name: "LoremIpsumTransitionsManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LoremIpsumTransitionsManager>;
    getContractAt(
      name: "EthereumLayerZeroEndpoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EthereumLayerZeroEndpoint>;
    getContractAt(
      name: "EthereumLayerZeroUltraLightNodeV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EthereumLayerZeroUltraLightNodeV2>;
    getContractAt(
      name: "LightClientUpdateGen",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LightClientUpdateGen>;
    getContractAt(
      name: "ZkOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZkOracle>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILayerZeroOracleV2,
  ILayerZeroOracleV2Interface,
} from "../../../contracts/interfaces/ILayerZeroOracleV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_outboundProofType",
        type: "uint16",
      },
      {
        internalType: "uint64",
        name: "_outboundBlockConfirmation",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_userApplication",
        type: "address",
      },
    ],
    name: "assignJob",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_outboundProofType",
        type: "uint16",
      },
      {
        internalType: "uint64",
        name: "_outboundBlockConfirmation",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_userApplication",
        type: "address",
      },
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILayerZeroOracleV2__factory {
  static readonly abi = _abi;
  static createInterface(): ILayerZeroOracleV2Interface {
    return new utils.Interface(_abi) as ILayerZeroOracleV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILayerZeroOracleV2 {
    return new Contract(address, _abi, signerOrProvider) as ILayerZeroOracleV2;
  }
}

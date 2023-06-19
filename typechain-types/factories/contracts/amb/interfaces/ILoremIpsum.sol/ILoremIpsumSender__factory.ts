/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILoremIpsumSender,
  ILoremIpsumSenderInterface,
} from "../../../../../contracts/amb/interfaces/ILoremIpsum.sol/ILoremIpsumSender";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "SentMessage",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationChainId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationChainId",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "destinationAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILoremIpsumSender__factory {
  static readonly abi = _abi;
  static createInterface(): ILoremIpsumSenderInterface {
    return new utils.Interface(_abi) as ILoremIpsumSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILoremIpsumSender {
    return new Contract(address, _abi, signerOrProvider) as ILoremIpsumSender;
  }
}

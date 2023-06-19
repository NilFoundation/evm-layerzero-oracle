/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  LoremIpsumHandler,
  LoremIpsumHandlerInterface,
} from "../../../../contracts/amb/interfaces/LoremIpsumHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotFromLoremIpsumRouter",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_sourceChainId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_sourceAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "handleMessage",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class LoremIpsumHandler__factory {
  static readonly abi = _abi;
  static createInterface(): LoremIpsumHandlerInterface {
    return new utils.Interface(_abi) as LoremIpsumHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LoremIpsumHandler {
    return new Contract(address, _abi, signerOrProvider) as LoremIpsumHandler;
  }
}

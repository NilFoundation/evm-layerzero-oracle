/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SenderStorage,
  SenderStorageInterface,
} from "../../../../contracts/amb/LoremIpsumStorage.sol/SenderStorage";

const _abi = [
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sendingEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class SenderStorage__factory {
  static readonly abi = _abi;
  static createInterface(): SenderStorageInterface {
    return new utils.Interface(_abi) as SenderStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SenderStorage {
    return new Contract(address, _abi, signerOrProvider) as SenderStorage;
  }
}

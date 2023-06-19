/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILoremIpsumReceiver,
  ILoremIpsumReceiverInterface,
} from "../../../../../contracts/amb/interfaces/ILoremIpsum.sol/ILoremIpsumReceiver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "sourceChainId",
        type: "uint32",
      },
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
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "ExecutedMessage",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "slot",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "accountProof",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "storageProof",
        type: "bytes[]",
      },
    ],
    name: "executeMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "srcSlotTxSlotPack",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "messageBytes",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "receiptsRootProof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "receiptsRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes[]",
        name: "receiptProof",
        type: "bytes[]",
      },
      {
        internalType: "bytes",
        name: "txIndexRLPEncoded",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "logIndex",
        type: "uint256",
      },
    ],
    name: "executeMessageFromLog",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILoremIpsumReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): ILoremIpsumReceiverInterface {
    return new utils.Interface(_abi) as ILoremIpsumReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILoremIpsumReceiver {
    return new Contract(address, _abi, signerOrProvider) as ILoremIpsumReceiver;
  }
}

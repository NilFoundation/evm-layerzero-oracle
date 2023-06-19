/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PubSubStorage,
  PubSubStorageInterface,
} from "../../../contracts/pubsub/PubSubStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "eventsPublished",
    outputs: [
      {
        internalType: "enum PublishStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "subscriptions",
    outputs: [
      {
        internalType: "enum SubscriptionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610122806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80633cca331c14603757806394259c6c14606b575b600080fd5b605760423660046096565b60016020526000908152604090205460ff1681565b6040516062919060c4565b60405180910390f35b608b60763660046096565b60026020526000908152604090205460ff1681565b6040516062919060db565b60006020828403121560a757600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b602081016003831060d55760d560ae565b91905290565b602081016002831060d55760d560ae56fea26469706673582212202f0daa3e7e48855dd900eb238a38baba07d7f306532fbd9e3c59f4afccb67d4464736f6c63430008100033";

type PubSubStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PubSubStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PubSubStorage__factory extends ContractFactory {
  constructor(...args: PubSubStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PubSubStorage> {
    return super.deploy(overrides || {}) as Promise<PubSubStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PubSubStorage {
    return super.attach(address) as PubSubStorage;
  }
  override connect(signer: Signer): PubSubStorage__factory {
    return super.connect(signer) as PubSubStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PubSubStorageInterface {
    return new utils.Interface(_abi) as PubSubStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PubSubStorage {
    return new Contract(address, _abi, signerOrProvider) as PubSubStorage;
  }
}

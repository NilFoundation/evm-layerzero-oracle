/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EthereumLayerZeroUltraLightNodeV2,
  EthereumLayerZeroUltraLightNodeV2Interface,
} from "../../../contracts/mocks/EthereumLayerZeroUltraLightNodeV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_lookupHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_confirmations",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_blockData",
        type: "bytes32",
      },
    ],
    name: "HashUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "MagicCodeVerify",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "WithdrawNative",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accruedNativeFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "_blockHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_receiptsHash",
        type: "bytes32",
      },
    ],
    name: "hashLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "_lookupHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_confirmations",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_blockData",
        type: "bytes32",
      },
    ],
    name: "updateHash",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "withdrawNative",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610305806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806307b18bde1461005157806369412bfa14610066578063704316e514610093578063759c5b3b146100a6575b600080fd5b61006461005f3660046101eb565b610102565b005b610081610074366004610217565b6001600160a01b03163190565b60405190815260200160405180910390f35b6100646100a1366004610252565b610148565b6100816100b436600461028b565b604080516001600160a01b039590951660208087019190915261ffff949094168582015260608501929092526080808501919091528151808503909101815260a09093019052815191012090565b604080516001600160a01b0384168152602081018390527fde93db11f7aedf7cb3be22dc4d80e7790ab4b59a30aae83e86ac8326245542c5910160405180910390a15050565b6040805161ffff8616815260208101859052908101839052606081018290527fd45d49155d7ebee2b6f0c5d690756a1072fa50876ba3543a22cc9bf473c6bd8f9060800160405180910390a160405165aabbccddeeff81527ff2637b5776f02e4f9002f1a45affa8c9164564725a3250d9ea7231cd4e274f889060200160405180910390a150505050565b6001600160a01b03811681146101e857600080fd5b50565b600080604083850312156101fe57600080fd5b8235610209816101d3565b946020939093013593505050565b60006020828403121561022957600080fd5b8135610234816101d3565b9392505050565b803561ffff8116811461024d57600080fd5b919050565b6000806000806080858703121561026857600080fd5b6102718561023b565b966020860135965060408601359560600135945092505050565b600080600080608085870312156102a157600080fd5b84356102ac816101d3565b93506102ba6020860161023b565b9396939550505050604082013591606001359056fea26469706673582212208a73c9db4d1fcca212fdf51a63ba3e82ad07f959996c710e94bdfd92554dbf9564736f6c63430008100033";

type EthereumLayerZeroUltraLightNodeV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EthereumLayerZeroUltraLightNodeV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EthereumLayerZeroUltraLightNodeV2__factory extends ContractFactory {
  constructor(...args: EthereumLayerZeroUltraLightNodeV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EthereumLayerZeroUltraLightNodeV2> {
    return super.deploy(
      overrides || {}
    ) as Promise<EthereumLayerZeroUltraLightNodeV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EthereumLayerZeroUltraLightNodeV2 {
    return super.attach(address) as EthereumLayerZeroUltraLightNodeV2;
  }
  override connect(signer: Signer): EthereumLayerZeroUltraLightNodeV2__factory {
    return super.connect(signer) as EthereumLayerZeroUltraLightNodeV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EthereumLayerZeroUltraLightNodeV2Interface {
    return new utils.Interface(
      _abi
    ) as EthereumLayerZeroUltraLightNodeV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthereumLayerZeroUltraLightNodeV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EthereumLayerZeroUltraLightNodeV2;
  }
}

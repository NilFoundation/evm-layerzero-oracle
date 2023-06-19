/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface MockResponseHandlerInterface extends utils.Interface {
  functions: {
    "handleResponseMessage(uint32,address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "handleResponseMessage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "handleResponseMessage",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "handleResponseMessage",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockResponseHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockResponseHandlerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    handleResponseMessage(
      _sourceChainId: PromiseOrValue<BigNumberish>,
      _sourceAddress: PromiseOrValue<string>,
      _response_data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  handleResponseMessage(
    _sourceChainId: PromiseOrValue<BigNumberish>,
    _sourceAddress: PromiseOrValue<string>,
    _response_data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    handleResponseMessage(
      _sourceChainId: PromiseOrValue<BigNumberish>,
      _sourceAddress: PromiseOrValue<string>,
      _response_data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    handleResponseMessage(
      _sourceChainId: PromiseOrValue<BigNumberish>,
      _sourceAddress: PromiseOrValue<string>,
      _response_data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    handleResponseMessage(
      _sourceChainId: PromiseOrValue<BigNumberish>,
      _sourceAddress: PromiseOrValue<string>,
      _response_data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

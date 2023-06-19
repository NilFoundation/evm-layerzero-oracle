/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface PubSubStorageInterface extends utils.Interface {
  functions: {
    "eventsPublished(bytes32)": FunctionFragment;
    "subscriptions(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "eventsPublished" | "subscriptions"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "eventsPublished",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "subscriptions",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "eventsPublished",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subscriptions",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PubSubStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PubSubStorageInterface;

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
    eventsPublished(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    subscriptions(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  eventsPublished(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  subscriptions(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    eventsPublished(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    subscriptions(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    eventsPublished(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    subscriptions(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    eventsPublished(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    subscriptions(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

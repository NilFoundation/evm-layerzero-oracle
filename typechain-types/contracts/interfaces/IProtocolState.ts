/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface IProtocolStateInterface extends utils.Interface {
  functions: {
    "consistent()": FunctionFragment;
    "head()": FunctionFragment;
    "headers(uint256)": FunctionFragment;
    "stateRoots(uint256)": FunctionFragment;
    "timestamps(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "consistent"
      | "head"
      | "headers"
      | "stateRoots"
      | "timestamps"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "consistent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "head", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "headers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stateRoots",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "timestamps",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "consistent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "head", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "headers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stateRoots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timestamps", data: BytesLike): Result;

  events: {};
}

export interface IProtocolState extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IProtocolStateInterface;

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
    consistent(overrides?: CallOverrides): Promise<[boolean]>;

    head(overrides?: CallOverrides): Promise<[BigNumber]>;

    headers(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    stateRoots(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    timestamps(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  consistent(overrides?: CallOverrides): Promise<boolean>;

  head(overrides?: CallOverrides): Promise<BigNumber>;

  headers(
    slot: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  stateRoots(
    slot: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  timestamps(
    slot: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    consistent(overrides?: CallOverrides): Promise<boolean>;

    head(overrides?: CallOverrides): Promise<BigNumber>;

    headers(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    stateRoots(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    timestamps(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    consistent(overrides?: CallOverrides): Promise<BigNumber>;

    head(overrides?: CallOverrides): Promise<BigNumber>;

    headers(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stateRoots(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    timestamps(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    consistent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    head(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    headers(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stateRoots(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timestamps(
      slot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

import { AsyncThunk } from "@reduxjs/toolkit";
import { ComponentState } from "react";

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
export type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
export type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
export type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

export interface PrivateRouteType {
  path: string;
  component: ComponentState;
  layout?: ComponentState;
  exact?: boolean;
}

export interface ITimestamp {
  seconds: number;
  nanoseconds: number;
}

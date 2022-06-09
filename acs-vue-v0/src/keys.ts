import type { CallAdapter, CallAdapterState } from "@azure/communication-react";
import type { InjectionKey, ShallowRef } from "vue";

export const adapterKey = Symbol() as InjectionKey<ShallowRef<CallAdapter | null>>;
export const stateKey = Symbol() as InjectionKey<ShallowRef<CallAdapterState | null>>;
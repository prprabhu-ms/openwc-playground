import type { CallAdapter } from "@azure/communication-react";
import type { InjectionKey, ShallowRef } from "vue";

export const adapterKey = Symbol() as InjectionKey<ShallowRef<CallAdapter | null>>;
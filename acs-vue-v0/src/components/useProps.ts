import { adapterKey, stateKey } from "@/keys";
import type { CallAdapter, CallAdapterState } from "@azure/communication-react";
import { computed, inject, shallowRef, type ComputedRef, type ShallowRef } from "vue";

/**
 * Return intersect type of 2 types
 *
 * @public
 */
export type Common<A, B> = Pick<A, CommonProperties<A, B>>;

/**
 * Return intersect properties of 2 types
 *
 * @public
 */
export type CommonProperties<A, B> = {
    [P in keyof A & keyof B]: A[P] extends B[P] ? P : never;
}[keyof A & keyof B];


export interface AcsProps<State, Handlers> {
    state: State;
    handlers: Common<CallAdapter, Handlers>;
};


export function useProps<State, Handlers>(selector: (state: CallAdapterState) => State): ComputedRef<AcsProps<State, Handlers> | undefined> {
    const state = inject<ShallowRef<CallAdapterState | undefined>>(stateKey, shallowRef(undefined));
    const adapter = inject<ShallowRef<CallAdapter | undefined>>(adapterKey, shallowRef(undefined));
    return computed(() => {
        if (!state.value || !adapter.value) {
            return undefined;
        }
        return {
            state: selector(state.value),
            handlers: adapter.value,
        }
    });
}
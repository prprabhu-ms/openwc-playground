<script setup lang="ts">
import { adapterKey, stateKey } from "@/keys";
import { microphoneButtonSelector, type AcsMicrophoneHandlers, type AcsMicrophoneState } from "@/vendored/AcsV0Selectors";
import type { CallAdapter, CallAdapterState } from "@azure/communication-react";
import { computed, inject, shallowRef, type ComputedRef, type ShallowRef } from "vue";
import "../vendored/acs-v0";

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

function useSelector<State>(selector: (state: CallAdapterState) => State): ComputedRef<State | undefined> {
    const state = inject<ShallowRef<CallAdapterState | undefined>>(stateKey, shallowRef(undefined));
    return computed(() => state.value && selector(state.value));
}

function useHandlers<Handlers>(): ShallowRef<Common<CallAdapter, Handlers> | undefined> {
    return inject<ShallowRef<CallAdapter | undefined>>(adapterKey, shallowRef(undefined));
}

const state = useSelector(microphoneButtonSelector);
const handlers = useHandlers<AcsMicrophoneHandlers>();

</script>

<template>
    <acs-microphone-button explicitprops :state="state" :handlers="handlers"></acs-microphone-button>
</template>
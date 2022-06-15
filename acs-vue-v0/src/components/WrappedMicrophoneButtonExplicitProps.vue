<script setup lang="ts">
import { adapterKey, stateKey } from "@/keys";
import { microphoneButtonSelector, type AcsMicrophoneHandlers, type AcsMicrophoneState } from "@/vendored/AcsV0Selectors";
import type { CallAdapter, CallAdapterState } from "@azure/communication-react";
import { computed, inject, shallowRef, type ComputedRef, type ShallowRef } from "vue";
import "../vendored/acs-v0";

function microphoneState(): ComputedRef<AcsMicrophoneState | undefined> {
    const state = inject<ShallowRef<CallAdapterState | undefined>>(stateKey, shallowRef(undefined));
    return computed(() => state.value && microphoneButtonSelector(state.value));
}

function microphoneHandlers(): ShallowRef<AcsMicrophoneHandlers | undefined> {
    const adapter = inject<ShallowRef<CallAdapter | undefined>>(adapterKey, shallowRef(undefined));
    return adapter;
}

const state = microphoneState();
const handlers = microphoneHandlers();

</script>

<template>
    <acs-microphone-button explicitprops :state="state" :handlers="handlers"></acs-microphone-button>
</template>
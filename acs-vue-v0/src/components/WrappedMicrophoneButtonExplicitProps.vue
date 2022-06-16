<script setup lang="ts">
import type { AcsMicrophoneHandlers, AcsMicrophoneState } from "@/vendored/AcsV0Selectors";
import "../vendored/acs-v0";
import type { AcsProps } from "./useProps";

// This must be an interface (type won't work).
// TODO: I don't understand why vue wants this to be `Partial`.
export interface WrappedMicrophoneButtonExplicitProps extends Partial<AcsProps<AcsMicrophoneState, AcsMicrophoneHandlers>> {};
const props = defineProps<WrappedMicrophoneButtonExplicitProps>();

</script>

<template>
    <acs-microphone-button explicitprops :state="props.state" :handlers="props.handlers"></acs-microphone-button>
</template>
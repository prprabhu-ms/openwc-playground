<script setup lang="ts">
import type { AcsMicrophoneHandlers, AcsMicrophoneState } from "@/vendored/AcsV0Selectors";
import "../vendored/acs-v0";
import type { AcsProps } from "./useProps";

// This must be an interface (type won't work).
export interface WrappedMicrophoneButtonProps extends Partial<AcsProps<AcsMicrophoneState, AcsMicrophoneHandlers>> {
    explicitprops?: boolean;
};

const props = defineProps<WrappedMicrophoneButtonProps>();

</script>

<template>
    <acs-microphone-button :explicitprops="explicitprops" :state="props.explicitprops ? props.state : undefined"
        :handlers="props.explicitprops ? props.handlers : undefined">
    </acs-microphone-button>
</template>
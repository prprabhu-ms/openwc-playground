<script setup lang="ts">
import { fastButton, provideFASTDesignSystem } from "@microsoft/fast-components";
import { onMounted } from "vue";
import "../vendored/wc/acs-microphone-button";

// Perhaps this needs to happen sooner?
provideFASTDesignSystem().register(fastButton());

onMounted(() => {
    console.log('WrappedMicrophoneButton mounted');

})

</script>

<template>
<acs-microphone-button></acs-microphone-button>
</template>
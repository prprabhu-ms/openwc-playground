<script setup lang="ts">
import { adapterKey } from "@/keys";
import type { CallAdapter } from "@azure/communication-react";
import { inject, shallowRef, type ShallowRef } from "vue";
import "../vendored/acs-v0";

const adapter = inject<ShallowRef<CallAdapter | null>>(adapterKey, shallowRef(null));

</script>

<template>
    <acs-real-call-provider :adapter="adapter !== null ? adapter : undefined">
        <slot></slot>
    </acs-real-call-provider>
</template>
<script setup lang="ts">
import { adapterKey, stateKey } from '@/keys';
import type { CallAdapterState, CallAdapter } from '@azure/communication-react';
import { inject, shallowRef, type ShallowRef } from 'vue';
import NativeMicrophoneButton from './NativeMicrophoneButton.vue';

const adapter = inject<ShallowRef<CallAdapter | null>>(adapterKey, shallowRef(null));
</script>

<template>
<div v-if="adapter !== null">
  <NativeMicrophoneButton />
</div>
<div v-else>
  No adapter yet. Wait for it... wait for it...
</div>
</template>
<script setup lang="ts">
import { adapterKey, stateKey } from '@/keys';
import type { CallAdapterState, CallAdapter } from '@azure/communication-react';
import { inject, shallowRef, type ShallowRef } from 'vue';

const adapter = inject<ShallowRef<CallAdapter | null>>(adapterKey, shallowRef(null));
const state = inject<ShallowRef<CallAdapterState | null>>(stateKey, shallowRef(null));
</script>

<template>
<div v-if="adapter !== null">
  Adapter set!
  <br/>
  Local user's display name is: {{ state?.displayName }}.
</div>
<div v-else>
  No adapter :(
</div>
</template>
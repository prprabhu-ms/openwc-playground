<script setup lang="ts">
import { adapterKey } from '@/keys';
import type { CallAdapter } from '@azure/communication-react';
import { inject, shallowRef, type ShallowRef } from 'vue';

const adapter = inject<ShallowRef<CallAdapter | null>>(adapterKey, shallowRef(null));
</script>

<template>
<div v-if="adapter !== null">
  Adapter set!
</div>
<div v-else>
  No adapter :(
</div>
</template>
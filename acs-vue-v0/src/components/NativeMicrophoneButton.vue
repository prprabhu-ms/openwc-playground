<script setup lang="ts">
import { adapterKey, stateKey } from '@/keys';
import type { CallAdapterState, CallAdapter } from '@azure/communication-react';
import { computed, inject, shallowRef, type ShallowRef } from 'vue';

const adapter = inject<ShallowRef<CallAdapter | null>>(adapterKey, shallowRef(null));
const state = inject<ShallowRef<CallAdapterState | null>>(stateKey, shallowRef(null));

const muted = computed(() => !!state.value?.call?.isMuted);

function onClick(): void {
    if (muted.value) {
        adapter.value?.unmute();
    } else {
        adapter.value?.mute();
    }
}
</script>

<template>
  <button @click="onClick">
  {{ muted ? "unmute" : "mute" }}
  </button>
</template>
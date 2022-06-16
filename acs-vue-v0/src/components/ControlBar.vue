<script setup lang="ts">
import { adapterKey } from '@/keys';
import type { CallAdapter } from '@azure/communication-react';
import { inject, shallowRef, type ShallowRef } from 'vue';
import NativeMicrophoneButton from './NativeMicrophoneButton.vue';
import WrappedProvider from './WrappedProvider.vue';
import WrappedMicrophoneButton from './WrappedMicrophoneButton.vue';
import WrappedMicrophoneButtonExplicitProps from './WrappedMicrophoneButtonExplicitProps.vue';
import { microphoneButtonSelector, type AcsMicrophoneHandlers, type AcsMicrophoneState } from '@/vendored/AcsV0Selectors';
import { useProps } from './useProps';

const adapter = inject<ShallowRef<CallAdapter | null>>(adapterKey, shallowRef(null));

const microphoneProps = useProps<AcsMicrophoneState, AcsMicrophoneHandlers>(microphoneButtonSelector);

</script>

<template>
<div v-if="adapter !== null" class="toolbar">
  <div class="tb-title">
    Native Vue:
  </div>
  <div class="tb-button">
    <NativeMicrophoneButton />
  </div>

  <div class="tb-title">
    Web component, wrapped in Vue:
  </div>
  <div class="tb-button">
    <WrappedProvider>
      <WrappedMicrophoneButton />
    </WrappedProvider>
  </div>

  <div class="tb-title">
    Web component, wrapped in Vue with <code>explicitprops</code>:
  </div>
  <div class="tb-button">
    <WrappedMicrophoneButtonExplicitProps v-bind="microphoneProps" />
  </div>
</div>
<div v-else>
  No adapter yet. Wait for it... wait for it...
</div>
</template>

<style scoped>
.toolbar {
  display: grid;
  grid-template-columns: 1fr 5fr;
  row-gap: 1rem;
  column-gap: 1rem;
}
.tb-title {
  grid-column: 1 / 2;
}
.tb-button {
  grid-column: 2 / 3;
}

</style>
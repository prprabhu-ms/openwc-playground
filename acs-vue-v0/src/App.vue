<script setup lang="ts">
import type { CallAdapterState, CallAdapter } from '@azure/communication-react';
import { provide, shallowRef } from 'vue';
import Composite from './components/Composite.vue';
import ControlBar from './components/ControlBar.vue';
import { adapterKey, stateKey } from './keys';


const adapter = shallowRef<CallAdapter | null>(null);
provide(adapterKey, adapter);
const state = shallowRef<CallAdapterState | null>(null);
provide(stateKey, state);

function onAdapterCreated (event: CustomEvent): void {
  adapter.value = event.detail.adapter;
  state.value = adapter.value?.getState() ?? null;
  adapter.value?.onStateChange((value) => state.value = value);
};

</script>

<template>
  <div class="composite">
    <Composite @adaptercreated="onAdapterCreated"/>
  </div>
  <div class="vue-v0">
    <ControlBar />
  </div>
</template>


<style>
@import './assets/base.css';

#app {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-weight: normal;
}

.composite {
  flex-grow: 1;
  background-color: var(--color-background-mute);
  margin: 2rem;
  padding: 1rem;
}

.vue-v0 {
  background-color: var(--color-background-mute);
  margin: 2rem;
  margin-top: unset;
  padding: 1rem;
}
</style>

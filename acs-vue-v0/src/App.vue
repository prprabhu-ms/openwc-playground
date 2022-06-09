<template>
  <div class="composite">
    The composite will go here.
  </div>
  <div class="vue-v0">
    The vue button(s) will go here.
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

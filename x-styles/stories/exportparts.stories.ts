import { html } from 'lit';
import '../src/index.js';

export default {
  title: 'ExportParts',
};

export const Default = () => html`
<style>
    x-exportparts::part(please-export-me) {
      background-color: aquamarine;
    }
    x-exportparts::part(and-me) {
      background-color: cyan;
    }
  </style>
  <x-exportparts></x-exportparts>
`

export const Named = () => html`
<style>
    x-exportparts-named::part(please-export-me-1) {
      background-color: aquamarine;
    }
    x-exportparts-named::part(please-export-me-2) {
      background-color: cyan;
    }
  </style>
  <x-exportparts-named></x-exportparts-named>
`

export const Slotted = () => html`
<style>
    x-exportparts-slotted::part(please-export-me) {
      background-color: aquamarine;
    }
  </style>
  <x-exportparts-slotted></x-exportparts-slotted>
`
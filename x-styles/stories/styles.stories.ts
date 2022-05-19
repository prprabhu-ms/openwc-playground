import { html } from 'lit';
import '../src/index.js';

export default {
  title: 'Styles',
};

export const Default = () => html`<styles-outer></styles-outer>`;

export const StyledHost = () => html`
  <style>
    styles-outer {
      background-color: aquamarine;
    }
  </style>
  <styles-outer></styles-outer>
`;

export const StyledPart = () => html`
  <style>
    styles-outer::part(start) {
      background-color: aquamarine;
    }
  </style>
  <styles-outer></styles-outer>
`;

export const StyledInnerHost = () => html`
  <style>
    styles-inner {
      background-color: aquamarine;
    }
  </style>
  <styles-outer></styles-outer>
`;

export const StyledInnerPart = () => html`
  <style>
    styles-inner::part(start) {
      background-color: aquamarine;
    }
  </style>
  <styles-outer></styles-outer>
`;

export const CustomCSS = () => html`
  <style>
    styles-outer {
      --inner-custom-background-color: aquamarine;
    }
  </style>
  <styles-outer></styles-outer>
`;

export const CustomCSSPart = () => html`
  <style>
    styles-outer::part(start) {
      --inner-custom-background-color: aquamarine;
    }
  </style>
  <styles-outer></styles-outer>
`;

export const ExportParts = () => html`
<style>
    x-exportparts-outer::part(please-export-me) {
      background-color: aquamarine;
    }
    x-exportparts-outer::part(and-me) {
      background-color: cyan;
    }
  </style>
  <x-exportparts-outer></x-exportparts-outer>
`
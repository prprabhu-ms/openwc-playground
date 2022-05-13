import { html } from 'lit';
import '../src/index.js';

export default {
  title: 'NestedTabOrder',
};

export const Default = () => html`
  <style>
    .styled-div {
      border-width: 1px;
      border-color: green;
      border-style: solid;
      padding: 1rem;
      margin: 1rem;
    }
    .styled-div:focus {
      outline: 4px dashed green;
    }
  </style>
  <ul>
    <li>Linear tab order, does not stop on the component itself.</li>
    <li>What you want in most cases</li>
  </ul>
  <div tabindex="0" class="styled-div">Before component</div>
  <x-nested-tab-order tabindex="0"></x-nested-tab-order>
  <div tabindex="0" class="styled-div">After component</div>
`;

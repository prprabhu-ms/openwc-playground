import { html } from 'lit';
import '../src/index.js';

export default {
  title: 'TabOrder',
};

export const NoDelegateNoTabIndex = () => html`
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
    <li>The whole component is skipped in tab order</li>
    <li>
      Can click on one of the divs inside, and then tab order works linearly.
    </li>
  </ul>
  <div tabindex="0" class="styled-div">Before component</div>
  <x-tab-order-no-delegate tabindex="-1"></x-tab-order-no-delegate>
  <div tabindex="0" class="styled-div">After component</div>
`;

export const NoDelegateWithTabIndex = () => html`
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
    <li>
      Tab order stops on the component itself before going in. So, component is
      added before (slotted) children in tab order.
    </li>
  </ul>
  <div tabindex="0" class="styled-div">Before component</div>
  <x-tab-order-no-delegate tabindex="0"></x-tab-order-no-delegate>
  <div tabindex="0" class="styled-div">After component</div>
`;

export const DelegateNoTabIndex = () => html`
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
    <li>Same behavior as NoDelegateNoTabIndex</li>
    <li>The whole component is skipped in tab order</li>
    <li>
      Can click on one of the divs inside, and then tab order works linearly.
    </li>
  </ul>
  <div tabindex="0" class="styled-div">Before component</div>
  <x-tab-order-delegate tabindex="-1"></x-tab-order-delegate>
  <div tabindex="0" class="styled-div">After component</div>
`;

export const DelegateWithTabIndex = () => html`
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
  <x-tab-order-delegate tabindex="0"></x-tab-order-delegate>
  <div tabindex="0" class="styled-div">After component</div>
`;

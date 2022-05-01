import { html } from 'lit';
import '../src/index.js';

export default {
  title: 'InjectionIcon',
  component: 'injection-icon',
};

// icons from https://remixicon.com/

export const Microphone = () => html`
  <injection-icon>
    <i class="ri-volume-up-fill" slot="icon-unchecked"></i>
    <i class="ri-volume-off-vibrate-fill" slot="icon-checked"></i>
  </injection-icon>
`;

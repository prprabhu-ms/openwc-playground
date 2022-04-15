import { html } from 'lit';
import '../src/index.js';
import '../src/acs-mute-button.js';

export default {
  title: 'AcsMuteButton',
  component: 'acs-mute-button',
};

export const Regular = () => html`<acs-mute-button></acs-mute-button>`;

import { html } from 'lit';
import '../src/index.js';
import '../src/acs-microphone-button.js';

export default {
  title: 'AcsMicrophoneButton',
  component: 'acs-microphone-button',
  argTypes: {},
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args: unknown) =>
  html`<acs-microphone-button></acs-microphone-button>`;

export const Regular = Template.bind({});

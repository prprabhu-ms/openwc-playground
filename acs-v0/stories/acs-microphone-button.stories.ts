import { html } from 'lit';
import '../src/index.js';
import '../src/acs-microphone-button.js';
import '../src/acs-fake-call-provider.js';

export default {
  title: 'AcsMicrophoneButton',
  component: 'acs-microphone-button',
  argTypes: {},
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args: unknown) =>
  html`
    <acs-fake-call-provider>
      <acs-microphone-button></acs-microphone-button>
    </acs-fake-call-provider>
  `;

export const Regular = Template.bind({});

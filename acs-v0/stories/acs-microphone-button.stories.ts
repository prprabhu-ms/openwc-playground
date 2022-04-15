import { html } from 'lit';
import '../src/index.js';
import '../src/acs-microphone-button.js';

export default {
  title: 'AcsMicrophoneButton',
  component: 'acs-microphone-button',
  argTypes: {
    checked: {
      control: 'boolean',
    },
  },
};

const Template = (args: { checked: boolean }) =>
  html`<acs-microphone-button
    ?checked=${args.checked}
  ></acs-microphone-button>`;

export const Regular = Template.bind({});

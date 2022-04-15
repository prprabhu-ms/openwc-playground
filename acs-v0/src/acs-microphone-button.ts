import {
  FASTElement,
  customElement,
  attr,
  html,
  when,
} from '@microsoft/fast-element';

const uncheckedSlot = html<AcsMicrophoneButton>`
  <slot> ${x => x.strings.onLabel} </slot>
`;

const checkedSlot = html<AcsMicrophoneButton>`
  <slot name="checked"> ${x => x.strings.offLabel} </slot>
`;

const template = html<AcsMicrophoneButton>`
  <fast-button>
    ${when(x => !x.checked, uncheckedSlot)} ${when(x => x.checked, checkedSlot)}
  </fast-button>
`;

@customElement({ name: 'acs-microphone-button', template })
export class AcsMicrophoneButton extends FASTElement {
  strings = {
    onLabel: 'mute',
    offLabel: 'unmute',
  };

  @attr({ mode: 'boolean' }) checked: boolean = false;
}

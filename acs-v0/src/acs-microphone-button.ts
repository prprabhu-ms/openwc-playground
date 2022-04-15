import {
  FASTElement,
  customElement,
  html,
  when,
  observable,
} from '@microsoft/fast-element';

const uncheckedSlot = html<AcsMicrophoneButton>`
  <slot> ${x => x.strings.onLabel} </slot>
`;

const checkedSlot = html<AcsMicrophoneButton>`
  <slot name="checked"> ${x => x.strings.offLabel} </slot>
`;

const template = html<AcsMicrophoneButton>`
  <fast-button @click=${x => x.onClick()}>
    ${when(x => !x.checked, uncheckedSlot)} ${when(x => x.checked, checkedSlot)}
  </fast-button>
`;

@customElement({ name: 'acs-microphone-button', template })
export class AcsMicrophoneButton extends FASTElement {
  strings = {
    onLabel: 'mute',
    offLabel: 'unmute',
  };

  @observable checked: boolean = false;

  onClick() {
    this.checked = !this.checked;
  }
}

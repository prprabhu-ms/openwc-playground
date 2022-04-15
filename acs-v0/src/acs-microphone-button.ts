/* eslint-disable max-classes-per-file */
import {
  FASTElement,
  customElement,
  html,
  when,
  observable,
} from '@microsoft/fast-element';
import {
  AcsMicrophoneState,
  FakeMicrophoneButtonAdapter,
} from './MicrophoneButtonAdapter.js';

const globalAdapter = new FakeMicrophoneButtonAdapter();

const uncheckedSlot = html<AcsMicrophoneButton>`
  <slot> ${x => x.strings.onLabel} </slot>
`;

const checkedSlot = html<AcsMicrophoneButton>`
  <slot name="checked"> ${x => x.strings.offLabel} </slot>
`;

const template = html<AcsMicrophoneButton>`
  <fast-button @click=${x => x.onClick()}>
    ${when(x => !x.state.checked, uncheckedSlot)}
    ${when(x => x.state.checked, checkedSlot)}
  </fast-button>
`;

@customElement({ name: 'acs-microphone-button', template })
export class AcsMicrophoneButton extends FASTElement {
  strings = {
    onLabel: 'mute',
    offLabel: 'unmute',
  };

  @observable state: AcsMicrophoneState = {
    checked: false,
  };

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    globalAdapter.registerStateChangeHandler(this.onStateChange.bind(this));
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback && super.disconnectedCallback();
    globalAdapter.unregisterStateChangeHandler(this.onStateChange.bind(this));
  }

  onStateChange(newState: AcsMicrophoneState) {
    this.state = newState;
  }

  onClick() {
    this.state = {
      ...this.state,
      checked: !this.state.checked,
    };
  }
}

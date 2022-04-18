/* eslint-disable max-classes-per-file */
import {
  FASTElement,
  customElement,
  html,
  when,
  observable,
} from '@microsoft/fast-element';
import {
  AcsMicrophoneButtonContext,
  AcsMicrophoneState,
  findMicrophoneButtonContext,
  microphoneButtonSelector,
} from './MicrophoneButtonContext.js';

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
  private context?: AcsMicrophoneButtonContext;

  strings = {
    onLabel: 'mute',
    offLabel: 'unmute',
  };

  @observable state: AcsMicrophoneState = {
    checked: false,
  };

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    this.context = findMicrophoneButtonContext(this);
    this.context.registerStateChangeCallback(
      this.onStateChange.bind(this),
      microphoneButtonSelector
    );
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback && super.disconnectedCallback();
    this.context?.unregisterStateChangeCallback(
      this.onStateChange.bind(this),
      microphoneButtonSelector
    );
    this.context = undefined;
  }

  onStateChange(newState: AcsMicrophoneState) {
    this.state = newState;
  }

  onClick() {
    if (this.state.checked) {
      this.context?.unmute();
    } else {
      this.context?.mute();
    }
  }
}

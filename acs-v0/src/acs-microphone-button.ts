/* eslint-disable max-classes-per-file */
import { customElement, html, when } from '@microsoft/fast-element';
import { AcsCallContext } from './AcsCallProvider.js';
import { BaseComponent } from './BaseComponent.js';
import {
  AcsMicrophoneButtonContext,
  AcsMicrophoneHandlers,
  AcsMicrophoneState,
  MicrophoneButtonSelector,
  microphoneButtonSelector,
} from './MicrophoneButtonContext.js';

const uncheckedSlot = html<AcsMicrophoneButton>`
  <slot> ${x => x.strings.onLabel} </slot>
`;

const checkedSlot = html<AcsMicrophoneButton>`
  <slot name="checked"> ${x => x.strings.offLabel} </slot>
`;

const template = html<AcsMicrophoneButton>`
  ${when(
    x => x.state,
    html`
      <fast-button @click=${x => x.onClick()}>
        ${when(x => !x.state?.checked, uncheckedSlot)}
        ${when(x => x.state?.checked, checkedSlot)}
      </fast-button>
    `
  )}
`;

@customElement({ name: 'acs-microphone-button', template })
export class AcsMicrophoneButton extends BaseComponent<
  AcsMicrophoneState,
  AcsMicrophoneHandlers,
  AcsMicrophoneButtonContext
> {
  strings = {
    onLabel: 'mute',
    offLabel: 'unmute',
  };

  override getSelector(): MicrophoneButtonSelector {
    return microphoneButtonSelector;
  }

  override safeContextCast(
    context: AcsCallContext
  ): AcsMicrophoneButtonContext {
    return context;
  }

  onClick() {
    if (!this.state || !this.handlers) {
      return;
    }
    if (this.state.checked) {
      this.handlers.unmute();
    } else {
      this.handlers.mute();
    }
  }
}

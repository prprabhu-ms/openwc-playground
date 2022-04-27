/* eslint-disable max-classes-per-file */
import { customElement, html, when } from '@microsoft/fast-element';
import { AcsCallContext } from './AcsCallProvider.js';
import { BaseComponent } from './BaseComponent.js';
import {
  AcsMicrophoneButtonContext,
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
  <fast-button @click=${x => x.onClick()}>
    ${when(x => !x.state || !x.state.checked, uncheckedSlot)}
    ${when(x => x.state?.checked, checkedSlot)}
  </fast-button>
`;

@customElement({ name: 'acs-microphone-button', template })
export class AcsMicrophoneButton extends BaseComponent<
  AcsMicrophoneButtonContext,
  AcsMicrophoneState
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
    const context = this.getContext();
    if (!this.state || !context) {
      return;
    }
    if (this.state.checked) {
      context.unmute();
    } else {
      context.mute();
    }
  }
}

import { CallAdapterState } from '@azure/communication-react';
import * as reselect from 'reselect';
import { FakeCallAdapter } from './FakeCallAdapter.js';

export interface AcsMicrophoneState {
  checked: boolean;
}

export interface AcsMicrophoneButtonAdapter {
  mute(): Promise<void>;
  unmute(): Promise<void>;
  registerStateChangeHandler(
    handler: (newState: AcsMicrophoneState) => void
  ): void;
  unregisterStateChangeHandler(
    handler: (newState: AcsMicrophoneState) => void
  ): void;
}

export class FakeMicrophoneButtonAdapter
  extends FakeCallAdapter
  implements AcsMicrophoneButtonAdapter
{
  registerStateChangeHandler(
    handler: (newState: AcsMicrophoneState) => void
  ): void {
    this.onStateChange(state => {
      handler(microphoneButtonSelector(state));
    });
  }

  unregisterStateChangeHandler(
    handler: (newState: AcsMicrophoneState) => void
  ): void {
    this.offStateChange(state => {
      handler(microphoneButtonSelector(state));
    });
  }
}

declare type MicrophoneButtonSelector = (
  state: CallAdapterState
) => AcsMicrophoneState;

const getCallExists = (state: CallAdapterState): boolean => !!state.call;
const getIsMuted = (state: CallAdapterState): boolean | undefined =>
  state.call?.isMuted;

// Copy-pasta from unexported impl in ui lib:
export const microphoneButtonSelector: MicrophoneButtonSelector =
  reselect.createSelector(
    [getCallExists, getIsMuted],
    (callExists, isMuted) => ({
      checked: callExists ? !isMuted : false,
    })
  );

import type { CallAdapterState } from '@azure/communication-react';
import * as reselect from 'reselect';

export interface AcsMicrophoneState {
  checked: boolean;
}

export interface AcsMicrophoneHandlers {
  mute(): Promise<void>;
  unmute(): Promise<void>;
}

export interface AcsMicrophoneButtonContext extends AcsMicrophoneHandlers {
  registerStateChangeCallback(
    callback: (newState: AcsMicrophoneState) => void,
    selector: MicrophoneButtonSelector
  ): void;
  unregisterStateChangeCallback(
    callback: (newState: AcsMicrophoneState) => void,
    selector: MicrophoneButtonSelector
  ): void;
}

export declare type MicrophoneButtonSelector = (
  state: CallAdapterState
) => AcsMicrophoneState;

const getCallExists = (state: CallAdapterState): boolean => !!state.call;
const getIsMuted = (state: CallAdapterState): boolean | undefined =>
  state.call?.isMuted;

export const microphoneButtonSelector: MicrophoneButtonSelector =
  reselect.createSelector(
    [getCallExists, getIsMuted],
    (callExists, isMuted) => ({
      checked: callExists ? !!isMuted : false,
    })
  );

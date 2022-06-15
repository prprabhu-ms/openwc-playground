import type { CallAdapterState } from '@azure/communication-react';
import * as reselect from 'reselect';

// This is a partial copy of 'acs-v0/src/MicrophoneButtonContext.ts'
// This would be exported from the web-component layer to be used in the wrappers.

export interface AcsMicrophoneState {
  checked: boolean;
}

export interface AcsMicrophoneHandlers {
  mute(): Promise<void>;
  unmute(): Promise<void>;
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

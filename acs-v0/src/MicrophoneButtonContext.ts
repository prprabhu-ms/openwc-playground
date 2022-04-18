import { CallAdapterState } from '@azure/communication-react';
import * as reselect from 'reselect';
import { findAcsCallContext } from './acs-fake-call-provider.js';

export const findMicrophoneButtonContext = (
  leaf: HTMLElement
): AcsMicrophoneButtonContext => findAcsCallContext(leaf);

export interface AcsMicrophoneState {
  checked: boolean;
}

export interface AcsMicrophoneButtonContext {
  mute(): Promise<void>;
  unmute(): Promise<void>;
  registerStateChangeCallback(
    callback: (newState: AcsMicrophoneState) => void,
    selector: MicrophoneButtonSelector
  ): void;
  unregisterStateChangeCallback(
    callback: (newState: AcsMicrophoneState) => void,
    selector: MicrophoneButtonSelector
  ): void;
}

declare type MicrophoneButtonSelector = (
  state: CallAdapterState
) => AcsMicrophoneState;

const getCallExists = (state: CallAdapterState): boolean => !!state.call;
const getIsMuted = (state: CallAdapterState): boolean | undefined =>
  state.call?.isMuted;

export const microphoneButtonSelector: MicrophoneButtonSelector =
  reselect.createSelector(
    [getCallExists, getIsMuted],
    (callExists, isMuted) => ({
      checked: callExists ? !isMuted : false,
    })
  );

// immer uses the pattern of assigning to a `draft` param.
/* eslint-disable no-param-reassign */

import {
  AudioDeviceInfo,
  Call,
  VideoDeviceInfo,
} from '@azure/communication-calling';
import { CallAdapter, CallAdapterState } from '@azure/communication-react';
import { AcsCallContext } from './AcsCallProvider.js';

const INIT_STATE: CallAdapterState = {
  page: 'call',
  isLocalPreviewMicrophoneEnabled: false,
  userId: { kind: 'communicationUser', communicationUserId: 'fake_id' },
  displayName: 'fake_display_name',
  devices: {
    isSpeakerSelectionAvailable: false,
    cameras: [],
    microphones: [],
    speakers: [],
    unparentedViews: [],
  },
  isTeamsCall: false,
  latestErrors: {},
  call: {
    id: 'fake_call_id',
    callerInfo: {
      identifier: {
        kind: 'communicationUser',
        communicationUserId: 'fake_id',
      },
      displayName: 'fake_display_name',
    },
    state: 'Connected',
    direction: 'Outgoing',
    isMuted: false,
    isScreenSharingOn: false,
    localVideoStreams: [],
    remoteParticipants: {},
    remoteParticipantsEnded: {},
    transcription: {
      isTranscriptionActive: false,
    },
    recording: {
      isRecordingActive: false,
    },
    startTime: new Date(Date.now()),
    endTime: undefined,
    diagnostics: {
      network: {
        latest: {},
      },
      media: {
        latest: {},
      },
    },
  },
};

export class AcsRealCallContext implements AcsCallContext {
  private adapter?: CallAdapter;

  private pendingHandlerRegistrations: ((state: CallAdapterState) => void)[] =
    [];

  setAdapter(adapter: CallAdapter) {
    this.dispose();
    this.adapter = adapter;
    this.pendingHandlerRegistrations.forEach(handler =>
      adapter.onStateChange(handler)
    );
    this.pendingHandlerRegistrations = [];
  }

  registerStateChangeCallback<StateT>(
    callback: (newState: StateT) => void,
    selector: (state: CallAdapterState) => StateT
  ): void {
    this.onStateChange(state => {
      callback(selector(state));
    });
  }

  unregisterStateChangeCallback<StateT>(
    callback: (newState: StateT) => void,
    selector: (state: CallAdapterState) => StateT
  ): void {
    this.offStateChange(state => {
      callback(selector(state));
    });
  }

  onStateChange(handler: (state: CallAdapterState) => void): void {
    if (this.adapter) {
      this.adapter.onStateChange(handler);
    } else {
      this.pendingHandlerRegistrations.push(handler);
    }
  }

  offStateChange(handler: (state: CallAdapterState) => void): void {
    return this.adapter?.offStateChange(handler);
  }

  getState(): CallAdapterState {
    return this.adapter ? this.adapter.getState() : INIT_STATE;
  }

  on(): void {
    throw new Error('unimplemented');
  }

  off(): void {
    throw new Error('unimplemented');
  }

  dispose(): void {
    this.adapter?.dispose();
  }

  joinCall(): Call | undefined {
    throw new Error('unimplemented');
  }

  leaveCall(): Promise<void> {
    throw new Error('unimplemented');
  }

  startCamera(): Promise<void> {
    throw new Error('unimplemented');
  }

  stopCamera(): Promise<void> {
    throw new Error('unimplemented');
  }

  async mute(): Promise<void> {
    return this.adapter?.mute();
  }

  async unmute(): Promise<void> {
    return this.adapter?.unmute();
  }

  startCall(): Call | undefined {
    throw new Error('unimplemented');
  }

  startScreenShare(): Promise<void> {
    throw new Error('unimplemented');
  }

  stopScreenShare(): Promise<void> {
    throw new Error('unimplemented');
  }

  removeParticipant(): Promise<void> {
    throw new Error('unimplemented');
  }

  createStreamView(): Promise<void> {
    throw new Error('unimplemented');
  }

  disposeStreamView(): Promise<void> {
    throw new Error('unimplemented');
  }

  askDevicePermission(): Promise<void> {
    throw new Error('unimplemented');
  }

  queryCameras(): Promise<VideoDeviceInfo[]> {
    throw new Error('unimplemented');
  }

  queryMicrophones(): Promise<AudioDeviceInfo[]> {
    throw new Error('unimplemented');
  }

  querySpeakers(): Promise<AudioDeviceInfo[]> {
    throw new Error('unimplemented');
  }

  setCamera(): Promise<void> {
    throw new Error('unimplemented');
  }

  setMicrophone(): Promise<void> {
    throw new Error('unimplemented');
  }

  setSpeaker(): Promise<void> {
    throw new Error('unimplemented');
  }
}

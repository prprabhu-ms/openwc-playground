// immer uses the pattern of assigning to a `draft` param.
/* eslint-disable no-param-reassign */

import type {
  AudioDeviceInfo,
  Call,
  VideoDeviceInfo,
} from '@azure/communication-calling';
import type { CallAdapter, CallAdapterState } from '@azure/communication-react';
import produce from 'immer';

export class FakeCallAdapter implements CallAdapter {
  private state: CallAdapterState = {
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

  private handlers: ((state: CallAdapterState) => void)[] = [];

  onStateChange(handler: (state: CallAdapterState) => void): void {
    this.handlers.push(handler);
  }

  offStateChange(handler: (state: CallAdapterState) => void): void {
    const toRemove = this.handlers.findIndex(
      candidate => candidate === handler
    );
    if (toRemove === -1) {
      // eslint-disable-next-line no-console
      console.error('Found none to remove. My handler logic is broken!');
      return;
    }
    this.handlers = this.handlers.splice(toRemove, 1);
  }

  getState(): CallAdapterState {
    return this.state;
  }

  private modifyState(act: (draft: CallAdapterState) => void) {
    const newState = produce(this.state, act);
    if (this.state !== newState) {
      this.state = newState;
      this.handlers.forEach(handler => handler(this.state));
    }
  }

  on(): void {
    throw new Error('unimplemented');
  }

  off(): void {
    throw new Error('unimplemented');
  }

  dispose(): void {
    // Nothing to clean up.
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

  mute(): Promise<void> {
    this.modifyState(draft => {
      if (draft.call) {
        draft.call.isMuted = true;
      }
    });
    return Promise.resolve();
  }

  unmute(): Promise<void> {
    this.modifyState(draft => {
      if (draft.call) {
        draft.call.isMuted = false;
      }
    });
    return Promise.resolve();
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

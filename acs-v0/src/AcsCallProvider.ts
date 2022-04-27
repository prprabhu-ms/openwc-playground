import { CallAdapter, CallAdapterState } from '@azure/communication-react';

export interface AcsCallContext extends CallAdapter {
  registerStateChangeCallback<StateT>(
    callback: (newState: StateT) => void,
    selector: (state: CallAdapterState) => StateT
  ): void;

  unregisterStateChangeCallback<StateT>(
    callback: (newState: StateT) => void,
    selector: (state: CallAdapterState) => StateT
  ): void;
}

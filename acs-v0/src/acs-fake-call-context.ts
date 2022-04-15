import { CallAdapterState } from '@azure/communication-react';
import { FakeCallAdapter } from './FakeCallAdapter.js';

export class AcsFakeCallAdapter extends FakeCallAdapter {
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
}

const globalAdapter = new AcsFakeCallAdapter();

export const findAcsCallAdapter = (): AcsFakeCallAdapter => globalAdapter;

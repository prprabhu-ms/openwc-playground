import { CallAdapterState } from '@azure/communication-react';
import { customElement, FASTElement, html } from '@microsoft/fast-element';
import { FakeCallAdapter } from './FakeCallAdapter.js';

const template = html`<slot></slot>`;

@customElement({ name: 'acs-fake-call-context', template })
export class AcsMicrophoneButton extends FASTElement {
  public xkcdAdapter = new AcsFakeCallAdapter();
}

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

export const findAcsCallAdapter = (leaf: HTMLElement): AcsFakeCallAdapter => {
  let root: any = leaf;
  while (root) {
    if (root.xkcdAdapter) {
      return root.xkcdAdapter as AcsFakeCallAdapter;
    }
    root = root.parentElement;
  }
  throw new Error('Failed to file acs-fake-call-context ancestor');
};

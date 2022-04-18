import { CallAdapterState } from '@azure/communication-react';
import { customElement, FASTElement, html } from '@microsoft/fast-element';
import { FakeCallAdapter } from './FakeCallAdapter.js';

const template = html`<slot></slot>`;

@customElement({ name: 'acs-fake-call-provider', template })
export class AcsFakeCallProvider extends FASTElement {
  public xkcdAcsContext = new AcsFakeCallContext();
}

export class AcsFakeCallContext extends FakeCallAdapter {
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

export const findAcsCallContext = (leaf: HTMLElement): AcsFakeCallContext => {
  let root: any = leaf;
  while (root) {
    if (root.xkcdAcsContext) {
      return root.xkcdAcsContext as AcsFakeCallContext;
    }
    root = root.parentElement;
  }
  throw new Error('Failed to file acs-fake-call-context ancestor');
};

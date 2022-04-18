import { CallAdapterState } from '@azure/communication-react';
import { customElement, FASTElement, html } from '@microsoft/fast-element';
import { AcsCallContext, AcsCallProvider } from './AcsCallProvider.js';
import { FakeCallAdapter } from './FakeCallAdapter.js';

const template = html`<slot></slot>`;

@customElement({ name: 'acs-call-provider', template })
export class AcsFakeCallProvider
  extends FASTElement
  implements AcsCallProvider
{
  public xkcdAcsContext = new AcsFakeCallContext();
}

export class AcsFakeCallContext
  extends FakeCallAdapter
  implements AcsCallContext
{
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

import { CallAdapterState } from '@azure/communication-react';
import { customElement, html } from '@microsoft/fast-element';
import { AcsCallContext } from './AcsCallProvider.js';
import { BaseCallProvider } from './BaseCallProvider.js';
import { FakeCallAdapter } from './FakeCallAdapter.js';

const template = html`<slot></slot>`;

@customElement({ name: 'acs-fake-call-provider', template })
export class AcsFakeCallProvider extends BaseCallProvider<AcsFakeCallContext> {
  constructor() {
    super();
    this.setContext(new AcsFakeCallContext());
  }
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
    // Hydrate state for newly registered component.
    callback(selector(this.getState()));
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

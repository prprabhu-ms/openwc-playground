import { CallAdapter } from '@azure/communication-react';
import {
  customElement,
  FASTElement,
  html,
  observable,
} from '@microsoft/fast-element';
import { AcsCallProvider } from './AcsCallProvider.js';
import { AcsRealCallContext } from './AcsRealCallContext.js';

const template = html`<slot></slot>`;

@customElement({ name: 'acs-real-call-provider', template })
export class AcsRealCallProvider
  extends FASTElement
  implements AcsCallProvider
{
  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    if (this.adapter) {
      this.xkcdAcsContext.setAdapter(this.adapter);
    }
  }

  adapterChanged(_oldValue: unknown, newValue: CallAdapter | undefined): void {
    if (newValue) {
      this.xkcdAcsContext.setAdapter(newValue);
    }
  }

  @observable adapter?: CallAdapter;

  public xkcdAcsContext = new AcsRealCallContext();
}

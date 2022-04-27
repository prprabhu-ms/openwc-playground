import { CallAdapter } from '@azure/communication-react';
import { customElement, html, observable } from '@microsoft/fast-element';
import { AcsRealCallContext } from './AcsRealCallContext.js';
import { BaseCallProvider } from './BaseCallProvider.js';

const template = html`<slot></slot>`;

@customElement({ name: 'acs-real-call-provider', template })
export class AcsRealCallProvider extends BaseCallProvider<AcsRealCallContext> {
  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    if (this.adapter) {
      const context = new AcsRealCallContext();
      context.setAdapter(this.adapter);
      this.setContext(context);
    }
  }

  adapterChanged(_oldValue: unknown, newValue: CallAdapter | undefined): void {
    if (newValue) {
      const context = new AcsRealCallContext();
      context.setAdapter(newValue);
      this.setContext(context);
    }
  }

  @observable adapter?: CallAdapter;
}

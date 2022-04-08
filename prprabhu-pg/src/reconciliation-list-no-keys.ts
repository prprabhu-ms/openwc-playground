import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { PrprabhuReconciliationListBase } from './reconciliation-list-base.js';

@customElement('prprabhu-reconciliation-list-no-keys')
export class PrprabhuReconciliationListNoKeys extends PrprabhuReconciliationListBase {
  render() {
    return html`
      <div>
        <p>
          This example shows what happens to a mapped list without keys and
          controlled attributes when it is reordered.
        </p>
        ${this.labels.map(() => html`<prprabhu-counter></prprabhu-counter>`)}
        <button @click=${this._reorder}>Reorder</button>
        <button @click=${this._appendCounter}>Append Counter</button>
      </div>
    `;
  }
}

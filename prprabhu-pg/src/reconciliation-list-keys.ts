import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { repeat } from 'lit/directives/repeat.js';
import { PrprabhuReconciliationListBase } from './reconciliation-list-base.js';

@customElement('prprabhu-reconciliation-list-keys')
export class PrprabhuReconciliationListKeys extends PrprabhuReconciliationListBase {
  render() {
    return html`
      <div>
        <p>
          This example shows what happens to a mapped list without keys and
          controlled attributes when it is reordered.
        </p>
        ${repeat(
          this.labels,
          label => label,
          label => html`<prprabhu-counter label="${label}"></prprabhu-counter>`
        )}
        <button @click=${this._reorder}>Reorder</button>
      </div>
    `;
  }
}

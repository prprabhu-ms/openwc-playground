import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { PrprabhuReconciliationListBase } from './reconciliation-list-base.js';

@customElement('prprabhu-reconciliation-list-controlled-attrib')
export class PrprabhuReconciliationListControlledAttrib extends PrprabhuReconciliationListBase {
  render() {
    return html`
      <div>
        <p>
          This example shows what happens to a mapped list with controlled
          attribute when it is reordered.
        </p>
        ${this.labels.map(
          label => html`<prprabhu-counter label="${label}"></prprabhu-counter>`
        )}
        <button @click=${this._reorder}>Reorder</button>
        <button @click=${this._appendCounter}>Append Counter</button>
      </div>
    `;
  }
}

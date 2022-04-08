import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import * as styles from './styles.js';

@customElement('prprabhu-reconciliation-list-controlled-attrib')
export class PrprabhuReconciliationListControlledAttrib extends LitElement {
  @state()
  private labels = ['a', 'b'];

  static get styles() {
    return css`
      ${styles.div}
      ${styles.button}
        div {
        max-width: 30rem;
      }
    `;
  }

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
      </div>
    `;
  }

  private _reorder() {
    this.labels = [this.labels[1], this.labels[0]];
  }
}

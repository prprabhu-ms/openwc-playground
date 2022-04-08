import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import * as styles from './styles.js';

@customElement('prprabhu-reconciliation-list-no-keys')
export class PrprabhuReconciliationListNoKeys extends LitElement {
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
          This example shows what happens to a mapped list without keys and
          controlled attributes when it is reordered.
        </p>
        ${this.labels.map(() => html`<prprabhu-counter></prprabhu-counter>`)}
        <button @click=${this._reorder}>Reorder</button>
      </div>
    `;
  }

  private _reorder() {
    this.labels = [this.labels[1], this.labels[0]];
  }
}

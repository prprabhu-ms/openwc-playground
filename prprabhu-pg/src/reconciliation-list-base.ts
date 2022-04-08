import { css, LitElement } from 'lit';
import { state } from 'lit/decorators/state.js';
import * as styles from './styles.js';

export class PrprabhuReconciliationListBase extends LitElement {
  @state()
  protected labels = ['a', 'b'];

  static get styles() {
    return css`
      ${styles.div}
      ${styles.button}
        div {
        max-width: 30rem;
      }
    `;
  }

  protected _reorder() {
    const labels = this.labels.slice(1);
    labels.push(this.labels[0]);
    this.labels = labels;
  }

  protected _appendCounter() {
    const nextLabel = String.fromCharCode(
      Math.max(...this.labels.map(el => el.charCodeAt(0))) + 1
    );
    this.labels = [...this.labels, nextLabel];
  }
}

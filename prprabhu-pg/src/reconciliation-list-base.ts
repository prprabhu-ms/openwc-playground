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
    this.labels = [this.labels[1], this.labels[0]];
  }
}

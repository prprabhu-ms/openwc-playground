import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import * as styles from './styles.js';

@customElement('prprabhu-reconciliation-branching')
export class PrprabhuReconciliationBranching extends LitElement {
  @state()
  private left: boolean = true;

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
    const counter = this.left
      ? html`<prprabhu-counter label="left"></prprabhu-counter>`
      : html`<prprabhu-counter label="right"></prprabhu-counter>`;
    return html`
      <div>
        <p>
          This example shows how two distinct locations in source code (i.e. two
          distinct html template strings create DOM elements.
        </p>
        ${counter}
        <button @click=${this._toggleLabel}>Switch counter</button>
      </div>
    `;
  }

  private _toggleLabel() {
    this.left = !this.left;
  }
}

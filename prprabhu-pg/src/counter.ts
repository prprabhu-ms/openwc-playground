import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { property } from 'lit/decorators/property.js';
import * as styles from './styles.js';

@customElement('prprabhu-counter')
export class PrprabhuCounter extends LitElement {
  @property()
  label: string = '';

  @state()
  private count: number = 0;

  static get styles() {
    return css`
      ${styles.div}
      ${styles.button}
    `;
  }

  override render() {
    return html`
      <div>
        <p>Counter: ${this.label}</p>
        <button @click=${this._onClick}>add 1</button>
        <p>Current count is ${this.count}</p>
      </div>
    `;
  }

  private _onClick() {
    this.count += 1;
  }
}

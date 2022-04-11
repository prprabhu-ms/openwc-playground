import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import * as styles from './styles.js';
import { DeepLabel } from './render-flatten.js';

@customElement('prprabhu-render-container')
export class PrprabhuRenderContainer extends LitElement {
  @state()
  label: DeepLabel = { label: 'BLAH' };

  static get styles() {
    return css`
      ${styles.div}
      ${styles.button}
    `;
  }

  override render() {
    return html`
      <div>
        <prprabhu-render-flatten .label=${this.label}></prprabhu-render-flatten>
        <button @click=${this._forceRender}>Trigger Render</button>
      </div>
    `;
  }

  private _forceRender() {
    this.label = { ...this.label };
  }
}

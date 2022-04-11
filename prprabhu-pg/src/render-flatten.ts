import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import * as styles from './styles.js';

export interface DeepLabel {
  label: string;
}

@customElement('prprabhu-render-flatten')
export class PrprabhuRenderFlatten extends LitElement {
  @property({ attribute: false })
  label: DeepLabel = { label: '' };

  // Just a private field, update does not trigger rerender.
  private count: number = 0;

  static get styles() {
    return css`
      ${styles.div}
      ${styles.button}
    `;
  }

  override render() {
    // Bad practice warning: side effect while rendering.
    this.count += 1;
    return html`
      <div>
        <p>Rendered ${this.count} times.</p>
        <p>
          With changing label.
          <prprabhu-render-counter
            .label="${this.label.label}_${this.count}"
          ></prprabhu-render-counter>
        </p>
        <p>
          With fixed label.
          <prprabhu-render-counter
            .label="${this.label.label}"
          ></prprabhu-render-counter>
        </p>
        <p>
          Without label.
          <prprabhu-render-counter></prprabhu-render-counter>
        </p>
      </div>
    `;
  }
}

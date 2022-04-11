import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { property } from 'lit/decorators/property.js';
import * as styles from './styles.js';

@customElement('prprabhu-render-counter')
export class PrprabhuRenderCounter extends LitElement {
  @property()
  label: string = '';

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
        <p>Label: ${this.label}. Rendered ${this.count} times.</p>
      </div>
    `;
  }
}

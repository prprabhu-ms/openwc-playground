import {
  FASTElement,
  customElement,
  attr,
  html,
} from '@microsoft/fast-element';
import { commonStyles } from './styles.js';
import { DeepLabel } from './render-flatten.js';

const template = html<PrprabhuRenderContainer>`
  <div>
    <prprabhu-render-flatten :label=${x => x.label}></prprabhu-render-flatten>
    <button @click=${x => x.forceRender()}>Trigger Render</button>
  </div>
`;

@customElement({
  name: 'prprabhu-render-container',
  template,
  styles: commonStyles,
})
export class PrprabhuRenderContainer extends FASTElement {
  @attr label: DeepLabel = { label: 'BLAH' };

  forceRender() {
    this.label = { ...this.label };
  }
}

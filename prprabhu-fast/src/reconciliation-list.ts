import {
  FASTElement,
  customElement,
  attr,
  html,
  repeat,
} from '@microsoft/fast-element';
import { commonStyles } from './styles.js';

const template = html<PrprabhuReconciliationList>`
  <div>
    ${x => x.getTemplate()}
    <button @click=${x => x.reorder()}>Reorder</button>
    <button @click=${x => x.appendCounter()}>Append Counter</button>
  </div>
`;

const controlledTemplate = html<PrprabhuReconciliationList>`
  <p>
    This example shows what happens to a mapped list with attribute when views
    are recycled.
  </p>
  ${repeat(
    x => x.labels,
    html`<prprabhu-counter label="${x => x}"></prprabhu-counter>`
  )}
`;

const noattrTemplate = html<PrprabhuReconciliationList>`
  <p>
    This example shows what happens to a mapped list without attribute when
    views are recycled.
  </p>
  ${repeat(x => x.labels, html`<prprabhu-counter></prprabhu-counter>`)}
`;

const noattrNorecycleTemplate = html<PrprabhuReconciliationList>`
  <p>
    This example shows what happens to a mapped list without attribute when
    views are not recycled.
  </p>
  ${repeat(x => x.labels, html`<prprabhu-counter></prprabhu-counter>`, {
    recycle: false,
  })}
`;

@customElement({
  name: 'prprabhu-reconciliation-list',
  template,
  styles: commonStyles,
})
export class PrprabhuReconciliationList extends FASTElement {
  @attr name: 'controlled' | 'noattr' | 'noattr-norecycle' = 'controlled';

  @attr labels: string[] = ['a', 'b'];

  getTemplate() {
    switch (this.name) {
      case 'controlled':
        return controlledTemplate;
      case 'noattr':
        return noattrTemplate;
      case 'noattr-norecycle':
        return noattrNorecycleTemplate;
      default:
        throw new Error('unreachable');
    }
  }

  reorder() {
    const labels = this.labels.slice(1);
    labels.push(this.labels[0]);
    this.labels = labels;
  }

  appendCounter() {
    const nextLabel = String.fromCharCode(
      Math.max(...this.labels.map(el => el.charCodeAt(0))) + 1
    );
    this.labels = [...this.labels, nextLabel];
  }
}

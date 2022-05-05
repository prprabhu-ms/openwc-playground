import {
  attr,
  css,
  customElement,
  FASTElement,
  html,
  repeat,
} from '@microsoft/fast-element';
import { MESSAGES } from './data.js';

const template = html<MixedMessageThread>`<div>
  <slot name="message"></slot>
</div>`;

const styles = css`
  div {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
    background-color: azure;
  }
`;

const contentTemplate = html<MixedMessageThread>`
  <span slot="message">
    ${repeat(
      w => w.messageIds,
      html`<mixed-message messageid="${id => id}"></mixed-message>`
    )}
  </span>
`;

@customElement({ name: 'mixed-message-thread', template, styles })
export class MixedMessageThread extends FASTElement {
  @attr messageIds: string[] = Object.keys(MESSAGES);

  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    contentTemplate.render(this, this);
  }
}

import {
  attr,
  css,
  customElement,
  FASTElement,
  html,
  when,
} from '@microsoft/fast-element';
import { MESSAGES } from './data.js';

const template = html<MixedMessage>`<div><slot name="message"></slot></div>`;

const styles = css`
  div {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
    background-color: beige;
  }
`;

const contentTemplate = html<MixedMessage>`
  <span slot="message">
    ${when(w => w.messageId, html`<span>${w => MESSAGES[w.messageId]}</span>`)}
  </span>
`;

@customElement({ name: 'mixed-message', template, styles })
export class MixedMessage extends FASTElement {
  @attr messageId?: string;

  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    contentTemplate.render(this, this);
  }
}

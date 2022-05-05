import {
  attr,
  css,
  customElement,
  FASTElement,
  html,
  when,
} from '@microsoft/fast-element';
import { MESSAGES } from './data.js';

const template = html<MixedMessage>`
  ${when(w => w.messageId, html`<div>${w => MESSAGES[w.messageId]}</div>`)}
`;

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

@customElement({ name: 'mixed-message', template, styles })
class MixedMessage extends FASTElement {
  @attr messageId?: string;
}

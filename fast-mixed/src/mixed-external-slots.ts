import { css, customElement, FASTElement, html } from '@microsoft/fast-element';

const template = html<MixedExternalSlots>`
  <div>
    External slot: <slot name="external"></slot>
    <br />
    Internal slot: <slot name="internal"></slot>
    <br />
    Merged slot: <slot name="merged"></slot>
  </div>
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

const contentTemplate = html<MixedExternalSlots>`
  <span slot="internal"> This content was provided internally. </span>
  <span slot="merged"> This merged content was provided internally. </span>
`;

@customElement({ name: 'mixed-external-slots', template, styles })
export class MixedExternalSlots extends FASTElement {
  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    contentTemplate.render(this, this);
  }
}

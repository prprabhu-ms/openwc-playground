import { css, customElement, FASTElement, html } from '@microsoft/fast-element';

const template = html`
  <slot name="before"></slot>
  <div tabindex="0">You should be able to tab into this div.</div>
  <slot name="inset"></slot>
  <div tabindex="-1">You should not be able to tab into this div.</div>
  <slot name="after"></slot>
`;

const lightTemplate = html`
  <div tabindex="0" slot="after">Defined first, slotted after.</div>
  <div tabindex="0" slot="inset">Defined second, slotted inset.</div>
  <div tabindex="0" slot="before">Defined last, slotted before.</div>
`;

const styles = css`
  div,
  ::slotted(div) {
    border-width: 1px;
    border-color: orange;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
  }
  div:focus,
  ::slotted(div:focus) {
    outline: 4px dashed orange;
  }
  :host {
    border-width: 1px;
    border-color: blue;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
  }
  :host:focus {
    outline: 4px dashed blue;
  }
`;

@customElement({ name: 'x-tab-order-no-delegate', template, styles })
export class TabOrderNoDelegate extends FASTElement {
  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    lightTemplate.render(this, this);
  }
}

@customElement({
  name: 'x-tab-order-delegate',
  template,
  styles,
  shadowOptions: { delegatesFocus: true },
})
export class TabOrderDelegate extends FASTElement {
  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    lightTemplate.render(this, this);
  }
}

import { css, customElement, FASTElement, html } from '@microsoft/fast-element';

const template = html`
  <div tabindex="0">You should be able to tab into this div.</div>
  <div tabindex="-1">You should not be able to tab into this div.</div>
  <x-nested-tab-order-inner tabindex="0"></x-nested-tab-order-inner>
  <slot></slot>
`;

const lightTemplate = html`
  <x-nested-tab-order-inner tabindex="0"></x-nested-tab-order-inner>
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

@customElement({
  name: 'x-nested-tab-order',
  template,
  styles,
  shadowOptions: { delegatesFocus: true },
})
export class NestedTabOrder extends FASTElement {
  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    lightTemplate.render(this, this);
  }
}

const innerTemplate = html`
  <div tabindex="0">inner: You should be able to tab into this div.</div>
  <div tabindex="-1">inner: You should not be able to tab into this div.</div>
`;

@customElement({
  name: 'x-nested-tab-order-inner',
  template: innerTemplate,
  styles,
  shadowOptions: { delegatesFocus: true },
})
export class NestedTabOrderInner extends FASTElement {
  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    lightTemplate.render(this, this);
  }
}

import { css, customElement, FASTElement, html } from '@microsoft/fast-element';

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

const template = html<MixedHiddenSlots>`
  <slot name="impl">
    <!-- BROKEN: This will not forward the slot. -->
    <!-- Reason: This is the default content for the surrounding slot. -->
    <!-- It will be replaced by <mixed-hidden-slots-inner> when it is slotted in. -->
    <slot name="external" slot="external"></slot>
  </slot>
`;

const contentTemplate = html<MixedHiddenSlotsInner>`
  <mixed-hidden-slots-inner slot="impl">
    <!-- BROKEN: This slot will never be filled. -->
    <!-- Reason: we just added a slot in the light DOM -->
    <slot name="external" slot="external"></slot>
  </mixed-hidden-slots-inner>
`;

@customElement({ name: 'mixed-hidden-slots', template, styles })
export class MixedHiddenSlots extends FASTElement {
  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    contentTemplate.render(this, this);
  }
}

const innerTemplate = html<MixedHiddenSlotsInner>`
  <div>
    External slot: <slot name="external"></slot>
    <br />
    Hidden slot: <slot name="hidden"></slot>
  </div>
`;

const contentTemplateInner = html<MixedHiddenSlotsInner>`
  <span slot="hidden">
    This content was provided internally, and can not be provided externally. It
    is still in the light DOM.
  </span>
`;

@customElement({
  name: 'mixed-hidden-slots-inner',
  template: innerTemplate,
  styles,
})
export class MixedHiddenSlotsInner extends FASTElement {
  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    contentTemplateInner.render(this, this);
  }
}

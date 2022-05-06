import { css, customElement, FASTElement, html } from '@microsoft/fast-element';

const styles = css`
  #outerdiv {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
    background-color: beige;
  }
`;

const outerLightTemplate = html`
  <div id="outerdiv">
    <nested-light-inner>
      <slot>OUTER DEFAULT</slot>
    </nested-light-inner>
  </div>
`;

// Setting `shadowOptions` to `null` prevents creation of shadowRoot, and allows us to render directly to light DOM.
@customElement({ name: 'nested-light-outer', styles, shadowOptions: null })
export class NestedLightOuter extends FASTElement {
  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    outerLightTemplate.render(this, this);
  }
}

const innerStyles = css`
  div {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
    background-color: aqua;
  }
`;

const innerTemplate = html`<div><slot>INNER DEFAULT</slot></div>`;

@customElement({
  name: 'nested-light-inner',
  template: innerTemplate,
  styles: innerStyles,
})
export class NestedLightInner extends FASTElement {}

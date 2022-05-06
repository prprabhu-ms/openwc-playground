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

const outerTemplate = html`
  <div>
    <nested-shadow-inner>
      <slot>OUTER DEFAULT</slot>
    </nested-shadow-inner>
  </div>
`;

@customElement({ name: 'nested-shadow-outer', template: outerTemplate, styles })
export class NestedShadowOuter extends FASTElement {}

const innerTemplate = html`<div><slot>INNER DEFAULT</slot></div>`;

@customElement({ name: 'nested-shadow-inner', template: innerTemplate, styles })
export class NestedShadowInner extends FASTElement {}

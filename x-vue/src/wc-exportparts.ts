// Simplified copy of 'x-styles/src/x-exportparts.ts'

import { css, customElement, FASTElement, html } from "@microsoft/fast-element";

const styles = css`
  div {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
    background-color: white;
    color: black;
  }

  #container {
    background-color: inherit;
    color: inherit;
  }
`;


const outerTemplate = html`
<div id="container">
  The container inherits :host color. This can be styled externally.
  <div>
    This is an outer div that is not exported.
  </div>
  <div part="outer-part">
    This is the outer div that is exported
  </div>
  <x-exportparts-inner exportparts="inner-part"></x-exportparts-inner>
</div>
`

@customElement({name: 'wc-exportparts', template:outerTemplate, styles})
export class Exportparts extends FASTElement {}

const innerTemplate = html`
<div>
    <div part="inner-part">This is an inner div with part that is exported by the outer.</div>
    <div>This is an inner div that is not exported.</div>
</div>
`

@customElement({name: 'x-exportparts-inner', template: innerTemplate, styles})
class ExportpartsInner extends FASTElement {}
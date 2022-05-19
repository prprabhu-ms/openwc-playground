import { css, customElement, FASTElement, html } from "@microsoft/fast-element";

const styles = css`
  div {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
  }
`;


const outerTemplate = html`
While it is possible to choose which parts of inner to expose for each instance of inner.
It is not possible to target the same exported part of two instances differently for the external stylesheet.
<div>
  Only one of two parts of inner are exported here
    <x-exportparts-inner exportparts="please-export-me"></x-exportparts-inner>
</div>
<div>
  Both parts of inner are exported here.
  <x-exportparts-inner exportparts="please-export-me, and-me"></x-exportparts-inner>
</div>`

@customElement({name: 'x-exportparts-outer', template:outerTemplate, styles})
export class ExportpartsOuter extends FASTElement {}

const innerTemplate = html`
<div>
    <div part="please-export-me">This is an inner div with part that is exported by the outer.</div>
    <div part="and-me">This is another inner div with part that is exported by the outer.</div>
</div>
`

@customElement({name: 'x-exportparts-inner', template: innerTemplate, styles})
export class ExportpartsInner extends FASTElement {}
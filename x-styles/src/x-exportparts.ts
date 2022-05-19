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
<ul></ul>
  <li>It is always possible to choose which parts of inner to expose for each instance of inner.</li>
  <li>Targeting the same part of two different instances is not possible because of name conflict.</li>
</ul>
<div>
  Only one of two parts of inner are exported here
    <x-exportparts-inner exportparts="please-export-me"></x-exportparts-inner>
</div>
<div>
  Both parts of inner are exported here.
  <x-exportparts-inner exportparts="please-export-me, and-me"></x-exportparts-inner>
</div>
`

@customElement({name: 'x-exportparts', template:outerTemplate, styles})
export class Exportparts extends FASTElement {}

const innerTemplate = html`
<div>
    <div part="please-export-me">This is an inner div with part that is exported by the outer.</div>
    <div part="and-me">This is another inner div with part that is exported by the outer.</div>
</div>
`

@customElement({name: 'x-exportparts-inner', template: innerTemplate, styles})
class ExportpartsInner extends FASTElement {}
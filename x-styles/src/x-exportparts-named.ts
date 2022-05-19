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
<ul>
  <li>Named exportparts can be used to target the same part of two different instances of inner.</li>
  <li>Need to check OS/Browswer support.</li>
</ul>
<div>
  There are two inner elements here, both export one part, but renamed.
  <x-exportparts-inner-named exportparts="please-export-me: please-export-me-1"></x-exportparts-inner-named>
  <x-exportparts-inner-named exportparts="please-export-me: please-export-me-2"></x-exportparts-inner-named>
</div>

`

@customElement({name: 'x-exportparts-named', template:outerTemplate, styles})
export class ExportpartsNamed extends FASTElement {}

const innerTemplate = html`
<div>
    <div part="please-export-me">This is an inner div with part that is exported by the outer.</div>
</div>
`

@customElement({name: 'x-exportparts-inner-named', template: innerTemplate, styles})
class ExportpartsInner extends FASTElement {}
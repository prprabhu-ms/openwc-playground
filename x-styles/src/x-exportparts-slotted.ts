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
  <li>An element can exportpart a part that it then slots into another component internally</li>
</ul>
<div>
  This is the outer element. It exportparts inner's part.
  <x-exportparts-slotted-hasslot>
    <x-exportparts-slotted-inner exportparts="please-export-me"></x-exportparts-slotted-inner>
  </x-exportparts-slotted-hasslot>
</div>

`

@customElement({name: 'x-exportparts-slotted', template:outerTemplate, styles})
export class ExportpartsSlotted extends FASTElement {}

const innerTemplate = html`
<div>
    <div part="please-export-me">This is an inner div that was slotted into another custom element.</div>
</div>
`

@customElement({name: 'x-exportparts-slotted-inner', template: innerTemplate, styles})
class ExportpartsInner extends FASTElement {}

const slotTemplate = html`<div>
  This is the middle element. It has a slot that will be filled by inner.
  <slot></slot>
</div>`;

@customElement({name: 'x-exportparts-slotted-hasslot', template: slotTemplate, styles})
class ExportpartsSlots extends FASTElement {}
import {
  FASTElement,
  css,
  customElement,
  html,
  when,
  attr,
} from '@microsoft/fast-element';

export interface NestedState {
  world: string;
}

const commonStyles = css`
  div {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
  }
`;

const template = html<PrprabhuPropsHello>`
  <div>
    ${when(w => !w.nested?.world, html`NO CONTEXT`)}
    ${when(w => !!w.nested?.world, html`${w => w.nested.world}`)}
  </div>
`;

@customElement({
  name: 'prprabhu-props-hello',
  template,
  styles: commonStyles,
})
export class PrprabhuPropsHello extends FASTElement {
  @attr nested?: NestedState;
}

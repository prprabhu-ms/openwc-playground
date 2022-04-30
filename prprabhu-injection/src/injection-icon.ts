/* eslint-disable max-classes-per-file */
import {
  customElement,
  FASTElement,
  html,
  observable,
  when,
} from '@microsoft/fast-element';

const uncheckedSlot = html<InjectionIcon>`
  mute
  <slot name="icon-unchecked" slot="end"></slot>
`;

const checkedSlot = html<InjectionIcon>`
  unmute
  <slot name="icon-checked" slot="end"></slot>
`;

const template = html<InjectionIcon>`
  <fast-button primary @click=${x => x.onClick()}>
    ${when(x => !x.checked, uncheckedSlot)} ${when(x => x.checked, checkedSlot)}
  </fast-button>
`;

@customElement({ name: 'injection-icon', template })
export class InjectionIcon extends FASTElement {
  @observable checked: boolean = false;

  onClick() {
    this.checked = !this.checked;
  }
}

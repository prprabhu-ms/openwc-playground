import {
  FASTElement,
  customElement,
  attr,
  html,
} from '@microsoft/fast-element';

const template = html<AcsMuteButton>`
  <fast-button>${x => x.label}</fast-button>
`;

@customElement({ name: 'acs-mute-button', template })
export class AcsMuteButton extends FASTElement {
  @attr label: string = 'HelloWorld';
}

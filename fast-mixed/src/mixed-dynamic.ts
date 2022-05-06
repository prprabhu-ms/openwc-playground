import {
  css,
  customElement,
  FASTElement,
  html,
  observable,
} from '@microsoft/fast-element';

const template = html<MixedDynamic>` <div>
  <slot name="time"></slot>
</div>`;

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

const contentTemplate = html<MixedDynamic>`
  <span slot="time"> The time now is ${w => w.now}. </span>
`;

@customElement({ name: 'mixed-dynamic', template, styles })
export class MixedDynamic extends FASTElement {
  @observable now = getNow();

  // Browser and NodeJS have incompatible return types for `setInterval()`.
  timerHandle?: any;

  override connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.timerHandle = setInterval(() => {
      this.now = getNow();
    }, 1000);
    contentTemplate.render(this, this);
  }

  override disconnectedCallback() {
    this.timerHandle && clearInterval(this.timerHandle);
    super.disconnectedCallback && super.disconnectedCallback();
  }
}

const getNow = () => new Date().toString();

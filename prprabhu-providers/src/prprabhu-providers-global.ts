import {
  FASTElement,
  css,
  customElement,
  html,
  when,
  observable,
} from '@microsoft/fast-element';
import { Context } from './types.js';

export class Provider {
  private static globalInstance: Context | undefined = undefined;

  private static notificationFns: ((c: Context) => void)[] = [];

  public static setGlobalInstance(value: Context) {
    console.log('Global instance set', value);
    Provider.globalInstance = value;
    Provider.notifyAll();
  }

  public static getGlobalInstance(): Context | undefined {
    return Provider.globalInstance;
  }

  public static registerNotificationFn(f: (c: Context) => void) {
    Provider.notificationFns.push(f);
  }

  public static unregisterNotificationFn(f: (c: Context) => void) {
    const i = Provider.notificationFns.findIndex(v => v === f);
    Provider.notificationFns.splice(i, 1);
  }

  private static notifyAll() {
    const gi = Provider.globalInstance;
    if (gi) {
      Provider.notificationFns.forEach(f => f(gi));
    }
  }
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

const template = html<PrprabhuProvidersGlobalHello>`
  <div>
    ${when(w => !w.context, html`NO CONTEXT`)}
    ${when(w => !!w.context, html`${w => w.context.world}`)}
  </div>
`;

@customElement({
  name: 'prprabhu-providers-global-hello',
  template,
  styles: commonStyles,
})
export class PrprabhuProvidersGlobalHello extends FASTElement {
  @observable context?: Context;

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    this.context = Provider.getGlobalInstance();
    Provider.registerNotificationFn(c => {
      this.context = c;
    });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback && super.disconnectedCallback();
    Provider.unregisterNotificationFn(c => {
      this.context = c;
    });
  }
}

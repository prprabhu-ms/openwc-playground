import {
  FASTElement,
  css,
  customElement,
  html,
  when,
  observable,
  attr,
} from '@microsoft/fast-element';
import {
  ProviderRegisterEventDetail,
  ProviderUnregisterEventDetail,
} from './events.js';
import { Context } from './types.js';

@customElement({
  name: 'prprabhu-providers-event',
  template: html`<slot></slot>`,
})
export class PrprabhuProvidersEvent extends FASTElement {
  @attr world?: string;

  public context?: Context;

  private notificationFns: ((c: Context) => void)[] = [];

  constructor() {
    super();
    this.addEventListener(
      'provider-register',
      (e: CustomEvent<ProviderRegisterEventDetail>) => {
        // First ancestor provider wins!
        e.stopPropagation();
        this.registerNotificationFn(e.detail.f);
        this.context && e.detail.f(this.context);
      }
    );
    this.addEventListener(
      'provider-unregister',
      (e: CustomEvent<ProviderUnregisterEventDetail>) =>
        this.unregisterNotificationFn(e.detail.f)
    );
  }

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    if (this.world) {
      this.context = { world: this.world };
      this.notifyAll(this.context);
    }
  }

  override attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === 'world') {
      this.context = { world: newValue };
      this.notifyAll(this.context);
    }
  }

  public registerNotificationFn(f: (c: Context) => void) {
    this.notificationFns.push(f);
  }

  public unregisterNotificationFn(f: (c: Context) => void) {
    const i = this.notificationFns.findIndex(v => v === f);
    this.notificationFns.splice(i, 1);
  }

  private notifyAll(context: Context) {
    this.notificationFns.forEach(f => f(context));
  }
}

@customElement({
  name: 'prprabhu-providers-event-questionable',
  template: html`<slot></slot>`,
})
export class PrprabhuProvidersEventQuestionable extends FASTElement {
  @attr world?: string;

  public context?: Context;

  private notificationFns: ((c: Context) => void)[] = [];

  constructor() {
    super();
    this.addEventListener(
      'provider-register',
      (e: CustomEvent<ProviderRegisterEventDetail>) => {
        // First ancestor provider wins!
        e.stopPropagation();
        this.registerNotificationFn(e.detail.f);
        this.context && e.detail.f(this.context);
      }
    );
    this.addEventListener(
      'provider-unregister',
      (e: CustomEvent<ProviderUnregisterEventDetail>) =>
        this.unregisterNotificationFn(e.detail.f)
    );
  }

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    if (this.world) {
      this.context = { world: `${this.world} ?` };
      this.notifyAll(this.context);
    }
  }

  override attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === 'world') {
      this.context = { world: `${newValue} ?` };
      this.notifyAll(this.context);
    }
  }

  public registerNotificationFn(f: (c: Context) => void) {
    this.notificationFns.push(f);
  }

  public unregisterNotificationFn(f: (c: Context) => void) {
    const i = this.notificationFns.findIndex(v => v === f);
    this.notificationFns.splice(i, 1);
  }

  private notifyAll(context: Context) {
    this.notificationFns.forEach(f => f(context));
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

const template = html<PrprabhuProvidersEventHello>`
  <div>
    ${when(w => !w.context, html`NO CONTEXT`)}
    ${when(w => !!w.context, html`${w => w.context.world}`)}
    <slot></slot>
  </div>
`;

@customElement({
  name: 'prprabhu-providers-event-hello',
  template,
  styles: commonStyles,
})
export class PrprabhuProvidersEventHello extends FASTElement {
  @observable context?: Context;

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    this.$emit('provider-register', {
      f: (c: Context) => {
        this.context = c;
      },
    });
  }

  override disconnectedCallback(): void {
    this.$emit('provider-unregister', {
      f: (c: Context) => {
        this.context = c;
      },
    });
    super.disconnectedCallback && super.disconnectedCallback();
  }
}

@customElement({
  name: 'prprabhu-providers-event-hello-delay-event',
  template,
  styles: commonStyles,
})
export class PrprabhuProvidersEventHelloDelayEvent extends FASTElement {
  @observable context?: Context;

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    // Delay event to allow browser to construct the provider first.
    setTimeout(
      () =>
        this.$emit('provider-register', {
          f: (c: Context) => {
            this.context = c;
          },
        }),
      0
    );
  }

  override disconnectedCallback(): void {
    this.$emit('provider-unregister', {
      f: (c: Context) => {
        this.context = c;
      },
    });
    super.disconnectedCallback && super.disconnectedCallback();
  }
}

@customElement({
  name: 'prprabhu-providers-event-hello-nested',
  template: html`<prprabhu-providers-event-hello id="h.nested">
    <slot></slot>
  </prprabhu-providers-event-hello>`,
  styles: commonStyles,
})
export class PrprabhuProvidersEventHelloNested extends FASTElement {}

@customElement({
  name: 'prprabhu-providers-event-out-of-order',
  template: html`<slot></slot>`,
})
export class PrprabhuProvidersEventOutOfOrder extends FASTElement {
  @attr world?: string;

  public context?: Context;

  private notificationFns: ((c: Context) => void)[] = [];

  constructor() {
    super();
    this.addEventListener(
      'provider-register',
      (e: CustomEvent<ProviderRegisterEventDetail>) => {
        // First ancestor provider wins!
        e.stopPropagation();
        this.registerNotificationFn(e.detail.f);
        this.context && e.detail.f(this.context);
      }
    );
    this.addEventListener(
      'provider-unregister',
      (e: CustomEvent<ProviderUnregisterEventDetail>) =>
        this.unregisterNotificationFn(e.detail.f)
    );
  }

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    if (this.world) {
      this.context = { world: `${this.world}, but too late` };
      this.notifyAll(this.context);
    }
  }

  override attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === 'world') {
      this.context = { world: `${newValue}, but too late` };
      this.notifyAll(this.context);
    }
  }

  public registerNotificationFn(f: (c: Context) => void) {
    this.notificationFns.push(f);
  }

  public unregisterNotificationFn(f: (c: Context) => void) {
    const i = this.notificationFns.findIndex(v => v === f);
    this.notificationFns.splice(i, 1);
  }

  private notifyAll(context: Context) {
    this.notificationFns.forEach(f => f(context));
  }
}

@customElement({
  name: 'prprabhu-providers-event-late-but-connected',
  template: html`<slot></slot>`,
})
export class PrprabhuProvidersEventLateButConnected extends FASTElement {
  @attr world?: string;

  public context?: Context;

  private notificationFns: ((c: Context) => void)[] = [];

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    this.addEventListener(
      'provider-register',
      (e: CustomEvent<ProviderRegisterEventDetail>) => {
        // First ancestor provider wins!
        e.stopPropagation();
        this.registerNotificationFn(e.detail.f);
        this.context && e.detail.f(this.context);
      }
    );
    this.addEventListener(
      'provider-unregister',
      (e: CustomEvent<ProviderUnregisterEventDetail>) =>
        this.unregisterNotificationFn(e.detail.f)
    );

    if (this.world) {
      this.context = { world: `${this.world}, but too late` };
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback && super.disconnectedCallback();
    this.removeEventListener(
      'provider-register',
      (e: CustomEvent<ProviderRegisterEventDetail>) => {
        // First ancestor provider wins!
        e.stopPropagation();
        this.registerNotificationFn(e.detail.f);
        this.context && e.detail.f(this.context);
      }
    );
    this.removeEventListener(
      'provider-unregister',
      (e: CustomEvent<ProviderUnregisterEventDetail>) =>
        this.unregisterNotificationFn(e.detail.f)
    );
  }

  override attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === 'world') {
      this.context = { world: `${newValue}, but too late` };
      this.notifyAll(this.context);
    }
  }

  public registerNotificationFn(f: (c: Context) => void) {
    this.notificationFns.push(f);
  }

  public unregisterNotificationFn(f: (c: Context) => void) {
    const i = this.notificationFns.findIndex(v => v === f);
    this.notificationFns.splice(i, 1);
  }

  private notifyAll(context: Context) {
    this.notificationFns.forEach(f => f(context));
  }
}

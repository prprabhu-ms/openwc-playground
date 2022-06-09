import { FASTElement } from '@microsoft/fast-element';
import type { AcsCallContext } from './AcsCallProvider.js';
import type {
  ProviderRegisterEventDetail,
  ProviderUnregisterEventDetail,
} from './events.js';

/**
 * Base class for all providers.
 *
 * Usage:
 * - Pick concrete type `Context` for {@link AcsCallContext}.
 * - Write a concrete provider that extends `BaseProvider<Context>`
 * - Call {@link BaseProvider.setContext} to set the context in whatever way makes sense for your provider.
 */
export class BaseCallProvider<
  Context extends AcsCallContext
> extends FASTElement {
  private context?: Context;

  private notificationFns: ((c?: Context) => void)[] = [];

  protected setContext(context?: Context) {
    this.context = context;
    this.notifyAll(context);
  }

  constructor() {
    super();
    this.addEventListener(
      'provider-register',
      (e: CustomEvent<ProviderRegisterEventDetail>) => {
        // First ancestor provider wins!
        e.stopPropagation();
        this.registerNotificationFn(e.detail.contextChanged);
        this.context && e.detail.contextChanged(this.context);
      }
    );
    this.addEventListener(
      'provider-unregister',
      (e: CustomEvent<ProviderUnregisterEventDetail>) =>
        this.unregisterNotificationFn(e.detail.contextChanged)
    );
  }

  private registerNotificationFn(contextChanged: (c?: Context) => void) {
    this.notificationFns.push(contextChanged);
  }

  private unregisterNotificationFn(f: (c: Context) => void) {
    const i = this.notificationFns.findIndex(v => v === f);
    this.notificationFns.splice(i, 1);
  }

  private notifyAll(context?: Context) {
    this.notificationFns.forEach(contextChanged => contextChanged(context));
  }
}

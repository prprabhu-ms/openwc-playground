import { CallAdapterState } from '@azure/communication-react';
import { FASTElement, observable } from '@microsoft/fast-element';
import { AcsCallContext } from './AcsCallProvider.js';
import { CustomEventMap } from './events.js';

export declare type Selector<State> = (state: CallAdapterState) => State;

export interface BaseComponentContext<State> {
  registerStateChangeCallback(
    callback: (newState: State) => void,
    selector: (state: CallAdapterState) => State
  ): void;

  unregisterStateChangeCallback(
    callback: (newState: State) => void,
    selector: (state: CallAdapterState) => State
  ): void;
}

export class BaseComponent<
  Context extends BaseComponentContext<State>,
  State
> extends FASTElement {
  private context?: Context;

  @observable state?: State;

  protected getContext(): Context | undefined {
    return this.context;
  }

  // Must be overridden by concrete extensions of this class.
  //
  // Provides type safety for the selector.
  protected getSelector(): Selector<State> {
    throw new Error('Unimplemented');
  }

  // Must be overridden by concrete extensions of this class.
  //
  // Provides type safety for the context.
  //
  // Ensures that `Context` only contains handlers that are actually implemented by `AcsCallContext`.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected safeContextCast(context: AcsCallContext): Context {
    throw new Error('Unimplemented');
  }

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    this.typedEmit('provider-register', {
      contextChanged: this.contextChanged.bind(this),
    });
  }

  override disconnectedCallback(): void {
    // Order of operations matters.
    // - First unregister from further context updates.
    // - Then unregister from curent context.
    // - Finally invoke super.disconnectedCallback() to continue to unmount.
    this.typedEmit('provider-unregister', {
      contextChanged: this.contextChanged.bind(this),
    });
    this.context?.unregisterStateChangeCallback(
      this.onStateChange.bind(this),
      this.getSelector()
    );
    this.context = undefined;
    super.disconnectedCallback && super.disconnectedCallback();
  }

  private contextChanged(context?: AcsCallContext) {
    this.context = context && this.safeContextCast(context);
    if (this.context) {
      this.context.registerStateChangeCallback(
        this.onStateChange.bind(this),
        this.getSelector()
      );
    }
  }

  private onStateChange(newState: State) {
    this.state = newState;
  }

  private typedEmit<K extends keyof CustomEventMap>(
    type: K,
    detail: CustomEventMap[K]
  ): void {
    this.$emit(type, detail);
  }
}

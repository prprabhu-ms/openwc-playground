import { CallAdapterState } from '@azure/communication-react';
import { FASTElement, observable } from '@microsoft/fast-element';

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

  protected getSelector(): Selector<State> {
    throw new Error('Unimplemented');
  }

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    this.$emit('provider-register', {
      contextChanged: this.contextChanged.bind(this),
    });
  }

  override disconnectedCallback(): void {
    // Order of operations matters.
    // - First unregister from further context updates.
    // - Then unregister from curent context.
    // - Finally invoke super.disconnectedCallback() to continue to unmount.
    this.$emit('provider-unregister', {
      contextChanged: this.contextChanged.bind(this),
    });
    this.context?.unregisterStateChangeCallback(
      this.onStateChange.bind(this),
      this.getSelector()
    );
    this.context = undefined;
    super.disconnectedCallback && super.disconnectedCallback();
  }

  private contextChanged(context?: Context) {
    this.context = context;
    if (context) {
      context.registerStateChangeCallback(
        this.onStateChange.bind(this),
        this.getSelector()
      );
    }
  }

  private onStateChange(newState: State) {
    this.state = newState;
  }
}

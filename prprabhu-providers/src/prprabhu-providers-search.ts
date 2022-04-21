import {
  FASTElement,
  css,
  customElement,
  html,
  when,
  observable,
  attr,
} from '@microsoft/fast-element';
import { Context } from './types.js';

@customElement({
  name: 'prprabhu-providers-search',
  template: html`<slot></slot>`,
})
export class PrprabhuProvidersSearch extends FASTElement {
  @attr world?: string;

  public context?: Context;

  private notificationFns: ((c: Context) => void)[] = [];

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

const questionableTemplate = html`
  <prprabhu-providers-search world="${w => `${w.world} ?`}">
    <slot></slot>
  </prprabhu-providers-search>
`;

@customElement({
  name: 'prprabhu-providers-search-questionable',
  template: questionableTemplate,
})
export class PrprabhuProvidersSearchAlt extends FASTElement {
  @attr world?: string;
}

export const findProvider = (leaf: HTMLElement): PrprabhuProvidersSearch => {
  let root = leaf.parentNode;
  const ancestors = [root];
  while (root) {
    if (root.nodeName.toLowerCase() === 'prprabhu-providers-search') {
      console.log('Ancestor chain:', leaf, ancestors);
      return root as PrprabhuProvidersSearch;
    }
    root = root.parentElement;
    ancestors.push(root);
  }
  console.log('Ancestor chain:', leaf, ancestors);
  throw new Error('failed to find a provider');
};

const commonStyles = css`
  div {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
  }
`;

const template = html<PrprabhuProvidersSearchHello>`
  <div>
    ${when(w => !w.context, html`NO CONTEXT`)}
    ${when(w => !!w.context, html`${w => w.context.world}`)}
    <slot></slot>
  </div>
`;

@customElement({
  name: 'prprabhu-providers-search-hello',
  template,
  styles: commonStyles,
})
export class PrprabhuProvidersSearchHello extends FASTElement {
  @observable context?: Context;

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    const provider = findProvider(this);
    this.context = provider.context;
    provider.registerNotificationFn(c => {
      this.context = c;
    });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback && super.disconnectedCallback();
    const provider = findProvider(this);
    provider.unregisterNotificationFn(c => {
      this.context = c;
    });
  }
}

@customElement({
  name: 'prprabhu-providers-search-hello-nested',
  template: html`<prprabhu-providers-search-hello id="h.nested">
    <slot></slot>
  </prprabhu-providers-search-hello>`,
  styles: commonStyles,
})
export class PrprabhuProvidersSearchHelloNested extends FASTElement {}

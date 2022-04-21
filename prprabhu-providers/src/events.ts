import { Context } from './types.js';

export interface ProviderRegisterEventDetail {
  f: (c: Context) => void;
}

export type ProviderUnregisterEventDetail = ProviderRegisterEventDetail;

interface CustomEventMap {
  'provider-register': CustomEvent<ProviderRegisterEventDetail>;
  'provider-unregister': CustomEvent<ProviderUnregisterEventDetail>;
}
declare global {
  interface HTMLElement {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void
    ): void;
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void
    ): void;
  }
}

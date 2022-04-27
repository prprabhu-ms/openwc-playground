import { AcsCallContext } from './AcsCallProvider.js';

export interface ProviderRegisterEventDetail {
  contextChanged: (c?: AcsCallContext) => void;
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

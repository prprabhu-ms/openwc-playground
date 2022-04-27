import { AcsCallContext } from './AcsCallProvider.js';

export interface ProviderRegisterEventDetail {
  contextChanged: (c?: AcsCallContext) => void;
}

export type ProviderUnregisterEventDetail = ProviderRegisterEventDetail;

export interface CustomEventMap {
  'provider-register': ProviderRegisterEventDetail;
  'provider-unregister': ProviderUnregisterEventDetail;
}

declare global {
  interface HTMLElement {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEvent<CustomEventMap[K]>) => void
    ): void;
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEvent<CustomEventMap[K]>) => void
    ): void;
  }
}

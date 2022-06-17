export interface UserJoinedEventDetail {
    // Name of the dynamic slot that will be added for this user.
    targetSlot: string;
    // All data availble for this user.
    data: {
      userId: string;
    };
  }

  export interface UserLeftEventDetail {
    targetSlot: string;
  }

  export interface CustomEventMap {
    userjoined: UserJoinedEventDetail;
    userleft: UserLeftEventDetail;
}

declare global {
    interface HTMLElement {
      addEventListener<K extends keyof CustomEventMap>(
        type: K,
        listener: (this: HTMLElement, ev: CustomEvent<CustomEventMap[K]>) => void
      ): void;
      removeEventListener<K extends keyof CustomEventMap>(
        type: K,
        listener: (this: HTMLElement, ev: CustomEvent<CustomEventMap[K]>) => void
      ): void;
    }

    interface Element {
      addEventListener<K extends keyof CustomEventMap>(
        type: K,
        listener: (this: Element, ev: CustomEvent<CustomEventMap[K]>) => void
      ): void;
      removeEventListener<K extends keyof CustomEventMap>(
        type: K,
        listener: (this: Element, ev: CustomEvent<CustomEventMap[K]>) => void
      ): void;
    }
  }
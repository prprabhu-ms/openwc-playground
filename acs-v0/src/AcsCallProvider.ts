import { CallAdapter, CallAdapterState } from '@azure/communication-react';

export interface AcsCallProvider {
  // TODO: `findAcsCallContext` looks for this public property in all ancestor HTMLElement nodes of
  // a component. This is clearly a bad idea. Find a better idea.
  xkcdAcsContext?: AcsCallContext;
}

export interface AcsCallContext extends CallAdapter {
  registerStateChangeCallback<StateT>(
    callback: (newState: StateT) => void,
    selector: (state: CallAdapterState) => StateT
  ): void;

  unregisterStateChangeCallback<StateT>(
    callback: (newState: StateT) => void,
    selector: (state: CallAdapterState) => StateT
  ): void;
}

export const findAcsCallContext = (leaf: HTMLElement): AcsCallContext => {
  let root: any = leaf;
  while (root) {
    if (root.xkcdAcsContext) {
      return root.xkcdAcsContext as AcsCallContext;
    }
    root = root.parentElement;
  }
  throw new Error('Failed to find an `AcsCallProvider` ancestor');
};

// A simplified copy of 'prprabhu-injection/src/custom-avatar-event-and-slot.ts'

/* eslint-disable max-classes-per-file */
import {
  attr,
  css,
  customElement,
  FASTElement,
  html,
  observable,
  repeat,
} from '@microsoft/fast-element';
import {provideFASTDesignSystem, fastButton} from '@microsoft/fast-components';

provideFASTDesignSystem().register(fastButton());

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

const userIds = ['apple', 'banana', 'jackfruit', 'mango'];

const template = html<CustomAvatarEventAndSlot>`
  <fast-button primary @click=${x => x.addUser()}> Add User </fast-button>
  <fast-button primary @click=${x => x.removeUser()}> Remove User </fast-button>
  <hr />
  ${repeat(
    w => w.users,
    html`
      <div id="user">
        <div id="username">${u => u}</div>
        <div id="usericon">
          <slot name="${u => `usericon-${u}`}">
            <span>${(u, c) => c.parent.iconDefaultText}</span>
          </slot>
        </div>
      </div>
    `
  )}
`;

const styles = css`
  #user {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
  }
  #username,
  #usericon {
    display: inline-block;
    padding: 1px;
  }
`;

@customElement({ name: 'wc-custom-avatar-event-and-slot', template, styles })
export class CustomAvatarEventAndSlot extends FASTElement {
  @observable users: string[] = [];

  // Used in a placeholder when a dynamic icon for a slot is not set.
  // I tried and failed to use a "default slot" for this because we don't know how many
  // default slots we need to fill, and there is no way to slot a single child in a multiple
  // slots.
  // This means that the default behavior API is limited -- Client can't really style it
  // arbitrarily. It is a data-injection API only, not a render injection API.
  @attr iconDefaultText = 'INTERNAL DEFAULT';

  addUser() {
    if (this.users.length === userIds.length) {
      return;
    }
    const userId = userIds[this.users.length];
    this.users = [...this.users, userId];
    this.typedEmit('userjoined', {
      targetSlot: `usericon-${userId}`,
      data: { userId },
    });
  }

  removeUser() {
    if (this.users.length === 0) {
      return;
    }
    const users = [...this.users];
    const [userId] = users.splice(users.length - 1);
    this.users = users;
    this.typedEmit('userleft', { targetSlot: `usericon-${userId}` });
  }

  private typedEmit<K extends keyof CustomEventMap>(
    type: K,
    detail: CustomEventMap[K]
  ): void {
    this.$emit(type, detail);
  }
}

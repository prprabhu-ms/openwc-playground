/* eslint-disable max-classes-per-file */
import {
  css,
  customElement,
  FASTElement,
  html,
  observable,
  repeat,
} from '@microsoft/fast-element';

export interface UserJoinedEventDetail {
  userId: string;
}

export type UserLeftEventDetail = UserJoinedEventDetail;

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
        <div id="usericon"><slot name="${u => u}"></slot></div>
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

@customElement({ name: 'custom-avatar-event-and-slot', template, styles })
export class CustomAvatarEventAndSlot extends FASTElement {
  @observable users: string[] = [];

  addUser() {
    if (this.users.length === userIds.length) {
      return;
    }
    const userId = userIds[this.users.length];
    this.users = [...this.users, userId];
    this.typedEmit('userjoined', { userId });
  }

  removeUser() {
    if (this.users.length === 0) {
      return;
    }
    const users = [...this.users];
    const [userId] = users.splice(users.length - 1);
    this.users = users;
    this.typedEmit('userleft', { userId });
  }

  private typedEmit<K extends keyof CustomEventMap>(
    type: K,
    detail: CustomEventMap[K]
  ): void {
    this.$emit(type, detail);
  }
}

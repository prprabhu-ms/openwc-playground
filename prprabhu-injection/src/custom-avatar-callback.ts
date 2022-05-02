/* eslint-disable max-classes-per-file */
import {
  attr,
  css,
  customElement,
  FASTElement,
  html,
  observable,
  repeat,
  ViewTemplate,
} from '@microsoft/fast-element';

const userIds = ['apple', 'banana', 'jackfruit', 'mango'];

const template = html<CustomAvatarCallback>`
  <fast-button primary @click=${x => x.addUser()}> Add User </fast-button>
  <fast-button primary @click=${x => x.removeUser()}> Remove User </fast-button>
  <hr />
  ${repeat(
    w => w.users,
    html`
      <div id="user">
        <div id="username">${u => u.userId}</div>
        <div id="usericon">
          ${(u, c) =>
            (c.parent as CustomAvatarCallback).onRenderAvatar ??
            'INTERNAL DEFAULT'}
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

export interface OnRenderAvatarArgs {
  userId: string;
}

@customElement({ name: 'custom-avatar-callback', template, styles })
export class CustomAvatarCallback extends FASTElement {
  @observable users: OnRenderAvatarArgs[] = [];

  @attr onRenderAvatar?: ViewTemplate<OnRenderAvatarArgs>;

  addUser() {
    if (this.users.length === userIds.length) {
      return;
    }
    const userId = userIds[this.users.length];
    this.users = [...this.users, { userId }];
  }

  removeUser() {
    if (this.users.length === 0) {
      return;
    }
    const users = [...this.users];
    users.splice(users.length - 1);
    this.users = users;
  }
}

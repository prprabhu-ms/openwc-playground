import {
  customElement,
  FASTElement,
  html,
  observable,
  repeat,
} from '@microsoft/fast-element';
import { html as litHTML } from 'lit';
import '../src/custom-avatar-event-and-slot.js';
import '../src/index.js';

export default {
  title: 'CustomAvatar',
  component: 'injection-template',
};

// icons from https://remixicon.com/

export const EventAndSlotWrapped = () => litHTML`
  <event-and-slot-untyped-wrapper>
  </event-and-slot-untyped-wrapper>
`;

const getAvatar = (userId: string) => {
  switch (userId) {
    case 'apple':
      return 'ri-code-box-fill';
    case 'banana':
      return 'ri-ancient-gate-fill';
    case 'jackfruit':
      return 'ri-indent-decrease';
    case 'mango':
      return 'ri-paragraph';
    default:
      return 'ri-error-warning-fill';
  }
};

const template = html<EventAndSlotWrapper>`
  <!-- Need to include stylesheet here so that I can use the icons. -->
  <!-- Notice how slotted elements continue to get the styles in side <custom-avatar-event-and-slot> -->
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <custom-avatar-event-and-slot
    @userjoined=${(w, c) => w.addUser((c.event as any).detail.userId)}
    @userleft=${(w, c) => w.removeUser((c.event as any).detail.userId)}
  >
    ${repeat(
      w => w.userIds,
      html`<i slot="${u => u}" class="${u => getAvatar(u)}"></i>`
    )}
  </custom-avatar-event-and-slot>
`;

@customElement({ name: 'event-and-slot-untyped-wrapper', template })
class EventAndSlotWrapper extends FASTElement {
  @observable userIds: string[] = [];

  addUser(userId: string) {
    this.userIds = [...this.userIds, userId];
  }

  removeUser(userId: string) {
    this.userIds = this.userIds.filter(u => u !== userId);
  }
}

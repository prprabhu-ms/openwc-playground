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

export const EventAndSlotWrappedUntyped = () => litHTML`
  <event-and-slot-untyped-wrapper>
  </event-and-slot-untyped-wrapper>
`;

export const EventAndSlotWrappedTyped = () => litHTML`
  <event-and-slot-typed-wrapper>
  </event-and-slot-typed-wrapper>
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

const untypedTemplate = html<EventAndSlotUntypedWrapper>`
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

@customElement({
  name: 'event-and-slot-untyped-wrapper',
  template: untypedTemplate,
})
class EventAndSlotUntypedWrapper extends FASTElement {
  @observable userIds: string[] = [];

  addUser(userId: string) {
    this.userIds = [...this.userIds, userId];
  }

  removeUser(userId: string) {
    this.userIds = this.userIds.filter(u => u !== userId);
  }
}

const typedTemplate = html<EventAndSlotTypedWrapper>`
  <!-- Need to include stylesheet here so that I can use the icons. -->
  <!-- Notice how slotted elements continue to get the styles in side <custom-avatar-event-and-slot> -->
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <custom-avatar-event-and-slot>
    ${repeat(
      w => w.userIds,
      html`<i slot="${u => u}" class="${u => getAvatar(u)}"></i>`
    )}
  </custom-avatar-event-and-slot>
`;

@customElement({
  name: 'event-and-slot-typed-wrapper',
  template: typedTemplate,
})
class EventAndSlotTypedWrapper extends FASTElement {
  @observable userIds: string[] = [];

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    // Full typescript support (IDE auto-complete etc.)
    this.addEventListener('userjoined', e => this.addUser(e.detail.userId));
    this.addEventListener('userleft', e => this.removeUser(e.detail.userId));
  }

  override disconnectedCallback(): void {
    this.removeEventListener('userjoined', e => this.addUser(e.detail.userId));
    this.removeEventListener('userleft', e => this.removeUser(e.detail.userId));
    super.disconnectedCallback && super.disconnectedCallback();
  }

  addUser(userId: string) {
    this.userIds = [...this.userIds, userId];
  }

  removeUser(userId: string) {
    this.userIds = this.userIds.filter(u => u !== userId);
  }
}

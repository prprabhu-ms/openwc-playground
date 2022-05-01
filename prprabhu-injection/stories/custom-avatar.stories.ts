import {
  customElement,
  FASTElement,
  html,
  observable,
  repeat,
} from '@microsoft/fast-element';
import { html as litHTML } from 'lit';
import {
  UserJoinedEventDetail,
  UserLeftEventDetail,
} from '../src/custom-avatar-event-and-slot.js';
import '../src/index.js';

export default {
  title: 'CustomAvatar',
  component: 'injection-template',
};

// icons from https://remixicon.com/
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

/// ////////////////////////////////////////////////////////////////////////////
// Custom Element Wrapper: Type unsafe
/// ////////////////////////////////////////////////////////////////////////////

export const EventAndSlotWrappedUntyped = () => litHTML`
  <event-and-slot-untyped-wrapper>
  </event-and-slot-untyped-wrapper>
`;

const untypedTemplate = html<EventAndSlotUntypedWrapper>`
  <!-- Need to include stylesheet here so that I can use the icons. -->
  <!-- Notice how slotted elements continue to get the styles in side <custom-avatar-event-and-slot> -->
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <custom-avatar-event-and-slot
    @userjoined=${(w, c) => w.addUser((c.event as any).detail)}
    @userleft=${(w, c) => w.removeUser((c.event as any).detail)}
  >
    ${repeat(
      w => w.users,
      html`<i
        slot="${u => u.targetSlot}"
        class="${u => getAvatar(u.data.userId)}"
      ></i>`
    )}
  </custom-avatar-event-and-slot>
`;

@customElement({
  name: 'event-and-slot-untyped-wrapper',
  template: untypedTemplate,
})
class EventAndSlotUntypedWrapper extends FASTElement {
  @observable users: UserJoinedEventDetail[] = [];

  addUser(user: UserJoinedEventDetail) {
    this.users = [...this.users, user];
  }

  removeUser(user: UserLeftEventDetail) {
    this.users = this.users.filter(u => u.targetSlot !== user.targetSlot);
  }
}

/// ////////////////////////////////////////////////////////////////////////////
// Custom Element Wrapper: Type safe
/// ////////////////////////////////////////////////////////////////////////////

export const EventAndSlotWrappedTyped = () => litHTML`
  <event-and-slot-typed-wrapper>
  </event-and-slot-typed-wrapper>
`;

const typedTemplate = html<EventAndSlotTypedWrapper>`
  <!-- Need to include stylesheet here so that I can use the icons. -->
  <!-- Notice how slotted elements continue to get the styles in side <custom-avatar-event-and-slot> -->
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <custom-avatar-event-and-slot>
    ${repeat(
      w => w.users,
      html`<i
        slot="${u => u.targetSlot}"
        class="${u => getAvatar(u.data.userId)}"
      ></i>`
    )}
  </custom-avatar-event-and-slot>
`;

@customElement({
  name: 'event-and-slot-typed-wrapper',
  template: typedTemplate,
})
class EventAndSlotTypedWrapper extends FASTElement {
  @observable users: UserJoinedEventDetail[] = [];

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    // Full typescript support (IDE auto-complete etc.)
    this.addEventListener('userjoined', e => this.addUser(e.detail));
    this.addEventListener('userleft', e => this.removeUser(e.detail));
  }

  override disconnectedCallback(): void {
    this.removeEventListener('userjoined', e => this.addUser(e.detail));
    this.removeEventListener('userleft', e => this.removeUser(e.detail));
    super.disconnectedCallback && super.disconnectedCallback();
  }

  addUser(user: UserJoinedEventDetail) {
    this.users = [...this.users, user];
  }

  removeUser(user: UserLeftEventDetail) {
    this.users = this.users.filter(u => u.targetSlot !== user.targetSlot);
  }
}

/// ////////////////////////////////////////////////////////////////////////////
// Plain JavaScript
/// ////////////////////////////////////////////////////////////////////////////

// I'm bending over backwards to showcase this use-case via storybook.
// There is no easy way to inject JavaScript from the story into the preview iframe.
// So, inline it all.
export const EventAndSlotPlainJS = () => litHTML`
  <!-- Need to include stylesheet here so that I can use the icons. -->
  <!-- Notice how slotted elements continue to get the styles in side <custom-avatar-event-and-slot> -->
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />

  <div id="plain-container">
    <custom-avatar-event-and-slot id="plain-component">
    </custom-avatar-event-and-slot>
  </div>

  <script>
    const getAvatar = (userId) => {
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

    const plainContainer = document.getElementById('plain-container');

    plainContainer?.addEventListener('userjoined', e => {
      const plainComponent = document.getElementById('plain-component');
      // Full typescript support (IDE auto-complete etc.)
      const targetSlot = e.detail.targetSlot;
      const userId = e.detail.data.userId;
      const child = document.createElement('i');
      child.setAttribute('slot', targetSlot);
      child.setAttribute('class', getAvatar(userId));
      console.log(plainComponent);
      plainComponent?.appendChild(child);
    });

    plainContainer?.addEventListener('userleft', e => {
      const plainComponent = document.getElementById('plain-component');
      if (!plainComponent) {
        return;
      }
      const targetSlot = e.detail.targetSlot;
      for (let i = 0; i < plainComponent.children.length; i++) {
        const child = plainComponent.children[i];
        if (child.getAttribute('slot') === targetSlot) {
          plainComponent.removeChild(child);
          return;
        }
      }
    })
  </script>
`;

// Following code is a repeat of what's inline the <script> tag above.
// It shows IDE support for events etc.
const plainContainer = document.getElementById('plain-container');

plainContainer?.addEventListener('userjoined', e => {
  const plainComponent = document.getElementById('plain-component');
  // Full typescript support (IDE auto-complete etc.)
  const { targetSlot } = e.detail;
  const { userId } = e.detail.data;
  const child = document.createElement('i');
  child.setAttribute('slot', targetSlot);
  child.setAttribute('class', getAvatar(userId));
  console.log(plainComponent);
  plainComponent?.appendChild(child);
});

plainContainer?.addEventListener('userleft', e => {
  const plainComponent = document.getElementById('plain-component');
  if (!plainComponent) {
    return;
  }
  const { targetSlot } = e.detail;
  for (let i = 0; i < plainComponent.children.length; i += 1) {
    const child = plainComponent.children[i];
    if (child.getAttribute('slot') === targetSlot) {
      plainComponent.removeChild(child);
      return;
    }
  }
});

/// ////////////////////////////////////////////////////////////////////////////
// Client controlled rerendering
/// ////////////////////////////////////////////////////////////////////////////

export const EventAndSlotWrappedDynamic = () => litHTML`
  <event-and-slot-dynamic-wrapper>
  </event-and-slot-dynamic-wrapper>
`;

const dynamicTemplate = html<EventAndSlotDynamicWrapper>`
  <!-- Need to include stylesheet here so that I can use the icons. -->
  <!-- Notice how slotted elements continue to get the styles in side <custom-avatar-event-and-slot> -->
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <custom-avatar-event-and-slot>
    ${repeat(
      w => w.users,
      html`
        <div slot="${u => u.targetSlot}">
          <i class="${u => getAvatar(u.data.userId)}"></i>
          <span>${u => u.extraTag}</span>
        </div>
      `
    )}
  </custom-avatar-event-and-slot>
`;

@customElement({
  name: 'event-and-slot-dynamic-wrapper',
  template: dynamicTemplate,
})
class EventAndSlotDynamicWrapper extends FASTElement {
  private tagUpdateTimer: unknown;

  @observable users: (UserJoinedEventDetail & { extraTag: string })[] = [];

  override connectedCallback(): void {
    super.connectedCallback && super.connectedCallback();
    // Full typescript support (IDE auto-complete etc.)
    this.addEventListener('userjoined', e => this.addUser(e.detail));
    this.addEventListener('userleft', e => this.removeUser(e.detail));
    this.tagUpdateTimer = setInterval(() => {
      const extraTag = this.createTag();
      this.users = this.users.map(u => ({ ...u, extraTag }));
    }, 1000);
  }

  override disconnectedCallback(): void {
    this.removeEventListener('userjoined', e => this.addUser(e.detail));
    this.removeEventListener('userleft', e => this.removeUser(e.detail));
    // Different arg types in lib.dom.d.ts vs Node's timers.d.ts
    clearInterval(this.tagUpdateTimer as any);
    super.disconnectedCallback && super.disconnectedCallback();
  }

  addUser(user: UserJoinedEventDetail) {
    this.users = [...this.users, { ...user, extraTag: this.createTag() }];
  }

  removeUser(user: UserLeftEventDetail) {
    this.users = this.users.filter(u => u.targetSlot !== user.targetSlot);
  }

  private createTag(): string {
    return new Date().toString();
  }
}

/// ////////////////////////////////////////////////////////////////////////////
// Default rendering
/// ////////////////////////////////////////////////////////////////////////////

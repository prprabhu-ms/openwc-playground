import { customElement, FASTElement, html } from '@microsoft/fast-element';
import { html as litHTML } from 'lit';
import { OnRenderAvatarArgs } from '../src/custom-avatar-callback.js';
import '../src/index.js';

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

export default {
  title: 'CustomAvatarCallback',
  component: 'custom-avatar-callback',
};

/// ////////////////////////////////////////////////////////////////////////////
// wrapper: working
/// ////////////////////////////////////////////////////////////////////////////
export const Wrapped = () =>
  litHTML`<custom-avatar-callback-wrapper></custom-avatar-callback-wrapper>`;

const templateWrapped = html<CustomAvatarCallBackWrapper>`
  <custom-avatar-callback
    :onRenderAvatar=${w => w.onRenderAvatar}
  ></custom-avatar-callback>
`;

@customElement({
  name: 'custom-avatar-callback-wrapper',
  template: templateWrapped,
})
class CustomAvatarCallBackWrapper extends FASTElement {
  onRenderAvatar = html<OnRenderAvatarArgs>`${a => a.userId.toUpperCase()}`;
}
/// ////////////////////////////////////////////////////////////////////////////
// wrapper: broken. General problem: Can't style the injected HTML properly.
/// ////////////////////////////////////////////////////////////////////////////
export const WrappedBroken = () =>
  litHTML`<custom-avatar-callback-wrapper-broken></custom-avatar-callback-wrapper-broken>`;

const templateBroken = html<CustomAvatarCallBackWrapperBroken>`
  <custom-avatar-callback
    :onRenderAvatar=${w => w.onRenderAvatar}
  ></custom-avatar-callback>
`;

@customElement({
  name: 'custom-avatar-callback-wrapper-broken',
  template: templateBroken,
})
class CustomAvatarCallBackWrapperBroken extends FASTElement {
  onRenderAvatar = html<OnRenderAvatarArgs>`<i
    class="${a => getAvatar(a.userId)}"
    >BROKEN: Can't inject stylesheet</i
  >`;
}

/// ////////////////////////////////////////////////////////////////////////////
// client controlled rerender: Not possible because injected template is still controlled by
// custom-avatar-callback custom element, and that element has no need to rerender / no clean
// way to request a rerender.
/// ////////////////////////////////////////////////////////////////////////////

/// ////////////////////////////////////////////////////////////////////////////
// default value: not applicable because rendering is synchronous (as opposed to event and slot)
/// ////////////////////////////////////////////////////////////////////////////

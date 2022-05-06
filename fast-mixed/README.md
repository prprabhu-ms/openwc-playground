# fast-mixed

This is an exploration of using light and shadow DOM together in a custom element.

- [stories/mixed-message](./stories/mixed-message.stories.ts) and [stories/mixed-message-thread](./stories/mixed-message-thread.stories.ts) explore rendering content in light DOM internally in a component and then slotting into shadow DOM.
- [stories/mixed-dynamic](./stories/mixed-dynamic.stories.ts) verifies that elements rendered in the light DOM by the component are reactive.
- [stories/mixed-external-slots](./stories/mixed-external-slots.stories.ts) explores what happens when both the client and the component renders slots to the light DOM.
- [stories/mixed-hidden-slots](./stories/mixed-hidden-slots.stories.ts) is a failed attempt to hide internal slots used to render both in light and shadow DOM in a custom component.
- [stories/nested](./stories/nested.stories.ts) validates that slots can be forwarded in a custom element to its children, and (fails) to do the same in a component that uses just light DOM.
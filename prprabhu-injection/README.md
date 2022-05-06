# prprabhu-injection

This is an exploration of how client of a component can be notified of internal state changes and react to that notification.

- [stories/injection-icon](./stories/injection-icon.stories.ts) is the simplest case of injecting elements via slots
- [stories/custom-avatar-callback](./stories/custom-avatar-callback.stories.ts) explores using callbacks for both notification of internal state changes and responding with elements to render.
- [stories/custom-avatar-event-and-slot](./stories/custom-avatar-event-and-slot.stories.ts) explores using events for notification and (dynamic) slots fo responding with elements to render.
- [stories/file-sharing-event](./stories/file-sharing-event.stories.ts) explores a case where client wants to return event-related data that is then used for rendering internally.

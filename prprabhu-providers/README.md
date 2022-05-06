# prprabhu-providers

This exploration focuses on ways to connect a component to backend services. All demos are linked from [demo/index](./demo/index.html).

- [demo/global](./demo/global.html) is the easiest option of setting a global constant and using that internally from the components.
- [demo/props](./demo/props.html) is an example of connecting explicitly via component attributes and properties.
- [demo/search](./demo/search.html) uses a provider component that is searched up the ancestor chain by the component (this doesn't work across shadow roots by default).
- [demo/event](./demo/event.html) uses a provider ancestor that handles a custom event triggered by the served component.
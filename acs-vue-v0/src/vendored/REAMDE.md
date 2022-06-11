# Vendored

This directory contains vendored code.

- [./callComposite.js](./callComposite.js) is the [vanilla JS release](https://github.com/Azure/communication-ui-library/releases/latest/download/callComposite.js) of `CallComposite`.
- [./acs-v0.js](./acs-v0.js) contains a compiled copy of the [Poc web-component implementation](../../../acs-v0/src/) in this repo.

## acs-v0.js

To update this file:

```sh
cd ..
npm run build
cp ./dist/esbuild/index.js ../acs-vue-v0/src/vendored/acs-v0.js
```

FAST's reactive system, based on the `@attr` and `@observable` decorators breaks when built with the Vite configuration used by Vue because it is[] incompatible with the latest JavaScript standard for class field declarations](https://github.com/microsoft/fast/issues/5017).

- I was not able to configure the Vite/esbuild/tsc build for this project in a way that avoids this issue.
- Even if that were possible, it would mean that Contoso needs to use specialized build setup to use our library (specifically, they would not be able to target > 'ES2020' and would need to disable `useDefineForClassFields` in `tsconfig.json` and even this workaround would break once the new JavaScript standard is more widely adopted).

For now, I side-steps these issues by using pre-compiled web component implementations. There are some issues to sort out with that approach as well:

- For simplicity, I've just used a single bundled script. We can't do that in practice because it will break tree shaking.
- I need to double check what precompilation means for Contoso trying to target more recent and older ES standards.

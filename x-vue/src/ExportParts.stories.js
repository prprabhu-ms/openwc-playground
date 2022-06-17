import ExportPartsExample from './ExportPartsExample.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  component: ExportPartsExample,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Default = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ExportPartsExample },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<export-parts-example />',
});
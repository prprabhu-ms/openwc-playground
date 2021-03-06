import CustomAvatarEventAndSlotExample from './CustomAvatarEventAndSlotExample.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  component: CustomAvatarEventAndSlotExample,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Default = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CustomAvatarEventAndSlotExample },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<custom-avatar-event-and-slot-example />',
});
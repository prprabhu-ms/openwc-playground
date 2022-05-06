import { html as litHTML } from 'lit';
import '../src/index.js';

export default {
  title: 'MixedHiddenSlots',
  component: 'mixed-hidden-slots',
};

// ////////////////////////////////////////////////////////////////////////////
// Doesn't work.
// There is no way to forward the "external" slot in this case.

export const Default = () => litHTML`
  <mixed-hidden-slots>
    <span slot="external">This content was provided externally.</span>
    <span slot="hidden">This content wanted to be in the hidden slot, but can't be.</span>
  </mixed-hidden-slots>
`;

export const SetInner = () => litHTML`
  <mixed-hidden-slots>
    <span slot="external">This content was provided externally.</span>
    <span slot="impl">This content was slotted into impl. That is unavoidable.</span>
  </mixed-hidden-slots>
`;

export const NoDefault = () => litHTML`
  <mixed-hidden-slots>
    <span slot="external">This content was provided externally.</span>
    <span>This content was slotted into default slot, but not shown in the UI</span>
  </mixed-hidden-slots>
`;

import { html as litHTML } from 'lit';
import '../src/index.js';

export default {
  title: 'MixedExternaSlots',
  component: 'mixed-external-slots',
};

export const Default = () => litHTML`
  <mixed-external-slots>
    <span slot="external">This content was provided externally.</span>
    <span slot="merged">This merged content was provided externally.</span>
  </mixed-external-slots>
`;

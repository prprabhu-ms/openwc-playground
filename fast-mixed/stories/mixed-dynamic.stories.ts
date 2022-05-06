import { html as litHTML } from 'lit';
import '../src/index.js';

export default {
  title: 'MixedDynamic',
  component: 'mixed-dynamic',
};

export const Default = () => litHTML`
  <mixed-dynamic></mixed-dynamic>
`;

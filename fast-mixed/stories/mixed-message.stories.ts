import { html as litHTML } from 'lit';
import '../src/index.js';

export default {
  title: 'MixedMessage',
  component: 'mixed-message',
};

export const SecondMessage = () => litHTML`
  <mixed-message messageid="2"></mixed-message>
`;

import { html as litHTML } from 'lit';
import '../src/index.js';

export default {
  title: 'MixedMessageThread',
  component: 'mixed-message-thread',
};

export const AllMessages = () => litHTML`
  <mixed-message-thread></mixed-message-thread>
`;

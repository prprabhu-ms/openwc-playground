import { html as litHTML } from 'lit';
import '../src/index.js';

export default {
  title: 'Nested',
};

export const Shadow = () => litHTML`
  <nested-shadow-outer>Slotted all the way in!</nested-shadow-outer>
`;

export const Light = () => litHTML`
  <nested-light-outer>Slotted all the way in!</nested-light-outer>
`;

import { html } from 'lit';
import '../src/render-counter.js';
import '../src/render-flatten.js';
import '../src/render-container.js';

export default {
  title: 'NestedComponentsRender',
  component: 'prprabhu-render-container',
};

export const NestedComponentsRender = () => html`
  <prprabhu-render-container></prprabhu-render-container>
`;

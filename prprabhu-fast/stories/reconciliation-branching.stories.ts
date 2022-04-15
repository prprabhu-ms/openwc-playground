import { html } from 'lit';
import '../src/reconciliation-branching.js';
import '../src/counter.js';

export default {
  title: 'ReconciliationBranching',
  component: 'prprabhu-reconciliation-branching',
};

export const NestedComponentsRender = () => html`
  <prprabhu-reconciliation-branching></prprabhu-reconciliation-branching>
`;

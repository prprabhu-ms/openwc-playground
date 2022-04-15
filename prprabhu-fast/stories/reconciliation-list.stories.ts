import { html } from 'lit';
import '../src/reconciliation-list.js';
import '../src/counter.js';

export default {
  title: 'ReconciliationList',
  component: 'prprabhu-reconciliation-list',
};

export const ReconciliationListControlled = () => html`
  <prprabhu-reconciliation-list></prprabhu-reconciliation-list>
`;

export const ReconciliationListNoattr = () => html`
  <prprabhu-reconciliation-list name="noattr"></prprabhu-reconciliation-list>
`;

export const ReconciliationListNoattrNorecycle = () => html`
  <prprabhu-reconciliation-list
    name="noattr-norecycle"
  ></prprabhu-reconciliation-list>
`;

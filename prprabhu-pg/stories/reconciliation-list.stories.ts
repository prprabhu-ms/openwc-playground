import { html } from 'lit';
import '../src/reconciliation-list-no-keys.js';
import '../src/reconciliation-list-controlled-attrib.js';
import '../src/reconciliation-list-keys.js';
import '../src/counter.js';

export default {
  title: 'ReconcliationList',
  component: 'prprabhu-reconciliation-list-no-keys',
};

export const ReconcliationListNoKeys = () => html`
  <prprabhu-reconciliation-list-no-keys></prprabhu-reconciliation-list-no-keys>
`;

export const ReconcliationListControlledAttrib = () => html`
  <prprabhu-reconciliation-list-controlled-attrib></prprabhu-reconciliation-list-controlled-attrib>
`;

export const ReconcliationListKeys = () => html`
  <prprabhu-reconciliation-list-keys></prprabhu-reconciliation-list-keys>
`;

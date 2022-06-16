import {
  attr,
  css,
  customElement,
  FASTElement,
  html,
} from '@microsoft/fast-element';

const template = html<AccountDetails>`
  <div>
    <h2>Account Details</h2>
    <table class="account-table">
      <tr>
        <th>Bank Name:</th>
        <td>${(x) => x.bankName}</td>
      </tr>
      <tr>
        <th>AC Number:</th>
        <td>${(x) => x.acNumber}</td>
      </tr>
      <tr>
        <th>AC Balance:</th>
        <td>$${(x) => x.acBalance}</td>
      </tr>
    </table>
    <slot></slot>
  </div>
`;

const styles = css`
  :host {
    display: block;
    font-family: sans-serif;
  }
  td {
    padding: 0 0.5rem;
  }
`;

@customElement({
  name: 'account-details',
  template,
  styles,
})
export class AccountDetails extends FASTElement {
  @attr bankName: string = 'FAST WC Bank';
  @attr acNumber: string = '';
  @attr acBalance: number = 0.0;
}

import {
  customElement,
  html,
  observable,
  FASTElement,
  attr,
} from '@microsoft/fast-element';

@customElement({
  name: 'e-transfer', // a wc needs to have a `-` in the name
  template: html<ETransfer>`
      <h4>Transfer Money to Account - ${(x) => x.toAcNumber}</h4>
      <fast-text-field
        id="amountField
        placeholder="Amount in $"
        type="number"
        value=${(x) => x.amount}
        @input=${(x, c) => x.onChange(c.event)}
      ></fast-text-field>
      <fast-button href="#" @click=${(x) => x.onClick()}>Send</fast-button>
    `,
})
export class ETransfer extends FASTElement {
  @attr toAcNumber: string = '';
  @attr amount: number = 0;
  @observable onSend?: () => void;

  // Helper Function for reducing the code needed to dispatch events.
  dispatchCustomEvent(eventName: string, detail: any) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
      })
    );
  }

  onChange(event: Event) {
    this.amount = parseFloat((event.target! as HTMLInputElement).value);
  }

  onClick() {
    console.log(`Sending ${this.amount} to ${this.toAcNumber}`);
    this.dispatchCustomEvent('send', {
      amount: this.amount,
    });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-notice',
  template: `<div style="display: block; margin: 1rem 0">
    <h4>Angular Bank ETransfer service proudly servings you since 2022!</h4>
    <p>
      <b>Note: </b>An Angular component is being used to render this message
      inside a WC Slot.
    </p>
    <p>Current time in Vancouver, BC is {{ currentTime }}</p>
  </div>`,
})
export class AngularNoticeComponent {
  interval?: any;
  currentTime: string = new Date().toLocaleString();

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentTime = new Date().toLocaleString();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  angularAcNumber = 'AG98800651';
  angularAcBalance = 157.23;
  wcAcNumber = 'WC4510087';
  wcAcBalance = 523.87;

  mailingAddress = {
    name: 'John Doe',
    address: '123 Main St',
    city: 'Vancouver',
    province: 'BC',
    postalCode: 'V6B 1A1',
    country: 'Canada',
    phone: '778-555-1212',
    someFunc: () => {
      console.log('SOME FUNC');
    }
  };

  receiveMoney(event: Event) {
    const amount = (event as CustomEvent).detail.amount;
    console.log(amount, 'Received via Angular');
    this.angularAcBalance += amount;
    this.wcAcBalance -= amount;
  }

  sendMoney(event: Event) {
    const amount = (event as CustomEvent).detail.amount;
    console.log(amount, 'Sent via Angular');
    this.wcAcBalance += amount;
    this.angularAcBalance -= amount;
  }
}

// @TODO Styling

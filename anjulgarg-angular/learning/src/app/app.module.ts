import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AngularNoticeComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, AngularNoticeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  // Tells angular that we will have custom elements in our templates.
  // Angular+WC
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

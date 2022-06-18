import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
  fastTextField,
  fastDivider,
} from '@microsoft/fast-components';
import { AccountDetails } from './fast-components/AcountDetails';
import { ETransfer } from './fast-components/ETransfer';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Angular+WC
provideFASTDesignSystem().register(
  fastCard(),
  fastButton(),
  fastTextField(),
  fastDivider(),
  AccountDetails,
  ETransfer
);

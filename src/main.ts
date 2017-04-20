import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Angular2SocialLoginModule } from "angular2-social-login";

let providers = {
    "google": {
      "clientId": "96127706862-m80vsr7lqrsk1g67t8v3564q5pcon1l2.apps.googleusercontent.com"
    },
    "facebook": {
      "clientId": "219575831860436",
      "apiVersion": "v2.9" //like v2.4
    }
  };

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

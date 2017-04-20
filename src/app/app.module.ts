import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';

import { Angular2SocialLoginModule } from "angular2-social-login/lib/index.js";

let providers = {
    "google": {
      "clientId": "96127706862-m80vsr7lqrsk1g67t8v3564q5pcon1l2.apps.googleusercontent.com"
    },
    "facebook": {
      "clientId": "219575831860436",
      "apiVersion": "v2.9" //like v2.4 
    }
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    Angular2SocialLoginModule.initWithProviders(providers),
    MaterialModule/*,
    NoopAnimationsModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

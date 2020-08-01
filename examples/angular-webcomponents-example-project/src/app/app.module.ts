import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Injector} from '@angular/core';


import { createCustomElement } from '@angular/elements';
import { AemAngularCoreWcmComponentsButtonV1,ButtonV1Component} from "@adobe/aem-core-components-angular-base/authoring/button/v1";

@NgModule({
  imports: [
    BrowserModule,
    AemAngularCoreWcmComponentsButtonV1
  ],
})
export class AppModule {
  constructor(private injector: Injector) {}


  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(ButtonV1Component, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('core-button-v1', el);
  }
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

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

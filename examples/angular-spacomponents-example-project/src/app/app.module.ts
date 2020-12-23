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

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpaAngularEditableComponentsModule} from "@adobe/aem-angular-editable-components";
import {PageComponent} from "./components/page/page.component";
import {TextComponent} from "./components/text/text.component";
import {ImageComponent} from "./components/image/image.component";
import {HeaderComponent} from "./components/header/header.component";
import {ListComponent} from "./components/list/list.component";
import {DemoComponent} from "./components/demo/demo.component";

import {AemAngularCoreSpaWcmComponentsModule} from "@adobe/aem-core-components-angular-spa";
import {AemAngularCoreWcmComponentsModule} from "@adobe/aem-core-components-angular-base";
import {DemoJsonComponent} from "./components/demo/json/demo.json.component";
import {DemoPropertiesComponent} from "./components/demo/properties/demo.properties.component";
import {DemoMarkupComponent} from "./components/demo/markup/demo.markup.component";

@NgModule({
  declarations: [
    DemoJsonComponent,
    DemoPropertiesComponent,
    AppComponent,
    PageComponent,
    TextComponent,
    ImageComponent,
    HeaderComponent,
    ListComponent,
    DemoComponent,
    DemoJsonComponent,
    DemoPropertiesComponent,
    DemoMarkupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaAngularEditableComponentsModule,
    AemAngularCoreWcmComponentsModule,
    AemAngularCoreSpaWcmComponentsModule
  ],
  providers: [],
  entryComponents: [
    ListComponent,
    TextComponent,
    PageComponent,
    ImageComponent,
    HeaderComponent,
    DemoComponent,
    DemoJsonComponent,
    DemoPropertiesComponent,
    DemoMarkupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

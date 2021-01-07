import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpaAngularEditableComponentsModule} from "@adobe/aem-angular-editable-components";
import {PageComponent} from "./components/page/page.component";
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
    DemoComponent,
    DemoJsonComponent,
    DemoPropertiesComponent,
    DemoMarkupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'angular-spacomponents-demo'
    }),
    AppRoutingModule,
    SpaAngularEditableComponentsModule,
    AemAngularCoreWcmComponentsModule,
    AemAngularCoreSpaWcmComponentsModule
  ],
  providers: [],
  entryComponents: [
    PageComponent,
    DemoComponent,
    DemoJsonComponent,
    DemoPropertiesComponent,
    DemoMarkupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

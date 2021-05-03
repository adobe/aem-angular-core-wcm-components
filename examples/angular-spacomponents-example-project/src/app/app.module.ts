import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {SpaAngularEditableComponentsModule} from "@adobe/aem-angular-editable-components";
import {PageComponent} from "./components/page/page.component";
import {DemoComponent} from "./components/demo/demo.component";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DemoJsonComponent} from "./components/demo/json/demo.json.component";
import {DemoPropertiesComponent} from "./components/demo/properties/demo.properties.component";
import {DemoMarkupComponent} from "./components/demo/markup/demo.markup.component";
import {AemAngularCoreWcmComponentsTitleV2} from "@adobe/aem-core-components-angular-base/authoring/title/v2";
import {AemAngularCoreWcmComponentsNavigationV1} from "@adobe/aem-core-components-angular-base/layout/navigation/v1";
import {AemAngularCoreWcmComponentsTextV2} from "@adobe/aem-core-components-angular-base/authoring/text/v2";
import {AemAngularCoreWcmComponentsContainerV1} from "@adobe/aem-core-components-angular-spa/containers/container/v1";
import {AemAngularCoreWcmComponentsTabsV1} from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";
import {AemAngularCoreWcmComponentsSeparatorV1} from "@adobe/aem-core-components-angular-base/authoring/separator/v1";
import {AemAngularCoreWcmComponentsTeaserV1} from "@adobe/aem-core-components-angular-base/authoring/teaser/v1";

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
      appId: 'angular-spa'
    }),
    AppRoutingModule,
    SpaAngularEditableComponentsModule,
    AemAngularCoreWcmComponentsTitleV2,
    AemAngularCoreWcmComponentsTeaserV1,
    AemAngularCoreWcmComponentsNavigationV1,
    AemAngularCoreWcmComponentsTextV2,
    AemAngularCoreWcmComponentsContainerV1,
    AemAngularCoreWcmComponentsTabsV1,
    AemAngularCoreWcmComponentsSeparatorV1
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

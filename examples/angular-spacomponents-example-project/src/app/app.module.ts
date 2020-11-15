import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpaAngularEditableComponentsModule} from "@adobe/aem-angular-editable-components";
import {PageComponent} from "./components/page/page.component";
import {ImageComponent} from "./components/image/image.component";
import {HeaderComponent} from "./components/header/header.component";
import {ListComponent} from "./components/list/list.component";
import {DemoComponent} from "./components/demo/demo.component";
import {AemAngularCoreWcmComponentsTeaserV1} from "@adobe/aem-core-components-angular-base/authoring/teaser/v1";
import {AemAngularCoreWcmComponentsTitleV2} from "@adobe/aem-core-components-angular-base/authoring/title/v2";
import {AemAngularCoreWcmComponentsTextV2} from "@adobe/aem-core-components-angular-base/authoring/text/v2";
import {AemAngularCoreWcmComponentsNavigationV1} from '@adobe/aem-core-components-angular-base/layout/navigation/v1';
import {AemAngularCoreWcmComponentsTabsV1} from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";
import {DemoJsonComponent} from "./components/demo/json/demo.json.component";
import {DemoPropertiesComponent} from "./components/demo/properties/demo.properties.component";
import {DemoMarkupComponent} from "./components/demo/markup/demo.markup.component";

@NgModule({
  declarations: [
    DemoJsonComponent,
    DemoPropertiesComponent,
    AppComponent,
    PageComponent,
    ImageComponent,
    HeaderComponent,
    ListComponent,
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
    AemAngularCoreWcmComponentsTeaserV1,
    AemAngularCoreWcmComponentsTitleV2,
    AemAngularCoreWcmComponentsTextV2,
    AemAngularCoreWcmComponentsNavigationV1,
    AemAngularCoreWcmComponentsTabsV1
  ],
  providers: [],
  entryComponents: [
    ListComponent,
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

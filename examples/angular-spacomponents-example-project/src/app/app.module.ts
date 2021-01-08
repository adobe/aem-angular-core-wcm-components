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
import {AemAngularCoreWcmComponentsImageV2} from "@adobe/aem-core-components-angular-base/authoring/image/v2";
import {AemAngularCoreWcmComponentsTitleV2} from "@adobe/aem-core-components-angular-base/authoring/title/v2";
import {AemAngularCoreWcmComponentsDownloadV1} from "@adobe/aem-core-components-angular-base/authoring/download/v1";
import {AemAngularCoreWcmComponentsNavigationV1} from "@adobe/aem-core-components-angular-base/layout/navigation/v1";
import {AemAngularCoreWcmComponentsTextV2} from "@adobe/aem-core-components-angular-base/authoring/text/v2";
import {AemAngularCoreWcmComponentsButtonV1} from "@adobe/aem-core-components-angular-base/authoring/button/v1";
import {AemAngularCoreWcmComponentsDefaultV1} from "@adobe/aem-core-components-angular-base/authoring/default/v1";
import {AemAngularCoreWcmComponentsContainerV1} from "@adobe/aem-core-components-angular-spa/containers/container/v1";
import {AemAngularCoreWcmComponentsAccordionV1} from "@adobe/aem-core-components-angular-spa/containers/accordion/v1";
import {AemAngularCoreWcmComponentsTabsV1} from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";
import {AemAngularCoreWcmComponentsCarouselV1} from "@adobe/aem-core-components-angular-spa/containers/carousel/v1";
import {AemAngularCoreWcmComponentsBreadCrumbV2} from "@adobe/aem-core-components-angular-base/layout/breadcrumb/v2";
import {AemAngularCoreWcmComponentsLanguageNavigationV1} from "@adobe/aem-core-components-angular-base/layout/language-navigation/v1";
import {AemAngularCoreWcmComponentsListV2} from "@adobe/aem-core-components-angular-base/authoring/list/v2";
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
      appId: 'angular-spacomponents-demo'
    }),
    AppRoutingModule,
    SpaAngularEditableComponentsModule,
    AemAngularCoreWcmComponentsImageV2,
    AemAngularCoreWcmComponentsTitleV2,
    AemAngularCoreWcmComponentsTeaserV1,
    AemAngularCoreWcmComponentsDownloadV1,
    AemAngularCoreWcmComponentsNavigationV1,
    AemAngularCoreWcmComponentsTextV2,
    AemAngularCoreWcmComponentsButtonV1,
    AemAngularCoreWcmComponentsDefaultV1,
    AemAngularCoreWcmComponentsContainerV1,
    AemAngularCoreWcmComponentsAccordionV1,
    AemAngularCoreWcmComponentsTabsV1,
    AemAngularCoreWcmComponentsCarouselV1,
    AemAngularCoreWcmComponentsBreadCrumbV2,
    AemAngularCoreWcmComponentsLanguageNavigationV1,
    AemAngularCoreWcmComponentsListV2,
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SpaAngularEditableComponentsModule} from "@adobe/cq-angular-editable-components";
import {PageComponent} from "./components/page/page.component";
import {TextComponent} from "./components/text/text.component";
import {ImageComponent} from "./components/image/image.component";
import {HeaderComponent} from "./components/header/header.component";
import {ListComponent} from "./components/list/list.component";

import {AemAngularCoreSpaWcmComponentsModule} from "@adobe/aem-core-components-angular-spa";
import {AemAngularCoreWcmComponentsModule} from "@adobe/aem-core-components-angular-base";
import {AemAngularCoreWcmComponentsAccordionV1} from "@adobe/aem-core-components-angular-spa/containers/accordion/v1";
import {AemAngularCoreWcmComponentsCarouselV1} from "@adobe/aem-core-components-angular-spa/containers/carousel/v1";
import {AemAngularCoreWcmComponentsTabsV1} from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";
import {AemAngularCoreWcmComponentsContainerV1} from "@adobe/aem-core-components-angular-spa/containers/container/v1";


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    TextComponent,
    ImageComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaAngularEditableComponentsModule,
    AemAngularCoreWcmComponentsModule,
    AemAngularCoreSpaWcmComponentsModule,
    AemAngularCoreWcmComponentsAccordionV1,
    AemAngularCoreWcmComponentsCarouselV1,
    AemAngularCoreWcmComponentsTabsV1,
    AemAngularCoreWcmComponentsContainerV1
  ],
  providers: [],
  entryComponents: [
    ListComponent,
    TextComponent,
    PageComponent,
    ImageComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

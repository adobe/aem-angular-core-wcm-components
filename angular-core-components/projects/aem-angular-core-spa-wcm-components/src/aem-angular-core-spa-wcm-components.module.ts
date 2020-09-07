import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";


import {SpaAngularEditableComponentsModule} from "@adobe/aem-angular-editable-components";
import {AemAngularCoreWcmComponentsAccordionV1} from "@adobe/aem-core-components-angular-spa/containers/accordion/v1";
import {AemAngularCoreWcmComponentsCarouselV1} from "@adobe/aem-core-components-angular-spa/containers/carousel/v1";
import {AemAngularCoreWcmComponentsTabsV1} from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";
import {AemAngularCoreWcmComponentsContainerV1} from "@adobe/aem-core-components-angular-spa/containers/container/v1";
import {AemAngularCoreSpaWcmComponentsCore} from "@adobe/aem-core-components-angular-spa/core";

@NgModule({
    imports: [
        CommonModule,
        SpaAngularEditableComponentsModule,
        AemAngularCoreWcmComponentsAccordionV1,
        AemAngularCoreWcmComponentsCarouselV1,
        AemAngularCoreWcmComponentsContainerV1,
        AemAngularCoreWcmComponentsTabsV1,
        AemAngularCoreSpaWcmComponentsCore
    ],
    exports: [
        SpaAngularEditableComponentsModule,
        AemAngularCoreWcmComponentsAccordionV1,
        AemAngularCoreWcmComponentsCarouselV1,
        AemAngularCoreWcmComponentsContainerV1,
        AemAngularCoreWcmComponentsTabsV1,
        AemAngularCoreSpaWcmComponentsCore
    ]
})
export class AemAngularCoreSpaWcmComponentsModule {
}

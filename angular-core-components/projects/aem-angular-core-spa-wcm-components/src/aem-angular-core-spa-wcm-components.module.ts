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

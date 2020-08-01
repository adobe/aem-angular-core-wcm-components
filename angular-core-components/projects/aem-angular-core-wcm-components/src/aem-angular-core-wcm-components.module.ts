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
import {NgModule, Type} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AemAngularCoreWcmComponentsCore} from "@adobe/aem-core-components-angular-base/core";
import {AemAngularCoreWcmComponentsButtonV1} from "@adobe/aem-core-components-angular-base/authoring/button/v1";
import {AemAngularCoreWcmComponentsDefaultV1} from "@adobe/aem-core-components-angular-base/authoring/default/v1";
import {AemAngularCoreWcmComponentsDownloadV1} from "@adobe/aem-core-components-angular-base/authoring/download/v1";
import {AemAngularCoreWcmComponentsImageV2} from "@adobe/aem-core-components-angular-base/authoring/image/v2";
import {AemAngularCoreWcmComponentsListV2} from "@adobe/aem-core-components-angular-base/authoring/list/v2";
import {AemAngularCoreWcmComponentsSeparatorV1} from "@adobe/aem-core-components-angular-base/authoring/separator/v1";
import {AemAngularCoreWcmComponentsTextV2} from "@adobe/aem-core-components-angular-base/authoring/text/v2";
import {AemAngularCoreWcmComponentsTitleV2} from "@adobe/aem-core-components-angular-base/authoring/title/v2";
import {AemAngularCoreWcmComponentsBreadCrumbV2} from "@adobe/aem-core-components-angular-base/layout/breadcrumb/v2";
import {AemAngularCoreWcmComponentsNavigationV1} from "@adobe/aem-core-components-angular-base/layout/navigation/v1";
import {AemAngularCoreWcmComponentsLanguageNavigationV1} from "@adobe/aem-core-components-angular-base/layout/language-navigation/v1";



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        AemAngularCoreWcmComponentsCore,
        AemAngularCoreWcmComponentsButtonV1,
        AemAngularCoreWcmComponentsDefaultV1,
        AemAngularCoreWcmComponentsDownloadV1,
        AemAngularCoreWcmComponentsImageV2,
        AemAngularCoreWcmComponentsListV2,
        AemAngularCoreWcmComponentsSeparatorV1,
        AemAngularCoreWcmComponentsTextV2,
        AemAngularCoreWcmComponentsTitleV2,
        AemAngularCoreWcmComponentsBreadCrumbV2,
        AemAngularCoreWcmComponentsNavigationV1,
        AemAngularCoreWcmComponentsLanguageNavigationV1
    ],
    exports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        AemAngularCoreWcmComponentsCore,
        AemAngularCoreWcmComponentsButtonV1,
        AemAngularCoreWcmComponentsDefaultV1,
        AemAngularCoreWcmComponentsDownloadV1,
        AemAngularCoreWcmComponentsImageV2,
        AemAngularCoreWcmComponentsListV2,
        AemAngularCoreWcmComponentsSeparatorV1,
        AemAngularCoreWcmComponentsTextV2,
        AemAngularCoreWcmComponentsTitleV2,
        AemAngularCoreWcmComponentsBreadCrumbV2,
        AemAngularCoreWcmComponentsNavigationV1,
        AemAngularCoreWcmComponentsLanguageNavigationV1

    ]
})
export class AemAngularCoreWcmComponentsModule {
}

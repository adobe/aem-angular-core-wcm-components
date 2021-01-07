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
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ContainerV1Component} from "./container.v1.component";
import {SpaAngularEditableComponentsModule} from "@adobe/aem-angular-editable-components";
import {AemAngularCoreSpaWcmComponentsCore} from "@adobe/aem-core-components-angular-spa/core";

@NgModule({
    imports: [CommonModule, BrowserModule, RouterModule,SpaAngularEditableComponentsModule,AemAngularCoreSpaWcmComponentsCore],
    declarations: [
        ContainerV1Component
    ],
    exports: [
        ContainerV1Component
    ],
    entryComponents: [
        ContainerV1Component,
    ],
})
export class AemAngularCoreWcmComponentsContainerV1 {}
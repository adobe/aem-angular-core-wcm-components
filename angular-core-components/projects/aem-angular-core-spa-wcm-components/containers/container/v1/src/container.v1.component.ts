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


import {Component, HostBinding, Input} from "@angular/core";
import {AEMResponsiveGridComponent} from "@adobe/aem-angular-editable-components";

export enum ContainerLayout {
    SIMPLE = "simple",
    RESPONSIVEGRID = "responsiveGrid"
}

export interface ContainerV1Properties{
    layout: ContainerLayout;
    id: string;
    backgroundStyle: string;
}
@Component({
    selector: 'core-container-v1',
    host: {
        '[class]': 'hostClasses',
        '[attr.data-cq-data-path]':'cqPath'
    },
    templateUrl: './container.v1.component.html'
})
export class ContainerV1Component extends AEMResponsiveGridComponent implements ContainerV1Properties{

    @Input() layout: ContainerLayout;
    @Input() id: string;
    @Input() backgroundStyle: string;

    @HostBinding('class') baseCssClass = 'cmp-container';

    showResponsiveGrid():boolean{
        return this.layout === ContainerLayout.RESPONSIVEGRID;
    }

    get cssStyles(){
        return {
            background: this.backgroundStyle
        }
    }
}
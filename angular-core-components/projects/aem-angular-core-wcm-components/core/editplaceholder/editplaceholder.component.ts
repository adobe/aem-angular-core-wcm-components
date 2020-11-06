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

import {Component, Input} from "@angular/core";

export interface PlaceHolderModel {
    componentTitle?: string
    classAppend?: string
    emptyTextAppend?: string
    emptyText:string
    placeHolderCssClass:string
}
@Component({
    selector: 'core-placeholder',
    templateUrl: './editplaceholder.component.html',
})
export class EditPlaceholderComponent implements PlaceHolderModel{

    static DEFAULT_EMPTY_TEXT_LABEL: string = 'Please configure the component';
    @Input() classAppend?: string;
    @Input() componentTitle?: string;
    @Input() emptyTextAppend?: string;

    get emptyText() {
        const part1: string = (this.componentTitle != null && this.componentTitle.length > 0) ?  this.componentTitle +  ' - ' : '';
        const part2: string = (this.emptyTextAppend != null) ?  this.emptyTextAppend : EditPlaceholderComponent.DEFAULT_EMPTY_TEXT_LABEL;
        return  part1 + part2;
    }

    get placeHolderCssClass():string{
        return 'cq-placeholder ' + this.classAppend;
    }

}
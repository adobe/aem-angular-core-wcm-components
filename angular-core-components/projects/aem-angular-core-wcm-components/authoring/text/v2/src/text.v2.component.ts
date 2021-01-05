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
import {AbstractCoreComponent} from "@adobe/aem-core-components-angular-base/core";


export interface TextV2Model {
    text?: string;
    richText: boolean
}

export function TextV2IsEmptyFn(props:TextV2Model): boolean{
    return props.text == null || props.text.trim().length === 0;
}

@Component({
    selector: 'core-text-v2',
    templateUrl: './text.v2.component.html',
})
export class TextV2Component extends AbstractCoreComponent implements TextV2Model {

    @Input() baseCssClass = 'cmp-text';
    @Input() text?;
    @Input() richText = false;

    get isEmpty(): boolean {
        return TextV2IsEmptyFn(this);
    }
}
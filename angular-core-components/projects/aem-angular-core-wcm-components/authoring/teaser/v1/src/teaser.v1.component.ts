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
import {AbstractRoutedCoreComponent} from "@adobe/aem-core-components-angular-base/core";

export function TeaserV1IsEmptyFn(props:TeaserV1Model): boolean{
    return !props.title || !props.description
}

export interface TeaserV1Action {
    title: string
    URL: string
    routed?: boolean
}

export interface TeaserV1Model{
    pretitle?: string
    title?: string
    description?: string
    titleType: string
    linkURL: string
    actionsEnabled: boolean
    imageLinkHidden: boolean
    titleLinkHidden: boolean
    actions: TeaserV1Action[]
    imagePath: string
}


@Component({
    selector: 'core-teaser-v1',
    templateUrl: './teaser.v1.component.html',
})
export class TeaserV1Component extends AbstractRoutedCoreComponent implements TeaserV1Model{

    @Input() baseCssClass = 'cmp-teaser';

    @Input() pretitle?: string;
    @Input() title?: string;
    @Input() description?: string;
    @Input() titleType: string;
    @Input() linkURL: string;
    @Input() actionsEnabled: boolean = false;
    @Input() imageLinkHidden: boolean;
    @Input() titleLinkHidden: boolean;
    @Input() actions: TeaserV1Action[] = [];
    @Input() imagePath: string;

    get isEmpty(): boolean {
        return TeaserV1IsEmptyFn(this);
    }

    get isShowingImage(): boolean{
        return !!this.imagePath && this.imagePath.length > 0;
    }
}
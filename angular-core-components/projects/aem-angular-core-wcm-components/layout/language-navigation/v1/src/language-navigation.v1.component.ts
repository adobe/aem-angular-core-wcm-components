/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {Component, HostBinding, Input} from "@angular/core";
import {NavigationV1Component, NavigationV1IsEmptyFn, NavigationV1Item, NavigationV1Model} from "@adobe/aem-core-components-angular-base/layout/navigation/v1";

export interface LanguageNavigationV1Item extends NavigationV1Item{
    locale: string,
    country: string,
    language: string
    children?: LanguageNavigationV1Item[]
}

export interface LanguageNavigationV1Model extends NavigationV1Model{
    items:LanguageNavigationV1Item[]
}

@Component({
    selector: 'core-language-navigation-v1',
    templateUrl: './language-navigation.v1.component.html'
})
export class LanguageNavigationV1Component extends NavigationV1Component implements LanguageNavigationV1Model {
    @Input() baseCssClass = 'cmp-languagenavigation';

    @Input() items: LanguageNavigationV1Item[];
    @Input() accessibilityLabel;

    get isEmpty(): boolean {
        return NavigationV1IsEmptyFn(this);
    }

    getItemCssClass(item:LanguageNavigationV1Item):string{
        const parent = super.getItemCssClass(item);
        const countryCode = ` ${this.baseCssClass}__item--countrycode-${item.country}`;
        const langCode = ` ${this.baseCssClass}__item--langcode-${item.language}`;

        return parent + countryCode + langCode;
    }

    /**
     * You may overrule this method to determine for example based on current URL / page context whether the item is active.
     * @param item
     */
    isItemActive(item:NavigationV1Item):boolean{
        return item.active;
    }
}
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

import {Injectable, InjectionToken} from "@angular/core";
import {NavigationItemModel} from "../model/NavigationItemModel";

/**
 * NavigationUtilityService
 * By providing a custom implementation, you can override various layouts components behaviour to mark an item active or not.
 * This is useful when you want to make it based on a browser router location.
 */
export interface NavigationUtilityService {
    isItemActive(item:NavigationItemModel):boolean
}
export const NAVIGATION_UTIL_SERVICE = new InjectionToken<NavigationUtilityService>('NAVIGATION_UTIL_SERVICE');

@Injectable()
export class DefaultNavigationUtilityServiceImpl implements NavigationUtilityService {

    /**
     * You may overrule this method to determine for example based on current URL / page context whether the item is active.
     * @param item
     */
    isItemActive(item: NavigationItemModel): boolean {
        return item.active;
    }

}
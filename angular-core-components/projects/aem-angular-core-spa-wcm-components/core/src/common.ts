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

import {ComponentMapping,MappedComponentProperties} from "@adobe/aem-angular-editable-components";

export interface ContainerProperties extends MappedComponentProperties {
    componentMapping?: typeof ComponentMapping;
    cqItems: {[key: string]: Model};
    cqItemsOrder: string[];
}

export interface ContainerModel extends Model{

}


export interface Model extends Object {
    ":hierarchyType"?: string;
    /**
     * Path of the item/page
     */
    ":path"?: string;
    /**
     * Child pages (only present on page's itself, not on items)
     */
    ":children"?: {[key: string]: Model};

    /**
     * Items under the page / item
     */
    ":items"?: {[key: string]: Model};

    /**
     * Order of the items under the page / item
     * Can be used as keys for the :items property to iterate items in the proper order
     */
    ":itemsOrder"?: string[];

    /**
     * Resource type of the page / item
     */
    ":type"?: string;
}

export interface LabelledModel extends Model{
    "cq:panelTitle": string
}

/**
 * Indicated whether force reload is turned on, forcing the model to be refetched on every MapTo instantiation.
 */
export interface ReloadForceAble {
    cqForceReload?: boolean;
}
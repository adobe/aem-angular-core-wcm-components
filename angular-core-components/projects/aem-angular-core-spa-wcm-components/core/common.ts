import {ComponentMapping} from "@adobe/aem-angular-editable-components";

export interface ContainerProperties {
    componentMapping?: typeof ComponentMapping;
    cqItems: {[key: string]: Model};
    cqItemsOrder: string[];
    baseCssClass: string;
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
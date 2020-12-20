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
import {ContainerProperties,AbstractContainerComponent} from "@adobe/aem-core-components-angular-spa/core";

export interface AccordionV1Properties extends ContainerProperties{
    expandedItems: string[]
    singleExpansion: boolean
}

@Component({
    selector: 'core-accordion-v1',
    host: {
        '[class]': 'hostClasses',
        '[attr.data-cq-data-path]':'cqPath',
    },
    templateUrl: './accordion.v1.component.html'
})
export class AccordionV1Component extends AbstractContainerComponent implements AccordionV1Properties {
    @Input() singleExpansion: boolean;
    @Input() expandedItems: string[] = [];

    @HostBinding('class') class = 'cmp-accordion';

    getHostClassNames(): string {
        return 'cmp-accordion';
    }

    get isActiveItemNameSet(){
        return !!this.expandedItems && this.expandedItems.length > 0;
    }

    onClick(itemKey){

        const isActive = this.expandedItems.indexOf(itemKey) > -1;
        const isSingleExpansion = this.singleExpansion;

        if(isSingleExpansion){
            this.expandedItems = (isActive) ? [] : [itemKey];
        }else{
            if(isActive){
                const index =  this.expandedItems.indexOf(itemKey);
                this.expandedItems.splice( index );
            }else{
                this.expandedItems.push(itemKey);
            }
        }
    }

    protected onAuthorIndexChange(index:number){
        this.expandedItems = [
            this.cqItemsOrder[index]
        ];
    }

    isItemExpanded(itemKey){
        return this.expandedItems.indexOf(itemKey) > -1;
    }

    getButtonClass(itemKey){
        return this.isItemExpanded(itemKey) ? `${this.class}__button ${this.class}__button--expanded` : `${this.class}__button`;
    }

    getItemStyle(itemKey:string){
        const display = this.isItemExpanded(itemKey) ? 'block': 'none';
        return { 'display' : display};
    }

    getItemClass(itemKey){
        return this.isItemExpanded(itemKey) ? `${this.class}__panel ${this.class}__panel--expanded`: `${this.class}__panel ${this.class}__panel--hidden`;
    }

    getButtonTitle(itemKey:string){
        return this.cqItems[itemKey]["cq:panelTitle"];
    }

}
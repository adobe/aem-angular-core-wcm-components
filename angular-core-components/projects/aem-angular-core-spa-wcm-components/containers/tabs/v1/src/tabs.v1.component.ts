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



import {AfterViewInit, ChangeDetectorRef, Component, HostBinding, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {AEMAllowedComponentsContainerComponent} from "@adobe/aem-angular-editable-components";
import {AbstractContainerComponent} from "@adobe/aem-core-components-angular-spa/core";

const CONTAINER_CLASS_NAMES = 'aem-container';

@Component({
    selector: 'core-tabs-v1',
    host: {
        '[id]': 'containerId',
        '[class]': 'hostClasses',
        '[attr.data-cq-data-path]':'cqPath',
        '[attr.data-panelcontainer]': '"tabs"'
    },
    templateUrl: './tabs.v1.component.html'
})
/**
 * The current component provides the base presentational logic common to containers such as a grid or a page.
 * Container have in common the notion of item holders. Items are represented in the model by the fields _:items_ and _:itemsOrder_
 */
export class TabsV1Component extends AbstractContainerComponent implements OnInit{

    @Input() baseCssClass = 'cmp-tabs';

    activeItemName?:string;
    @Input() activeItem?: string;
    @Input() accessibilityLabel?: string;


    constructor(private changeDetectorRef:ChangeDetectorRef,@Inject(PLATFORM_ID) protected _platformId: Object) {
        super(_platformId);
    }

    onAuthorIndexChange(index:number){
        this.activeItemName = this.cqItemsOrder[index];
    }

    isActive(itemKey:string){
        return (this.activeItemName === itemKey);
    }

    getTabClass(itemKey:string){
        return `${this.baseCssClass}__tab` + ((this.isActive(itemKey) ? ` ${this.baseCssClass}__tab--active` : ''));
    }

    getTabTitle(itemKey:string){
        return this.getItem(itemKey)['cq:panelTitle'];
    }
    getItemStyle(itemKey:string){
        const display = this.isActive(itemKey) ? 'block': 'none';
        return { 'display' : display};
    }

    onClick(itemKey:string){
        this.activeItemName = itemKey;
        this.changeDetectorRef.detectChanges();
    }

    ngOnInit(): void {

        if(this.activeItem && this.activeItem.trim().length > 0 ){
            this.activeItemName = this.activeItem;
        }else{
            this.activeItemName = this.cqItemsOrder && this.cqItemsOrder.length > 0 ? this.cqItemsOrder[0] : '';
        }
        this.changeDetectorRef.detectChanges();

    }

    get containerId(){
        return 'tabs-' + this.id;
    }

    get activeTabItem(){
        return this.getItem(this.activeItemName);
    }

    get activeTabItemDataPath(){
        return this.getDataPath(this.activeItemName);
    }

    get activeTabItemName(){
        return this.activeItemName;
    }

    get hostClasses () {
        return this.getHostClassNames();
    }

    get isActiveItemNameSet(){
        return !!this.activeItemName && this.activeItemName.length > 0;
    }

}


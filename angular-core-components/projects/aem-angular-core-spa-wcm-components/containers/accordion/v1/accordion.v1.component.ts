import {Component, HostBinding, Input} from "@angular/core";
import {ContainerProperties,AbstractContainerComponent} from "@adobe/aem-core-components-angular-spa/core";

export interface AccordionV1Properties extends ContainerProperties{
    expandedItems: string[]
    singleExpansion: boolean
    id:string
}

@Component({
    selector: 'core-accordion-v1',
    host: {
        '[class]': 'hostClasses',
        '[attr.data-cq-data-path]':'cqPath'
    },
    templateUrl: './accordion.v1.component.html'
})
export class AccordionV1Component extends AbstractContainerComponent implements AccordionV1Properties {
    @Input() singleExpansion: boolean;
    @Input() expandedItems: string[] = [];
    @Input() id: string;

    @Input() baseCssClass = 'cmp-accordion';

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
        return this.isItemExpanded(itemKey) ? `${this.baseCssClass}__button ${this.baseCssClass}__button--expanded` : `${this.baseCssClass}__button`;
    }

    getItemStyle(itemKey:string){
        const display = this.isItemExpanded(itemKey) ? 'block': 'none';
        return { 'display' : display};
    }

    getItemClass(itemKey){
        return this.isItemExpanded(itemKey) ? `${this.baseCssClass}__panel ${this.baseCssClass}__panel--expanded`: `${this.baseCssClass}__panel ${this.baseCssClass}__panel--hidden`;
    }

    getButtonTitle(itemKey:string){
        return this.cqItems[itemKey]["cq:panelTitle"];
    }

}

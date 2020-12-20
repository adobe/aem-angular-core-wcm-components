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



import {ComponentMapping, AEMAllowedComponentsContainerComponent, Utils} from "@adobe/aem-angular-editable-components";
import {Component, HostBinding, Injectable, Input, OnDestroy, AfterViewInit} from "@angular/core";
import {ContainerModel, ContainerProperties, Model} from "./common";

export function ContainerIsEmptyFn(props:ContainerModel){
    return props[":itemsOrder"] == null || props[":itemsOrder"].length === 0;
}

const isBrowser = (() => {
    try{
        return typeof window !== 'undefined';
    }catch(err){
        return false;
    }
})();

@Component({
    selector: 'aem-core-abstract-container',
    template: ''
})
export class AbstractContainerComponent extends AEMAllowedComponentsContainerComponent implements ContainerProperties, AfterViewInit, OnDestroy{
    @Input() componentMapping: typeof ComponentMapping = ComponentMapping;
    @Input() cqForceReload: boolean = false;
    @Input() cqItems: {[key: string]: Model} = {};
    @Input() cqItemsOrder: string[] = [];

    @HostBinding('class') baseCssClass;

    //@ts-ignore
    messageChannel;

    constructor() {
        super();
        //@ts-ignore
        if (isBrowser && window.Granite && window.Granite.author && window.Granite.author.MessageChannel) {
            //@ts-ignore
            this.messageChannel = new window.Granite.author.MessageChannel("cqauthor", window);
            this.callback = this.callback.bind(this);
        }
    }

    callback(message:any){
        if (message.data && message.data.id === this.cqPath) {
            if (message.data.operation === "navigate") {
                const index = message.data.index as number;
                this.onAuthorIndexChange(index);
            }
        }
    }

    /**
     * Returns the class names of the container based on the data from the cqModel
     */
    getHostClassNames() {
        return this.baseCssClass;
    }

    protected onAuthorIndexChange(index:number){
        //implement me
    }


    ngAfterViewInit(): void {
        if(this.messageChannel){
            this.messageChannel.subscribeRequestMessage("cmp.panelcontainer", this.callback);
        }
    }

    ngOnDestroy(): void {
        if(this.messageChannel){
            this.messageChannel.unsubscribeRequestMessage("cmp.panelcontainer", this.callback);
        }
    }

    public get isInEditor(){
        return Utils.isInEditor();
    }
}

/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2020 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

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

    @HostBinding('class') class;

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

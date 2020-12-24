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

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';


import {AbstractContainerComponent} from './AbstractContainerComponent';
import {Utils} from "@adobe/aem-angular-editable-components";

import {ModelManager} from '@adobe/aem-spa-page-model-manager';

let callbacks: { (message: any): void; } [] = [];

//@ts-ignore
window.Granite = {
    author: {
        trigger: (path:string, index:number) => {
            callbacks.forEach((callback) => {
                callback({
                    data: {
                        id: path,
                        operation: 'navigate',
                        index: index
                    }
                })
            })
        },

        MessageChannel : function() {

            return {
                subscribeRequestMessage: (topic:string, callback:(message:any)=>void) => {
                    callbacks.push(callback)
                },
                unsubscribeRequestMessage: (topic:string, callback:(message:any)=>void) => {
                    const index:number = callbacks.indexOf(callback);
                    callbacks.splice(index, 1);
                }
            }

        }

    }
};

let onAuthorIndexChangeCalls;

describe('AbstractContainerComponent', () => {


    let component: AbstractContainerComponent;
    let fixture: ComponentFixture<AbstractContainerComponent>;

    let isInEditorSpy;
    let onAuthorChangeIndexSpy;

    beforeEach(() => {

        callbacks = [];
        onAuthorIndexChangeCalls = [];
        spyOn(ModelManager, 'addListener').and.returnValue(undefined);
        isInEditorSpy = spyOn(Utils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [AbstractContainerComponent]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [AbstractContainerComponent]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(AbstractContainerComponent);
        component = fixture.componentInstance;
        component.cqPath = '/content/some/component';
        fixture.detectChanges();

        onAuthorChangeIndexSpy = spyOn(component, 'onAuthorIndexChange').and.callFake((index:number) => {
            onAuthorIndexChangeCalls.push(index);
        });
    });


    it('should trigger the onAuthorIndex if granite calls it with the same path', () => {

        component = fixture.componentInstance;
        component.cqPath = '/content/some/component';
        fixture.detectChanges();
        //@ts-ignore
        window.Granite.author.trigger('/content/some/component', 2);

        expect(onAuthorIndexChangeCalls.length).toEqual(1);

        expect(onAuthorIndexChangeCalls[0]).toEqual(2);

        expect(component.isInEditor).toEqual(false);
        fixture.destroy();

        expect(callbacks.length).toEqual(0);

    });

    it('should NOT trigger the onAuthorIndex if granite calls it with a different path', () => {

        component = fixture.componentInstance;
        component.cqPath = '/content/some/other';
        fixture.detectChanges();
        //@ts-ignore
        window.Granite.author.trigger('/content/some/component', 2);
        
        expect(onAuthorIndexChangeCalls.length).toEqual(0);

    });

    it('should NOT trigger the onAuthorIndex if granite does not call it', () => {

        //@ts-ignore
        expect(onAuthorIndexChangeCalls.length).toEqual(0);

    });

});

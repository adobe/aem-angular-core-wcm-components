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


import {ListV2Component} from './list.v2.component';

import {AemAngularCoreWcmComponentsCore, MetaUtils} from "@adobe/aem-core-components-angular-base/core";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterLinkWithHref} from "@angular/router";
import {By} from "@angular/platform-browser";

import {mockItems, mockItemsWithRouting} from "./list.v2.spec.mocks";

describe('ListV2Component', () => {

    let component: ListV2Component;
    let fixture: ComponentFixture<ListV2Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                ListV2Component
            ],
            imports: [
                AemAngularCoreWcmComponentsCore,
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [ListV2Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(ListV2Component);

        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create placeholder', () => {
        isInEditorSpy.and.returnValue(true);
        fixture.detectChanges();
        const element = fixture.nativeElement;

        expect(element.querySelector('core-placeholder .cq-placeholder')).toBeDefined();
    });

    it('should not render the component', () => {
        isInEditorSpy.and.returnValue(false);
        fixture.detectChanges();
        const element = fixture.nativeElement;
        expect(component.isEmpty).toBeTrue();
        expect(element.querySelector('core-placeholder .cq-placeholder')).toBeNull();
    });


    it('render a list', () => {
        isInEditorSpy.and.returnValue(false);

        component.items = mockItems;
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('ul.cmp-list');

        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(element.querySelectorAll('ul.cmp-list li.cmp-list__item').length).toEqual(mockItems.length);


        mockItems.forEach((value, index) => {
            const article = element.querySelector('ul.cmp-list li.cmp-list__item:nth-child('+ (index + 1) +') article');
            expect(article).toBeDefined();

            expect(article.querySelector('span.cmp-list__item-title').innerText).toEqual(mockItems[index].title);
            expect(article.querySelector('span.cmp-list__item-description').innerText).toEqual(mockItems[index].description);
            expect(article.querySelector('a.cmp-list__item-link')).toBeNull();
        });

    });

    it('render a list with links', () => {
        isInEditorSpy.and.returnValue(false);

        component.items = mockItems;
        component.linkItems = true;
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('ul.cmp-list');

        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(element.querySelectorAll('ul.cmp-list li.cmp-list__item').length).toEqual(mockItems.length);


        mockItems.forEach((value, index) => {
            const article = element.querySelector('ul.cmp-list li.cmp-list__item:nth-child('+ (index + 1) +') article');
            expect(article).toBeDefined();

            const mockItem = mockItems[index];

            if(mockItem.url && mockItem.url.length > 0){
                expect(article.querySelector('a.cmp-list__item-link[href="' + mockItem.url + '"] span.cmp-list__item-title').innerText).toEqual(mockItem.title);
                expect(article.querySelector('span.cmp-list__item-description').innerText).toEqual(mockItem.description);
            }else{
                expect(article.querySelector('span.cmp-list__item-title').innerText).toEqual(mockItem.title);
                expect(article.querySelector('span.cmp-list__item-description').innerText).toEqual(mockItem.description);
            }

        });

    });

    it('render a list with links with a custom css class', () => {
        isInEditorSpy.and.returnValue(false);

        component.items = mockItems;
        component.linkItems = true;
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };
        component.baseCssClass = 'mycustomclass';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('ul.mycustomclass');

        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(element.querySelectorAll('ul.mycustomclass li.mycustomclass__item').length).toEqual(mockItems.length);


        mockItems.forEach((value, index) => {
            const article = element.querySelector('ul.mycustomclass li.mycustomclass__item:nth-child('+ (index + 1) +') article');
            expect(article).toBeDefined();

            const mockItem = mockItems[index];

            if(mockItem.url && mockItem.url.length > 0){
                expect(article.querySelector('a.mycustomclass__item-link[href="' + mockItem.url + '"] span.mycustomclass__item-title').innerText).toEqual(mockItem.title);
                expect(article.querySelector('span.mycustomclass__item-description').innerText).toEqual(mockItem.description);
            }else{
                expect(article.querySelector('span.mycustomclass__item-title').innerText).toEqual(mockItem.title);
                expect(article.querySelector('span.mycustomclass__item-description').innerText).toEqual(mockItem.description);
            }

        });

    });



    it('render a list with all routed links by master property', () => {

        isInEditorSpy.and.returnValue(false);

        component.items = mockItems;
        component.linkItems = true;
        component.routed = true;

        fixture.detectChanges();
        const element = fixture.nativeElement;

        expect(element.querySelectorAll('ul.cmp-list li.cmp-list__item').length).toEqual(mockItems.length);

        mockItems.forEach((value, index) => {
            const article = element.querySelector('ul.cmp-list li.cmp-list__item:nth-child('+ (index + 1) +') article');
            expect(article).toBeDefined();

            const mockItem = mockItems[index];

            if(mockItem.url && mockItem.url.length > 0){
                expect(article.querySelector('a.cmp-list__item-link[href="' + mockItem.url + '"] span.cmp-list__item-title').innerText).toEqual(mockItem.title);
                if(mockItem.description){
                    expect(article.querySelector('span.cmp-list__item-description').innerText).toEqual(mockItem.description);
                }else{
                    expect(article.querySelector('span.cmp-list__item-description').innerText).toBeNull();
                }

                const linkDebugEl = fixture.debugElement.query(By.css('ul.cmp-list li.cmp-list__item:nth-child('+ (index + 1) +') article a.cmp-list__item-link'));
                const routerLinkInstance = linkDebugEl.injector.get(RouterLinkWithHref);
                expect(routerLinkInstance['commands']).toEqual([ mockItem.url]);
                expect(routerLinkInstance['href']).toEqual( mockItem.url);
            }else{
                expect(article.querySelector('span.cmp-list__item-title').innerText).toEqual(mockItem.title);

                if(mockItem.description){
                    expect(article.querySelector('span.cmp-list__item-description').innerText).toEqual(mockItem.description);
                }else{
                    expect(article.querySelector('span.cmp-list__item-description').innerText).toBeNull();
                }
            }

        });
    });


    it('render a list with all routed links by master property', () => {

        isInEditorSpy.and.returnValue(false);

        component.items = mockItemsWithRouting;
        component.linkItems = true;


        fixture.detectChanges();
        const element = fixture.nativeElement;

        expect(element.querySelectorAll('ul.cmp-list li.cmp-list__item').length).toEqual(mockItems.length);

        mockItems.forEach((value, index) => {
            const article = element.querySelector('ul.cmp-list li.cmp-list__item:nth-child('+ (index + 1) +') article');
            expect(article).toBeDefined();

            const mockItem = mockItems[index];

            if(mockItem.url && mockItem.url.length > 0){
                expect(article.querySelector('a.cmp-list__item-link[href="' + mockItem.url + '"] span.cmp-list__item-title').innerText).toEqual(mockItem.title);
                if(mockItem.description){
                    expect(article.querySelector('span.cmp-list__item-description').innerText).toEqual(mockItem.description);
                }else{
                    expect(article.querySelector('span.cmp-list__item-description').innerText).toBeNull();
                }

                const linkDebugEl = fixture.debugElement.query(By.css('ul.cmp-list li.cmp-list__item:nth-child('+ (index + 1) +') article a.cmp-list__item-link'));
                const routerLinkInstance = linkDebugEl.injector.get(RouterLinkWithHref);
                expect(routerLinkInstance['commands']).toEqual([ mockItem.url]);
                expect(routerLinkInstance['href']).toEqual( mockItem.url);
            }else{
                expect(article.querySelector('span.cmp-list__item-title').innerText).toEqual(mockItem.title);

                if(mockItem.description){
                    expect(article.querySelector('span.cmp-list__item-description').innerText).toEqual(mockItem.description);
                }else{
                    expect(article.querySelector('span.cmp-list__item-description').innerText).toBeNull();
                }
            }

        });
    });


});

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


import {BreadCrumbV2Component, BreadCrumbV2ItemModel} from './breadcrumb.v2.component';

import {
    AemAngularCoreWcmComponentsCore,
    MetaUtils,
    DefaultNavigationUtilityServiceImpl
} from "@adobe/aem-core-components-angular-base/core";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterLinkWithHref} from "@angular/router";
import {By} from "@angular/platform-browser";

const items:BreadCrumbV2ItemModel[] = [
    {active:false,url:'/content/some/url.html', path: '/content/some/url', title:'Item1'},
    {active:false,url:'/content/some/url2.html', path: '/content/some/url2', title:'Item2', routed: true},
    {active:true,url:'/content/some/url3.html', path: '/content/some/url3', title:'Item3'}
];


describe('BreadCrumbV2Component', () => {

    let component: BreadCrumbV2Component;
    let fixture: ComponentFixture<BreadCrumbV2Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                BreadCrumbV2Component
            ],
            providers: [DefaultNavigationUtilityServiceImpl],
            imports: [
                AemAngularCoreWcmComponentsCore,
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [BreadCrumbV2Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(BreadCrumbV2Component);

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


    it('render breadcrumbs', () => {
        isInEditorSpy.and.returnValue(false);
        component.id = 'myId';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };
        component.items = items;
        component.ariaLabelI18n = 'MyAriaLabel';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const nav = element.querySelector('nav#myId.cmp-breadcrumb[aria-label="MyAriaLabel"][role="navigation"][itemscope=""]');
        expect(nav.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        const ol = nav.querySelector('ol.cmp-breadcrumb__list')

        items.forEach((breadcrumb, index) => {

            const li = ol.querySelector(`li.cmp-breadcrumb__item${breadcrumb.active ? '.cmp-breadcrumb__item--active' : ''}:nth-child(${index + 1})` );
            expect(li).toBeDefined();

            if(breadcrumb.active){
                expect(li.querySelector('span[itemProp="name"]').innerText).toEqual(breadcrumb.title);
                expect(li.querySelector('a.cmp-breadcrumb__item-link[href="' + breadcrumb.url +'"] span[itemProp="name"]')).toBeNull();
            }else{
                expect(li.querySelector('a.cmp-breadcrumb__item-link[href="' + breadcrumb.url +'"] span[itemProp="name"]').innerText).toEqual(breadcrumb.title);
            }

            expect(li.querySelector('meta[itemProp="position"][content="' + index + '"]')).toBeDefined();

            if(breadcrumb.routed){
                const linkDebugEl = fixture.debugElement.query(By.css(`li:nth-child(${index + 1}) a`));
                const routerLinkInstance = linkDebugEl.injector.get(RouterLinkWithHref);
                expect(routerLinkInstance['commands']).toEqual([breadcrumb.url]);
                expect(routerLinkInstance['href']).toEqual(breadcrumb.url);
            }

        });

    });


    it('render breadcrumbs routed', () => {
        isInEditorSpy.and.returnValue(false);
        component.id = 'myId';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };
        component.routed = true;
        component.items = items;
        component.ariaLabelI18n = 'MyAriaLabel';

        fixture.detectChanges();

        items.forEach((breadcrumb, index) => {

            if(!breadcrumb.active){
                const linkDebugEl = fixture.debugElement.query(By.css(`li:nth-child(${index + 1}) a`));
                const routerLinkInstance = linkDebugEl.injector.get(RouterLinkWithHref);
                expect(routerLinkInstance['commands']).toEqual([breadcrumb.url]);
                expect(routerLinkInstance['href']).toEqual(breadcrumb.url);
            }
        });

    });



});

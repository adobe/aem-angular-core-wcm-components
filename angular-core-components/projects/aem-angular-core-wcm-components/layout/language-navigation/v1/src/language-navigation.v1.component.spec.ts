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


import {LanguageNavigationV1Component, LanguageNavigationV1Item} from './language-navigation.v1.component';
import {
    AemAngularCoreWcmComponentsCore,
    DefaultNavigationUtilityServiceImpl,
    MetaUtils,
} from "@adobe/aem-core-components-angular-base/core";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterLinkWithHref} from "@angular/router";
import {By} from "@angular/platform-browser";
import {items} from "./language-navigation.v1.component.spec.mocks";

describe('LanguageNavigationV1Component', () => {

    let component: LanguageNavigationV1Component;
    let fixture: ComponentFixture<LanguageNavigationV1Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                LanguageNavigationV1Component
            ],
            providers: [DefaultNavigationUtilityServiceImpl],
            imports: [
                AemAngularCoreWcmComponentsCore,
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [LanguageNavigationV1Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(LanguageNavigationV1Component);

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
        component.routed = true;
        component.accessibilityLabel = 'MyAriaLabel';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const nav = element.querySelector('nav#myId.cmp-languagenavigation[aria-label="MyAriaLabel"][role="navigation"][itemscope=""]');
        expect(nav.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');


        const ul = nav.querySelector('ul.cmp-languagenavigation__group');
        const checkNavigationItem = (item:LanguageNavigationV1Item, index:number, depthSelector:string) => {

            depthSelector += ' ul.cmp-languagenavigation__group ';

            const liSelector = (depthSelector + 'li.' + component.getItemCssClass(item).split(' ').join('.')) + `:nth-child(${index + 1})`;

            const li = ul.querySelector(liSelector);

            expect(li).toBeDefined();

            const isCurrent = item.active ? 'true' : 'false';

            if(item.level !== 0){
                expect(li.querySelector(`a.cmp-languagenavigation__item-link[title="${item.title}"][href="${item.url}"][lang="${item.language}"][rel="alternate"][hrefLang="${item.language}"][aria-current="${isCurrent}"]`).innerText).toEqual(item.title)
            }else{
                expect(li.querySelector(`span.cmp-languagenavigation__item-title[lang="${item.language}"]`).innerText).toEqual(item.title);
            }

            if(!!item.children && item.children.length > 0){
                item.children.forEach((child, childIndex) => {
                    checkNavigationItem(child, childIndex, liSelector);
                });
            }
        };

        items.forEach((child, childIndex) => {
            checkNavigationItem(child, childIndex, '');
        });

        //it should never route any language navigation item (we need a refresh on navigate)
        const linkDebugEls = fixture.debugElement.queryAll(By.css('a'));
        linkDebugEls.forEach((linkDebugEl) => {
            expect(() => linkDebugEl.injector.get(RouterLinkWithHref)).toThrowError();
        });

    });



});

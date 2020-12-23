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


import {AccordionV1Component} from './accordion.v1.component';
import {Utils,AEMComponentDirective, Constants,AEMAllowedComponentsContainerComponent,AEMModelProviderComponent} from "@adobe/aem-angular-editable-components";

import {Component1} from "../../../test/test-comp1.component";
import {Component2} from "../../../test/test-comp2.component";
import {Component3} from "../../../test/test-comp3.component";

import {ModelManager} from '@adobe/aem-spa-page-model-manager';

describe('AccordionV1', () => {

    const TEST_COMPONENT_TITLE = 'test container title';
    const LAYOUT = require('../../../test/data/accordion.json');

    let component: AccordionV1Component;
    let fixture: ComponentFixture<AccordionV1Component>;

    let isInEditorSpy;

    beforeEach(() => {

        spyOn(ModelManager, 'addListener').and.returnValue(undefined);
        isInEditorSpy = spyOn(Utils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                AccordionV1Component,
                AEMComponentDirective,
                AEMAllowedComponentsContainerComponent,
                AEMModelProviderComponent,
                Component1,
                Component2,
                Component3,]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [AccordionV1Component, Component1, Component2, Component3]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(AccordionV1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create placeholder', () => {
        isInEditorSpy.and.returnValue(true);
        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.classNames = LAYOUT.classNames;

        fixture.detectChanges();
        let element = fixture.debugElement.nativeElement;
        expect(element.querySelector('.new.section')).toBeDefined();

    });

    it('should create the allowed components with the default title and no allowed component', () => {
        isInEditorSpy.and.returnValue(true);
        component.title = TEST_COMPONENT_TITLE;
        component.allowedComponents = {
            applicable: true,
            components: []
        };

        fixture.detectChanges();

        const element = fixture.nativeElement.firstElementChild;
        expect(element.querySelectorAll('.aem-AllowedComponent--component.cq-placeholder.placeholder').length)
            .toEqual(0);
    });

    it('should create the allowed components with a custom title and allowed components', () => {
        isInEditorSpy.and.returnValue(true);
        component.title = TEST_COMPONENT_TITLE;
        component.allowedComponents = {
            applicable: true,
            components: [{
                path: 'test/components/component1',
                title: 'Test component title 1'
            },
                {
                    path: 'test/components/component2',
                    title: 'Test component title 2'
                }]
        };

        fixture.detectChanges();

        const element = fixture.nativeElement.firstElementChild;
        expect(element.querySelectorAll('.aem-AllowedComponent--component.cq-placeholder.placeholder').length)
            .toEqual(2);
    });

    it('should render the cssClass specified in the properties', () => {
        component.title = TEST_COMPONENT_TITLE;
        component.allowedComponents = {
            applicable: true,
            components: [{
                path: 'test/components/component1',
                title: 'Test component title 1'
            },
                {
                    path: 'test/components/component2',
                    title: 'Test component title 2'
                }]
        };

        fixture.detectChanges();

        const element = fixture.nativeElement;

        const cssClasses = component.getHostClassNames();
        console.log(cssClasses);
        expect(element.getAttributeNode("class").value).toBe("cmp-accordion");
        expect(cssClasses).toBe("cmp-accordion");
    });

    it('should NOT create the allowed components if not in the editor', () => {
        component.title = TEST_COMPONENT_TITLE;
        component.allowedComponents = {
            applicable: true,
            components: [{
                path: 'test/components/component1',
                title: 'Test component title 1'
            },
                {
                    path: 'test/components/component2',
                    title: 'Test component title 2'
                }]
        };

        fixture.detectChanges();

        const element = fixture.nativeElement;
        //expect(element.querySelector('.' + ALLOWED_COMPONENT_TITLE_CLASS_NAMES)).toBeNull();

        //expect(element.classList.contains(ALLOWED_PLACEHOLDER_CLASS_NAMES)).toBeFalsy();

        expect(element.querySelectorAll('.aem-AllowedComponent--component.cq-placeholder.placeholder').length)
            .toEqual(0);
        expect(element.querySelector('div[data-cq-data-path="root/*"][class="new section aem-Parsys-newComponent"]'))
            .toBeDefined();
        expect(element.querySelector('div[data-cq-data-path="root/parsys/*"][class="new section aem-Parsys-newComponent"]'))
            .toBeDefined();
    });




    it('should open multiple when clicked upon', () => {
        component.title = TEST_COMPONENT_TITLE;
        component.allowedComponents = {
            applicable: true,
            components: [{
                path: 'test/components/component1',
                title: 'Test component title 1'
            },
                {
                    path: 'test/components/component2',
                    title: 'Test component title 2'
                }]
        };
        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.classNames = LAYOUT.classNames;

        fixture.detectChanges();

        const element = fixture.debugElement.nativeElement;

        const button = element.querySelector('.cmp-accordion__item:first-child .cmp-accordion__button');
        const button2 = element.querySelector('.cmp-accordion__item:last-child .cmp-accordion__button');

        expect(button).toBeDefined();
        expect(button2).toBeDefined();

        button.click();
        button2.click();
        fixture.detectChanges();

        const tab1 = element.querySelector('.cmp-accordion__item:first-child');
        const buttonClicked = tab1.querySelector('.cmp-accordion__button');
        const tab1Content = tab1.querySelector('.cmp-accordion__panel');
        expect(tab1Content).toBeDefined();
        expect(buttonClicked.getAttributeNode("class").value).toBe("cmp-accordion__button cmp-accordion__button--expanded");

        const tab2 = element.querySelector('.cmp-accordion__item:last-child');
        const button2Clicked = tab2.querySelector('.cmp-accordion__button');
        const tab2Content = tab2.querySelector('.cmp-accordion__panel');
        expect(tab2Content).toBeDefined();
        expect(button2Clicked.getAttributeNode("class").value).toBe("cmp-accordion__button cmp-accordion__button--expanded");

    });


    it('should open only 1 item at a time when clicked upon', () => {
        component.title = TEST_COMPONENT_TITLE;
        component.allowedComponents = {
            applicable: true,
            components: [{
                path: 'test/components/component1',
                title: 'Test component title 1'
            },
                {
                    path: 'test/components/component2',
                    title: 'Test component title 2'
                }]
        };
        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.classNames = LAYOUT.classNames;
        component.singleExpansion = true;

        fixture.detectChanges();

        const element = fixture.debugElement.nativeElement;

        const button = element.querySelector('.cmp-accordion__item:first-child .cmp-accordion__button');
        const button2 = element.querySelector('.cmp-accordion__item:last-child .cmp-accordion__button');

        expect(button).toBeDefined();
        expect(button2).toBeDefined();

        button.click();
        fixture.detectChanges();
        button2.click();
        fixture.detectChanges();

        const tab1 = element.querySelector('.cmp-accordion__item:first-child');
        const buttonClicked = tab1.querySelector('.cmp-accordion__button');
        expect(buttonClicked.getAttributeNode("class").value).toBe("cmp-accordion__button");

        const tab2 = element.querySelector('.cmp-accordion__item:last-child');
        const button2Clicked = tab2.querySelector('.cmp-accordion__button');
        expect(button2Clicked.getAttributeNode("class").value).toBe("cmp-accordion__button cmp-accordion__button--expanded");

    });
});
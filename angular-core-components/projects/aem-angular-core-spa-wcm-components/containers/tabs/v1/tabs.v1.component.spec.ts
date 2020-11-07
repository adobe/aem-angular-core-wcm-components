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

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';


import {TabsV1Component} from './tabs.v1.component';
import {Utils,AEMComponentDirective, Constants,AEMAllowedComponentsContainerComponent,AEMModelProviderComponent} from "@adobe/aem-angular-editable-components";

import {Component1} from "../../../test/test-comp1.component";
import {Component2} from "../../../test/test-comp2.component";
import {Component3} from "../../../test/test-comp3.component";

import {ModelManager} from '@adobe/aem-spa-page-model-manager';

describe('TabsV1', () => {

    const TEST_COMPONENT_TITLE = 'test container title';
    const LAYOUT = require('../../../test/data/tabs.json');

    let component: TabsV1Component;
    let fixture: ComponentFixture<TabsV1Component>;

    let isInEditorSpy;

    beforeEach(() => {

        spyOn(ModelManager, 'addListener').and.returnValue(undefined);
        isInEditorSpy = spyOn(Utils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                TabsV1Component,
                AEMComponentDirective,
                AEMAllowedComponentsContainerComponent,
                AEMModelProviderComponent,
                Component1,
                Component2,
                Component3,]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [TabsV1Component, Component1, Component2, Component3]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(TabsV1Component);
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
        component.baseCssClass = "cmp-custom-tabs";

        fixture.detectChanges();

        const element = fixture.nativeElement;

        const cssClasses = component.getHostClassNames();
        console.log(cssClasses);
        expect(element.getAttributeNode("class").value).toBe("aem-tabs");
        expect(element.querySelectorAll(".cmp-custom-tabs").length).toEqual(1);
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




});

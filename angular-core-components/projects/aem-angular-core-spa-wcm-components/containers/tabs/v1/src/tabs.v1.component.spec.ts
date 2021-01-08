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
import {
    Utils,
    AEMComponentDirective,
    Constants,
    AEMAllowedComponentsContainerComponent,
    AEMModelProviderComponent,
    MapTo, AEMResponsiveGridComponent
} from "@adobe/aem-angular-editable-components";

import {Component1} from "../../../../test/test-comp1.component";
import {Component2} from "../../../../test/test-comp2.component";
import {Component3} from "../../../../test/test-comp3.component";

import {ModelManager} from '@adobe/aem-spa-page-model-manager';

describe('TabsV1', () => {

    const TEST_COMPONENT_TITLE = 'test container title';
    const LAYOUT = require('../../../../test/data/tabs.json');

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
                Component3
            ]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [TabsV1Component, Component1, Component2, Component3]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(TabsV1Component);
        component = fixture.componentInstance;

        MapTo("app/components/comp1")(Component1);
        MapTo("app/components/comp2")(Component2);
        MapTo("app/components/comp3")(Component3);
        MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);
        
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
        expect(element.getAttributeNode("class").value).toContain("cmp-custom-tabs");
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

        expect(element.querySelectorAll('.aem-AllowedComponent--component.cq-placeholder.placeholder').length)
            .toEqual(0);
        expect(element.querySelector('div[data-cq-data-path="root/*"][class="new section aem-Parsys-newComponent"]'))
            .toBeDefined();
        expect(element.querySelector('div[data-cq-data-path="root/parsys/*"][class="new section aem-Parsys-newComponent"]'))
            .toBeDefined();
    });

    const getTabDisplay = (dataPath:string) => {
        return fixture.debugElement.nativeElement.querySelector("div[data-cq-data-path='" + dataPath + "']").attributeStyleMap.get("display").value;
    };

    const clickTab = (index:number) => {
        fixture.debugElement.nativeElement.querySelector('.cmp-tabs__tablist li:nth-child(' + index + ')').click();
        fixture.detectChanges();
    };

    it('should navigate tabs if we click', async() => {
        component.title = TEST_COMPONENT_TITLE;

        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.classNames = LAYOUT.classNames;

        component.ngOnInit();

        fixture.detectChanges();

        const element = fixture.debugElement.nativeElement;


        const tabList = element.querySelector('.cmp-tabs__tablist');
        expect(tabList)
            .toBeDefined();

        const tabElements = tabList.querySelectorAll("li");
        expect(tabElements.length).toBe(LAYOUT[Constants.ITEMS_ORDER_PROP].length);

        expect(getTabDisplay('component1')).toEqual('block');

        clickTab(4);

        expect(getTabDisplay('component1')).toEqual('none');

        clickTab(2);

        expect(getTabDisplay('component3')).toEqual('block');

        expect(component.activeTabItemDataPath).toEqual('component3');
        expect(component.activeTabItemName).toEqual('component3');
        expect(component.isActiveItemNameSet).toBeTrue();
    });


    it('should initiate with the tab from the properties', async() => {
        component.title = TEST_COMPONENT_TITLE;

        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.classNames = LAYOUT.classNames;
        component.activeItem = 'component3';

        component.ngOnInit();

        fixture.detectChanges();

        expect(getTabDisplay('component3')).toEqual('block');

        expect(component.activeTabItemDataPath).toEqual('component3');
        expect(component.activeTabItemName).toEqual('component3');
        expect(component.isActiveItemNameSet).toBeTrue();
    });

    it('should render the expected DOM', async() => {
        component.title = TEST_COMPONENT_TITLE;

        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.classNames = LAYOUT.classNames;
        component.activeItem = 'component3';

        component.ngOnInit();

        fixture.detectChanges();

        const element = fixture.nativeElement;

        const tabList = element.querySelector(`ol.cmp-tabs__tablist[aria-multiselectable="false"][role="tablist"]`);
        expect(tabList).toBeDefined();

        expect(tabList.querySelectorAll(`li.cmp-tabs__tab`).length).toEqual(5);

        expect(tabList.querySelector("li.cmp-tabs__tab.cmp-tabs__tab--active:nth-child(2)")).toBeDefined();

        expect(tabList.querySelectorAll(`li.cmp-tabs__tab.cmp-tabs__tab--active`).length).toEqual(1);

        const components = element.querySelectorAll(`[data-cq-data-path]`);

        expect(components.length).toEqual(5);

        const getDisplay = (index:number) => components[index].attributeStyleMap.get("display").value;

        expect(getDisplay(0)).toEqual('none');
        expect(getDisplay(1)).toEqual('block');
        expect(getDisplay(2)).toEqual('none');
        expect(getDisplay(3)).toEqual('none');
        expect(getDisplay(4)).toEqual('none');

    });



});

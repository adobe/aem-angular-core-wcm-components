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


import {ContainerLayout, ContainerV1Component} from './container.v1.component';
import {
    AEMAllowedComponentsContainerComponent,
    AEMComponentDirective, AEMContainerComponent,
    AEMModelProviderComponent, AEMResponsiveGridComponent,
    Constants, MapTo,
    Utils
} from "@adobe/aem-angular-editable-components";

import {Component1} from "../../../../test/test-comp1.component";
import {Component2} from "../../../../test/test-comp2.component";
import {Component3} from "../../../../test/test-comp3.component";

import {ModelManager} from '@adobe/aem-spa-page-model-manager';

describe('ContainerV1', () => {

    const TEST_COMPONENT_TITLE = 'test container title';
    const LAYOUT = require('../../../../test/data/container.json');

    let component: ContainerV1Component;
    let fixture: ComponentFixture<ContainerV1Component>;

    let isInEditorSpy;


    beforeEach(() => {

        spyOn(ModelManager, 'addListener').and.returnValue(undefined);
        isInEditorSpy = spyOn(Utils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                ContainerV1Component,
                AEMResponsiveGridComponent,
                AEMContainerComponent,
                AEMComponentDirective,
                AEMAllowedComponentsContainerComponent,
                AEMModelProviderComponent,
                Component1,
                Component2,
                Component3,]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [ContainerV1Component, AEMContainerComponent,AEMAllowedComponentsContainerComponent, AEMResponsiveGridComponent,Component1, Component2, Component3]
            }
        }).compileComponents();

        MapTo("app/components/comp1")(Component1);
        MapTo("app/components/comp2")(Component2);
        MapTo("app/components/comp3")(Component3);
        MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);

        fixture = TestBed.createComponent(ContainerV1Component);
        component = fixture.componentInstance;
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

    it('should render the cssClass specified in the properties along with items, with a red background color', () => {
        component.title = TEST_COMPONENT_TITLE;
        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.backgroundStyle = 'red';
        component.baseCssClass = "cmp-custom-container";

        fixture.detectChanges();

        const element = fixture.nativeElement;

        expect(element.getAttributeNode("class").value).toContain("cmp-custom-container");
    });


    it('should  render the grid if the layout is responsivegrid', () => {
        component.title = TEST_COMPONENT_TITLE;
        component.gridClassNames = LAYOUT['gridClassNames'];
        component.columnClassNames = LAYOUT['columnClassNames'];
        component.columnCount = LAYOUT['columnCount'];
        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.layout = ContainerLayout.RESPONSIVEGRID;
        component.baseCssClass = "cmp-custom-container";

        fixture.detectChanges();

        const element = fixture.nativeElement;

        expect(element.getAttributeNode("class").value).toContain("aem-Grid-root-responsivegrid");
        expect(element.querySelector('.aem-GridColumn-root-responsivegrid-component1 test-comp1')).toBeDefined();
        expect(element.querySelector('.aem-GridColumn-root-responsivegrid-component2 test-comp2')).toBeDefined();
        expect(element.querySelector('.aem-GridColumn-root-responsivegrid-component3 test-comp3')).toBeDefined();
        expect(element.querySelector('.aem-GridColumn-root-responsivegrid-component4 test-comp4')).toBeDefined();
        expect(element.querySelector('.aem-GridColumn-root-responsivegrid-component5 test-comp5')).toBeDefined();
    });

    it('should NOT render the grid if the layout is simple', () => {
        component.title = TEST_COMPONENT_TITLE;
        component.gridClassNames = LAYOUT['gridClassNames'];
        component.columnClassNames = LAYOUT['columnClassNames'];
        component.columnCount = LAYOUT['columnCount'];
        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.layout = ContainerLayout.SIMPLE;
        component.baseCssClass = "cmp-custom-container";

        fixture.detectChanges();

        const element = fixture.nativeElement;

        expect(element.getAttributeNode("class").value.indexOf(LAYOUT['gridClassNames'])).toBe(-1);
        expect(element.querySelector('.aem-GridColumn-root-responsivegrid-component1')).toBeNull();
        expect(element.querySelector('.aem-GridColumn-root-responsivegrid-component2')).toBeNull();
        expect(element.querySelector('.aem-GridColumn-root-responsivegrid-component3')).toBeNull();
        expect(element.querySelector('.aem-GridColumn-root-responsivegrid-component4')).toBeNull();
        expect(element.querySelector('.aem-GridColumn-root-responsivegrid-component5')).toBeNull();
    });

});

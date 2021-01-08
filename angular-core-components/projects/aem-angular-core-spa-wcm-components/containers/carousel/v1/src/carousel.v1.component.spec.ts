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

import {ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';


import {CarouselV1Component} from './carousel.v1.component';
import {Utils,AEMComponentDirective, Constants,AEMAllowedComponentsContainerComponent,AEMModelProviderComponent} from "@adobe/aem-angular-editable-components";

import {Component1} from "../../../../test/test-comp1.component";
import {Component2} from "../../../../test/test-comp2.component";
import {Component3} from "../../../../test/test-comp3.component";

import {ModelManager} from '@adobe/aem-spa-page-model-manager';

describe('CarouselV1', () => {

    const TEST_COMPONENT_TITLE = 'test container title';
    const LAYOUT = require('../../../../test/data/carousel.json');

    let component: CarouselV1Component;
    let fixture: ComponentFixture<CarouselV1Component>;

    let isInEditorSpy;

    beforeEach(() => {

        spyOn(ModelManager, 'addListener').and.returnValue(undefined);
        isInEditorSpy = spyOn(Utils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                CarouselV1Component,
                AEMComponentDirective,
                AEMAllowedComponentsContainerComponent,
                AEMModelProviderComponent,
                Component1,
                Component2,
                Component3,]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [CarouselV1Component, Component1, Component2, Component3]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(CarouselV1Component);
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
        component.baseCssClass = "cmp-custom-accordion";

        fixture.detectChanges();

        const element = fixture.nativeElement;

        expect(element.getAttributeNode("class").value).toContain("cmp-custom-accordion");
    });

    const clickNextOrPev = (direction:string) => {
        const element = fixture.nativeElement;
        element.querySelector('.cmp-carousel__action--' + direction).click();
        fixture.detectChanges();
    };

    it('should only render the first entry on load - handle on navigations clicks', () => {
        component.title = TEST_COMPONENT_TITLE;
        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.classNames = LAYOUT.classNames;
        component.id = "myID";
        fixture.detectChanges();

        const element = fixture.nativeElement;

        expect(element.querySelectorAll('.cmp-carousel__item--active').length)
            .toEqual(1);
        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-0");

        clickNextOrPev('next');

        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-1");

        clickNextOrPev('next');

        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-2");

        clickNextOrPev('next');

        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-3");

        clickNextOrPev('previous');

        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-2");

        clickNextOrPev('next');

        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-3");

        clickNextOrPev('next');

        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-4");

        clickNextOrPev('next');

        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-0");

        clickNextOrPev('previous');

        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-4");

    });

    it('should autoplay - also when hovering over', fakeAsync(() =>  {
        component.title = TEST_COMPONENT_TITLE;
        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.classNames = LAYOUT.classNames;
        component.id = "myID";
        component.autoplay = true;
        component.delay = 1000;

        fixture.detectChanges();

        const element = fixture.nativeElement;

        expect(element.querySelectorAll('.cmp-carousel__item--active').length)
            .toEqual(1);
        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-0");

        tick(1500);

        fixture.detectChanges();

        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-1");

        element.querySelector('.cmp-carousel__content').dispatchEvent(new MouseEvent('mouseover', {
            view: window,
            bubbles: true,
            cancelable: true
        }));

        tick(500);

        fixture.detectChanges();

        expect(element.querySelector('.cmp-carousel__item--active').getAttribute("id")).toEqual("myID-item-2");

        discardPeriodicTasks();
    }));

    it('render proper DOM',() => {

        const baseCssClass = 'myCustomCssClass';

        component.title = TEST_COMPONENT_TITLE;
        component.cqItems = LAYOUT[Constants.ITEMS_PROP];
        component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
        component.classNames = LAYOUT.classNames;
        component.id = "myID";
        component.autoplay = true;
        component.delay = 1000;
        component.baseCssClass = baseCssClass;

        fixture.detectChanges();

        const element = fixture.nativeElement;

        expect(element).toBeDefined();

        expect(element.querySelector(`.${baseCssClass}[role="group"][aria-roledescription="Carousel"]`)).toBeDefined();

        const contentElement = element.querySelector(`.${baseCssClass}[role="group"][aria-roledescription="Carousel"] .${baseCssClass}__content`);

        expect(contentElement).toBeDefined();

        const totalElements = LAYOUT[Constants.ITEMS_ORDER_PROP].length;

        const validateTabPanel = (index:number) => {
            expect(contentElement.querySelector(`div#${component.id}-item-${index}.${baseCssClass}__item[aria-label="Slide ${index + 1} of ${totalElements}"]`)).toBeDefined();
        };

        validateTabPanel(0);
        validateTabPanel(1);
        validateTabPanel(2);
        validateTabPanel(3);
        validateTabPanel(4);


    });

});

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


import {ButtonV1Component} from './button.v1.component';

import {RouterTestingModule} from "@angular/router/testing";
import {RouterLinkWithHref} from "@angular/router";
import {By} from "@angular/platform-browser";
import {AemAngularCoreWcmComponentsCore,MetaUtils} from "@adobe/aem-core-components-angular-base/core";


describe('ButtonV1Component', () => {

    let component: ButtonV1Component;
    let fixture: ComponentFixture<ButtonV1Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils,'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                ButtonV1Component
                ],
            imports: [
                AemAngularCoreWcmComponentsCore,
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [ButtonV1Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonV1Component);

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


    it('render proper DOM - text', () => {
        isInEditorSpy.and.returnValue(false);
        component.ariaLabel = 'myarialabel';
        component.icon = 'awesomeness';
        component.text = 'mytext';
        component.id = 'myId';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const button = element.querySelector('button#myId.cmp-button[data-cmp-data-layer][type="button"]');
        expect(button.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(button.querySelector("span.cmp-button__icon.cmp-button__icon--awesomeness")).toBeDefined();
        expect(button.querySelector("span.cmp-button__text").innerText).toEqual("mytext");

    });

    it('should establish a routed link', () => {

        component.link = '/expectedUrl';
        component.text = 'mytext';
        component.routed = true;

        fixture.detectChanges();

        const linkDebugEl = fixture.debugElement.query(By.css('a'));
        const routerLinkInstance = linkDebugEl.injector.get(RouterLinkWithHref);
        expect(routerLinkInstance['commands']).toEqual(['/expectedUrl']);
        expect(routerLinkInstance['href']).toEqual('/expectedUrl');
    });

    it('should NOT establish a routed link but a normal link', () => {

        component.link = '/expectedUrl';
        component.text = 'mytext';
        component.routed = false;
        component.id = 'myId';
        component.baseCssClass = 'cmp-my-button';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        expect(component.isEmpty).toBeFalse();

        fixture.detectChanges();

        const linkDebugEl = fixture.debugElement.query(By.css('a'));
        expect(() => linkDebugEl.injector.get(RouterLinkWithHref)).toThrowError();

        const element = fixture.nativeElement;

        const link = element.querySelector('a#myId.cmp-my-button[data-cmp-data-layer][href="/expectedUrl"]');
        expect(link.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(link.querySelector("span.cmp-my-button__icon.cmp-my-button__icon--awesomeness")).toBeDefined();
        expect(link.querySelector("span.cmp-my-button__text").innerText).toEqual("mytext");

        spyOn(component.clickRequest, 'emit');
        link.dispatchEvent(new Event('click'));
        expect(component.clickRequest.emit).toHaveBeenCalled();
    });



});

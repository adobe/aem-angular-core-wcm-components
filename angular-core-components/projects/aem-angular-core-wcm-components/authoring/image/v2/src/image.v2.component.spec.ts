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


import {ImageV2Component} from './image.v2.component';

import {AemAngularCoreWcmComponentsCore,MetaUtils} from "@adobe/aem-core-components-angular-base/core";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterLinkWithHref} from "@angular/router";
import {By} from "@angular/platform-browser";


describe('ImageV2Component', () => {

    let component: ImageV2Component;
    let fixture: ComponentFixture<ImageV2Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                ImageV2Component
            ],
            imports: [
                AemAngularCoreWcmComponentsCore,
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [ImageV2Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(ImageV2Component);

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


    it('render a image', () => {
        isInEditorSpy.and.returnValue(false);

        component.src = '/chuck/norris.jpg';
        component.alt = 'Chuck Norris';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };
        component.displayPopupTitle = true;
        component.title = 'He is the best!';

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-image');

        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(wrapper.querySelector('img.cmp-image__image[alt="Chuck Norris"][src="/chuck/norris.jpg"]')).toBeDefined();
        expect(wrapper.querySelector('a img.cmp-image__image')).toBeNull();

        expect(wrapper.querySelector('meta[itemprop="caption"][content="He is the best!"]')).toBeDefined();
        expect(wrapper.querySelector('a meta')).toBeNull();


    });


    it('render a image with a link and title', () => {
        isInEditorSpy.and.returnValue(false);

        component.src = '/chuck/norris.jpg';
        component.alt = 'Chuck Norris';
        component.link = '/my/custom/link.html';
        component.title = 'He is the best!';
        component.displayPopupTitle = true;

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-image');

        expect(wrapper.querySelector('a img.cmp-image__image[alt="Chuck Norris"][src="/chuck/norris.jpg"]')).toBeDefined();
        expect(wrapper.querySelector('a meta[itemprop="caption"][content="He is the best!"]')).toBeDefined();

    });


    it('render a image with a routed link and title', () => {
        isInEditorSpy.and.returnValue(false);

        component.routed = true;
        component.src = '/chuck/norris.jpg';
        component.alt = 'Chuck Norris';
        component.link = '/my/custom/link.html';
        component.title = 'He is the best!';
        component.displayPopupTitle = true;

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-image');

        expect(wrapper.querySelector('a img.cmp-image__image[alt="Chuck Norris"][src="/chuck/norris.jpg"]')).toBeDefined();
        expect(wrapper.querySelector('a meta[itemprop="caption"][content="He is the best!"]')).toBeDefined();


        const linkDebugEl = fixture.debugElement.query(By.css('a img.cmp-image__image'));
        const routerLinkInstance = linkDebugEl.injector.get(RouterLinkWithHref);
        expect(routerLinkInstance['commands']).toEqual(['/my/custom/link.html']);
        expect(routerLinkInstance['href']).toEqual('/my/custom/link.html');
    });


});

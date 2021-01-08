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


import {TextV2Component} from './text.v2.component';
import {AemAngularCoreWcmComponentsCore,MetaUtils} from "@adobe/aem-core-components-angular-base/core";
import {RouterTestingModule} from "@angular/router/testing";


describe('TextV2Component', () => {

    let component: TextV2Component;
    let fixture: ComponentFixture<TextV2Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                TextV2Component
            ],
            imports: [
                AemAngularCoreWcmComponentsCore,
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [TextV2Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(TextV2Component);

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


    it('renders text', () => {
        isInEditorSpy.and.returnValue(false);

        component.text = 'Hi there';
        component.richText = false;
        component.id = 'rip-feikevisser';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-text#rip-feikevisser');

        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(wrapper.querySelector('p.cmp-text__paragraph').innerText).toEqual('Hi there');

        component.baseCssClass = 'custom-bem';


        fixture.detectChanges();

        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(wrapper.querySelector('p.custom-bem__paragraph').innerText).toEqual('Hi there');
        
    });


    it('renders rich text', () => {
        isInEditorSpy.and.returnValue(false);

        component.text = '<p>I got some</p><p>richText going!</p>';
        component.richText = true;
        component.id = 'rip-feikevisser';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('div.cmp-text#rip-feikevisser');

        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(wrapper.querySelectorAll('p').length).toEqual(2);
        expect(wrapper.querySelector('p:nth-child(1)').innerText).toEqual('I got some');
        expect(wrapper.querySelector('p:nth-child(2)').innerText).toEqual('richText going!');
    });



});

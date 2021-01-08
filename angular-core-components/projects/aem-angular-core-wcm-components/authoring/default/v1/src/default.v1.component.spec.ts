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


import {DefaultV1Component} from './default.v1.component';

import {AemAngularCoreWcmComponentsCore,MetaUtils} from "@adobe/aem-core-components-angular-base/core";

describe('ButtonV1Component', () => {

    let component: DefaultV1Component;
    let fixture: ComponentFixture<DefaultV1Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            imports: [AemAngularCoreWcmComponentsCore],
            declarations: [
                DefaultV1Component
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [DefaultV1Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(DefaultV1Component);

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


    it('render provided HTML', () => {
        isInEditorSpy.and.returnValue(false);

        component.aHtml = `<div id="test">hi there!</div>`;
        component.id = 'myId';
        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        fixture.detectChanges();
        const element = fixture.nativeElement;

        const wrapper = element.querySelector('.cmp-default-wrapper');
        expect(wrapper.getAttribute("data-cmp-data-layer")).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

        expect(wrapper.querySelector("#test").innerText).toEqual('hi there!');


    });


});

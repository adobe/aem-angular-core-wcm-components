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


import {SeparatorV1Component} from './separator.v1.component';
import {
    AEMAllowedComponentsContainerComponent,
    AEMComponentDirective,
    AEMModelProviderComponent,
    Utils
} from "@adobe/aem-angular-editable-components";
import {AemAngularCoreWcmComponentsCore, EditPlaceholderComponent} from "@adobe/aem-core-components-angular-base/core";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterLinkWithHref} from "@angular/router";
import {By} from "@angular/platform-browser";


describe('SeparatorV1Component', () => {

    let component: SeparatorV1Component;
    let fixture: ComponentFixture<SeparatorV1Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(Utils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                SeparatorV1Component,
                AEMComponentDirective,
                AEMAllowedComponentsContainerComponent,
                AEMModelProviderComponent,
            ],
            imports: [
                AemAngularCoreWcmComponentsCore,
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [SeparatorV1Component]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(SeparatorV1Component);

        component = fixture.componentInstance;
        fixture.detectChanges();

    });



    it('render a separator', () => {
        isInEditorSpy.and.returnValue(false);

        const element = fixture.nativeElement;

        expect( element.querySelector('div.cmp-separator') ).toBeDefined();


    });

    it('render a separator with custom bem class', () => {
        isInEditorSpy.and.returnValue(false);

        component.baseCssClass = 'custombem';
        fixture.detectChanges();
        const element = fixture.nativeElement;

        expect( element.querySelector('div.custombem') ).toBeDefined();


    });


});

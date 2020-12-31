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
import {
    AEMAllowedComponentsContainerComponent,
    AEMComponentDirective,
    AEMModelProviderComponent,
    Utils
} from "@adobe/aem-angular-editable-components";
import {EditPlaceholderComponent} from "../../../../core/editplaceholder/editplaceholder.component";

describe('ButtonV1Component', () => {

    let component: ButtonV1Component;
    let fixture: ComponentFixture<ButtonV1Component>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(Utils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                ButtonV1Component,
                AEMComponentDirective,
                EditPlaceholderComponent,
                AEMAllowedComponentsContainerComponent,
                AEMModelProviderComponent,
                ]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [ButtonV1Component,EditPlaceholderComponent]
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
        expect(element.querySelector('core-placeholder .cq-placeholder')).toBeNull();
    });


    it('render proper DOM - text', () => {
        isInEditorSpy.and.returnValue(false);
        component.ariaLabel = 'myarialabel';
        component.icon = 'awesomeness';
        component.text = 'mytext';

        fixture.detectChanges();
        const element = fixture.nativeElement;

    });


});

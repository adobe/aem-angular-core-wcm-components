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


import {EditPlaceholderComponent} from './editplaceholder.component';

import {RouterTestingModule} from "@angular/router/testing";
import {MetaUtils} from "../utils/MetaUtils";

describe('EditPlaceholderComponent', () => {

    let component: EditPlaceholderComponent;
    let fixture: ComponentFixture<EditPlaceholderComponent>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                EditPlaceholderComponent
            ],
            imports: [
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [EditPlaceholderComponent]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(EditPlaceholderComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();

    });



    it('render a editplaceholder', () => {
        isInEditorSpy.and.returnValue(false);

        const element = fixture.nativeElement;

        expect( element.querySelector('div.cq-placeholder') ).toBeDefined();
        expect( element.querySelector('div.cq-placeholder').innerText ).toEqual('Please configure the component');




    });

    it('render a editplaceholder with an extra class', () => {
        isInEditorSpy.and.returnValue(false);

        component.classAppend = 'mycustomclass';
        component.componentTitle = 'My Empty Component';
        component.emptyTextAppend = 'Custom Empty text';
        fixture.detectChanges();
        const element = fixture.nativeElement;

        expect( element.querySelector('div.cq-placeholder.mycustomclass') ).toBeDefined();
        expect( element.querySelector('div.cq-placeholder.mycustomclass').innerText ).toEqual('My Empty Component - Custom Empty text');

        expect( element.querySelector('div.cq-placeholder.mycustomclass').innerText ).toEqual('My Empty Component - Custom Empty text');


    });


});

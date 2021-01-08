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


import {AbstractRoutedCoreComponent} from './AbstractRoutedCoreComponent';

import {RouterTestingModule} from "@angular/router/testing";
import {Component, Input} from "@angular/core";
import {RoutedCoreComponentModel} from "./model/RoutedCoreComponentModel";
import {MetaUtils} from "./utils/MetaUtils";

@Component({
    selector: 'test-copmonent',
    template: ''
})
class TestComponent extends AbstractRoutedCoreComponent{

    @Input() empty:boolean;

    get isEmpty(): boolean {
        return this.empty;
    }
}

const routedItem:RoutedCoreComponentModel = {
    routed: true
};
const nonRoutedItem:RoutedCoreComponentModel = {
    routed: false
};

describe('AbstractRoutedCoreComponent', () => {

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    let isInEditorSpy;

    beforeEach(() => {

        isInEditorSpy = spyOn(MetaUtils, 'isInEditor').and.returnValue(false);

        TestBed.configureTestingModule({
            declarations: [
                TestComponent
            ],
            imports: [
                RouterTestingModule.withRoutes([]),
            ],
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [TestComponent]
            }
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);

        component = fixture.componentInstance;
        fixture.detectChanges();


    });

    it('should show a editplaceholder', () => {

        component.empty = true;
        isInEditorSpy.and.returnValue(true);

        expect(component.shouldShowPlaceHolder).toBeTrue();

    });

    it('should NOT show a editplaceholder', () => {

        component.empty = true;
        isInEditorSpy.and.returnValue(false);

        expect(component.shouldShowPlaceHolder).toBeFalse();

    });

    it('should NOT show a editplaceholder', () => {

        component.empty = false;
        isInEditorSpy.and.returnValue(true);

        expect(component.shouldShowPlaceHolder).toBeFalse();

    });

    it('should return a good datalayer string', () => {

        component.dataLayer = {
            "testaccordion": {
                "test1": "test",
                "test2": "test"
            }
        };

        expect(component.dataLayerString).toEqual('{"testaccordion":{"test1":"test","test2":"test"}}');

    });

    it('should route the item in all cases even if the item is false', () => {

        component.routed = true;
        fixture.detectChanges();

        const isRouted = component.isItemRouted(nonRoutedItem);
        expect(isRouted).toBeTrue();

    });

    it('should route the item in all cases even if the item is true', () => {

        component.routed = false;
        fixture.detectChanges();
        const isRouted = component.isItemRouted(routedItem);
        expect(isRouted).toBeTrue();

    });

    it('should not the route', () => {

        component.routed = false;

        const isRouted = component.isItemRouted(nonRoutedItem);
        expect(isRouted).toBeFalse();

    });

});

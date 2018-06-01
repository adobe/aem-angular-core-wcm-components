/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { AEMContainerComponent } from '../aem-container/aem-container.component';
import { AEMComponentDirective } from '../aem-component.directive';
import { AEMResponsiveGridComponent } from "./aem-responsivegrid.component";
import { Component1 } from "../../test/test-comp1.component";
import { Component2 } from "../../test/test-comp2.component";
import { Component3 } from "../../test/test-comp3.component";
import { Constants } from "../constants";

describe('AEMResponsivegrid', () => {
  let component: AEMResponsiveGridComponent;
  let fixture: ComponentFixture<AEMResponsiveGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AEMContainerComponent, AEMComponentDirective,
      Component1,
      Component2,
      Component3,
      AEMResponsiveGridComponent ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [Component1, Component2, Component3, AEMResponsiveGridComponent]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AEMResponsiveGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create placeholder', () => {
    let layout = require("../../test/data/layout.json");
    component.data = layout;
    fixture.detectChanges();
    let element = fixture.nativeElement;

    element = element.firstElementChild.firstElementChild;
    expect(element.querySelector('div[data-cq-data-path="root/*"][class="new section aem-Grid-newComponent"]')).toBeDefined();

    element = element.firstElementChild.firstElementChild;
    expect(element.querySelector('div[data-cq-data-path="root/responsivegrid/*"][class="new section aem-Grid-newComponent"]')).toBeDefined();
  });
});

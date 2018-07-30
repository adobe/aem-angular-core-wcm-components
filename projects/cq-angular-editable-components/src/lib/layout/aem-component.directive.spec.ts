/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2018 Adobe Systems Incorporated
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Constants } from "./constants";
import { AEMComponentDirective } from './aem-component.directive';
import { Component, Input } from '@angular/core';
import { MapTo } from "./component-mapping";

@Component({
  selector: 'test-component',
  template: `<ng-container [aemComponent] [cqModel]='data'></ng-container>`
})
class AEMDirectiveTestComponent {
  @Input() data;
}

@Component({
  selector: "directive-component",
  host: {
      '[attr.attr1]':'attr1',
      '[attr.attr2]':'attr2'
  },
  template: `<div></div>`
})
class DirectiveComponent {
  @Input() attr1;
  @Input() attr2;
}
MapTo("directive/comp")(DirectiveComponent);

describe('AEMComponentDirective', () => {
  let component: AEMDirectiveTestComponent;
  let fixture: ComponentFixture<AEMDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AEMDirectiveTestComponent, DirectiveComponent, AEMComponentDirective ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [DirectiveComponent]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AEMDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it("correctly passes the inputs", () => {
    let componentData =  {
      "attr1": "Some value",
      "attr2": "Another value",
      ":type": "directive/comp"
    };

    component.data = componentData;
    fixture.detectChanges();
    let element = fixture.nativeElement;
    let dynamicElement = element.firstElementChild;
    expect(dynamicElement.getAttribute("attr1")).toEqual(componentData["attr1"]);
    expect(dynamicElement.getAttribute("attr2")).toEqual(componentData["attr2"]);
  });

  it("correctly updates the inputs", () => {
    let componentData =  {
      "attr1": "Some value",
      "attr2": "Another value",
      ":type": "directive/comp"
    };

    component.data = componentData;
    fixture.detectChanges();
    let element = fixture.nativeElement;
    let dynamicElement = element.firstElementChild;

    componentData.attr1 = "Changed value";
    fixture.detectChanges();
    expect(dynamicElement.getAttribute("attr1")).toEqual(componentData["attr1"]);
    expect(dynamicElement.getAttribute("attr2")).toEqual(componentData["attr2"]);
    componentData.attr1 = "Changed value 2";
    componentData.attr2 = "Changed value";
    fixture.detectChanges();
    expect(dynamicElement.getAttribute("attr1")).toEqual(componentData["attr1"]);
    expect(dynamicElement.getAttribute("attr2")).toEqual(componentData["attr2"]);
  });
});
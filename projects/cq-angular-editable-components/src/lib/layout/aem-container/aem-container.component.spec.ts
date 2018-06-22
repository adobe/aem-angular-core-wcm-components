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

import { AEMContainerComponent } from './aem-container.component';
import { AEMComponentDirective } from '../aem-component.directive';
import { AEMResponsiveGridComponent } from "../aem-responsivegrid/aem-responsivegrid.component";
import { Component1 } from "../../test/test-comp1.component";
import { Component2 } from "../../test/test-comp2.component";
import { Component3 } from "../../test/test-comp3.component";
import { Constants } from "../constants";

import '../../test/mapping';

describe('AEMContainerComponent', () => {
  let component: AEMContainerComponent;
  let fixture: ComponentFixture<AEMContainerComponent>;

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
    fixture = TestBed.createComponent(AEMContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let checkComponent = function(element, elementName, dataPath, cssClass, content?) {
    expect(element.matches(`${elementName}[data-cq-data-path="${dataPath}"][class="${cssClass}"]`)).toBeTruthy();
    if (content) {
      expect(element.getAttribute('data-title')).toEqual(content);
    }
    return element;
  }

  it('generates the correct layout', () => {
    let layout = require("../../test/data/layout.json");
    component.cqModel = layout;
    fixture.detectChanges();
    let element = fixture.nativeElement;
    element = checkComponent(element.firstElementChild,
      "aem-responsivegrid", "root", "aem-container");

    element = checkComponent(element.firstElementChild.firstElementChild, "aem-responsivegrid",
      "root/responsivegrid", "aem-container aem-GridColumn/root/responsivegrid");

    element = checkComponent(element.firstElementChild.firstElementChild, "test-comp1",
      "root/responsivegrid/component1",
      "aem-GridColumn/root/responsivegrid/component1", "Component1");

    element = checkComponent(element.nextElementSibling, "test-comp3",
      "root/responsivegrid/component3",
      "aem-GridColumn/root/responsivegrid/component3", "Component3");

    element = checkComponent(element.nextElementSibling, "test-comp1",
      "root/responsivegrid/component5",
      "aem-GridColumn/root/responsivegrid/component5", "Component5");

    element = checkComponent(element.nextElementSibling, "test-comp2",
      "root/responsivegrid/component2",
      "aem-GridColumn/root/responsivegrid/component2", "Component2");

    element = checkComponent(element.nextElementSibling, "test-comp2",
      "root/responsivegrid/component4",
      "aem-GridColumn/root/responsivegrid/component4", "Component4");
    expect(component).toBeTruthy();
  });

  it("updates the title", () => {
    let layout = require("../../test/data/layout.json");
    component.cqModel = layout;
    fixture.detectChanges();
    let element = fixture.nativeElement.querySelector('test-comp1[data-cq-data-path="root/responsivegrid/component1"]');
    expect(element).toBeDefined();
    expect(element.getAttribute("data-title")).toBe("Component1");
    let component1 = layout[Constants.ITEMS_PROP]["root"][Constants.ITEMS_PROP]["responsivegrid"][Constants.ITEMS_PROP]["component1"];

    let changedTitle = "Changed Title";
    component1.title = changedTitle;
    fixture.detectChanges();
    expect(element.getAttribute("data-title")).toBe(changedTitle);

    changedTitle = "Some other one"
    component1.title = changedTitle;
    fixture.detectChanges();
    expect(element.getAttribute("data-title")).toBe(changedTitle);
  })
});

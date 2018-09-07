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

import { AEMContainerComponent } from '../aem-container/aem-container.component';
import { AEMComponentDirective } from '../aem-component.directive';
import { AEMModelProviderComponent } from '../aem-model-provider/aem-model-provider.component';
import { ModelManager, ModelStore } from "@adobe/cq-spa-page-model-manager";
import { AEMResponsiveGridComponent } from "./aem-responsivegrid.component";
import { Component1 } from "../../test/test-comp1.component";
import { Component2 } from "../../test/test-comp2.component";
import { Component3 } from "../../test/test-comp3.component";
import { Constants } from "../constants";

describe('AEMResponsivegrid', () => {
  let component: AEMResponsiveGridComponent;
  let fixture: ComponentFixture<AEMResponsiveGridComponent>;

  beforeEach(async(() => {
    let modelStore = new ModelStore('rootPath', require("../../test/data/layout.json") );
    ModelManager.initialize({ path: 'rootPath', modelStore });
    TestBed.configureTestingModule({
      declarations: [ AEMContainerComponent, AEMComponentDirective,
      AEMModelProviderComponent,
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
    component.cqItems = layout[Constants.ITEMS_PROP];
    component.cqItemsOrder = layout[Constants.ITEMS_ORDER_PROP];
    component.gridClassNames = layout.gridClassNames;
    component.columnClassNames = layout.columnClassNames;
    component.classNames = layout.classNames;

    fixture.detectChanges();
    let element = fixture.nativeElement;

    element = element.firstElementChild.firstElementChild;
    expect(element.querySelector('div[data-cq-data-path="root/*"][class="new section aem-Grid-newComponent"]')).toBeDefined();

    element = element.firstElementChild.firstElementChild;
    expect(element.querySelector('div[data-cq-data-path="root/responsivegrid/*"][class="new section aem-Grid-newComponent"]')).toBeDefined();
  });
});

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

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

import {AEMContainerComponent} from '../aem-container/aem-container.component';
import {AEMComponentDirective} from '../aem-component.directive';
import {AEMModelProviderComponent} from '../aem-model-provider/aem-model-provider.component';
import {ModelManager} from '@adobe/cq-spa-page-model-manager';
import {AEMResponsiveGridComponent} from './aem-responsivegrid.component';
import {Component1} from '../../test/test-comp1.component';
import {Component2} from '../../test/test-comp2.component';
import {Component3} from '../../test/test-comp3.component';
import {Constants} from '../constants';
import {
  AEMAllowedComponentsContainerComponent, ALLOWED_COMPONENT_TITLE_CLASS_NAMES,
  ALLOWED_PLACEHOLDER_CLASS_NAMES
} from '../aem-allowed-components-container/aem-allowed-components-container.component';
import {Utils} from '../utils';

describe('AEMResponsiveGrid', () => {

  const TEST_COMPONENT_TITLE = 'test container title';
  const LAYOUT = require('../../test/data/layout.json');

  let component: AEMResponsiveGridComponent;
  let fixture: ComponentFixture<AEMResponsiveGridComponent>;

  let isInEditorSpy;

  beforeEach(() => {
    spyOn(ModelManager, 'addListener').and.returnValue(undefined);
    isInEditorSpy = spyOn(Utils, 'isInEditor').and.returnValue(false);

    TestBed.configureTestingModule({
      declarations: [ AEMContainerComponent,
        AEMComponentDirective,
        AEMModelProviderComponent,
        Component1,
        Component2,
        Component3,
        AEMAllowedComponentsContainerComponent,
        AEMResponsiveGridComponent ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [Component1, Component2, Component3, AEMResponsiveGridComponent]
      }
    }).compileComponents();

    fixture = TestBed.createComponent(AEMResponsiveGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create placeholder', () => {
    isInEditorSpy.and.returnValue(true);
    component.cqItems = LAYOUT[Constants.ITEMS_PROP];
    component.cqItemsOrder = LAYOUT[Constants.ITEMS_ORDER_PROP];
    component.gridClassNames = LAYOUT.gridClassNames;
    component.columnClassNames = LAYOUT.columnClassNames;
    component.classNames = LAYOUT.classNames;

    fixture.detectChanges();
    let element = fixture.nativeElement;

    element = element.firstElementChild;
    expect(element.querySelector('div[data-cq-data-path="root"][class="test-class-names"]'))
      .toBeDefined();
    expect(element.querySelector('div[data-cq-data-path="root/*"][class="new section aem-Grid-newComponent"]'))
      .toBeDefined();
    expect(element.querySelector('div[data-cq-data-path="root/responsivegrid/*"][class="new section aem-Grid-newComponent"]'))
      .toBeDefined();
  });

  it('should create the allowed components with the default title and no allowed component', () => {
    isInEditorSpy.and.returnValue(true);
    component.title = TEST_COMPONENT_TITLE;
    component.allowedComponents = {
      applicable: true,
      components: []
    };

    fixture.detectChanges();

    const element = fixture.nativeElement.firstElementChild;
    const titleElement = element.querySelector('.' + ALLOWED_COMPONENT_TITLE_CLASS_NAMES);

    expect(element.classList.contains(ALLOWED_PLACEHOLDER_CLASS_NAMES)).toBeTruthy();

    expect(titleElement).toBeTruthy();
    expect(titleElement.dataset.text).toEqual('No allowed components');
    expect(element.querySelectorAll('.aem-AllowedComponent--component.cq-placeholder.placeholder').length)
      .toEqual(0);
  });

  it('should create the allowed components with a custom title and allowed components', () => {
    isInEditorSpy.and.returnValue(true);
    component.title = TEST_COMPONENT_TITLE;
    component.allowedComponents = {
      applicable: true,
      components: [{
        path: 'test/components/component1',
        title: 'Test component title 1'
      },
        {
          path: 'test/components/component2',
          title: 'Test component title 2'
        }]
    };

    fixture.detectChanges();

    const element = fixture.nativeElement.firstElementChild;
    const titleElement = element.querySelector('.' + ALLOWED_COMPONENT_TITLE_CLASS_NAMES);

    expect(element.classList.contains(ALLOWED_PLACEHOLDER_CLASS_NAMES)).toBeTruthy();

    expect(titleElement).toBeTruthy();
    expect(titleElement.dataset.text).toEqual(TEST_COMPONENT_TITLE);
    expect(element.querySelectorAll('.aem-AllowedComponent--component.cq-placeholder.placeholder').length)
      .toEqual(2);
  });

  it('should NOT create the allowed components if not in the editor', () => {
    component.title = TEST_COMPONENT_TITLE;
    component.allowedComponents = {
      applicable: true,
      components: [{
        path: 'test/components/component1',
        title: 'Test component title 1'
      },
        {
          path: 'test/components/component2',
          title: 'Test component title 2'
        }]
    };

    fixture.detectChanges();

    const element = fixture.nativeElement;
    expect(element.querySelector('.' + ALLOWED_COMPONENT_TITLE_CLASS_NAMES)).toBeNull();

    expect(element.classList.contains(ALLOWED_PLACEHOLDER_CLASS_NAMES)).toBeFalsy();

    expect(element.querySelectorAll('.aem-AllowedComponent--component.cq-placeholder.placeholder').length)
      .toEqual(0);
    expect(element.querySelector('div[data-cq-data-path="root/*"][class="new section aem-Grid-newComponent"]'))
      .toBeDefined();
    expect(element.querySelector('div[data-cq-data-path="root/responsivegrid/*"][class="new section aem-Grid-newComponent"]'))
      .toBeDefined();
  });
});

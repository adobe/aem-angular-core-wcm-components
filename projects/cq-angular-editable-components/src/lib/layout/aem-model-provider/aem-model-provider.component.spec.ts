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

import {AEMModelProviderComponent} from '../aem-model-provider/aem-model-provider.component';
import {ModelManager} from '@adobe/cq-spa-page-model-manager';
import {AEMComponentDirective} from '../aem-component.directive';

import '../../test/mapping';

describe('AEMModelProviderComponent', () => {

  const TEST_MODEL_DATA = {
    text: 'Test model data'
  };

  let component: AEMModelProviderComponent;
  let fixture: ComponentFixture<AEMModelProviderComponent>;
  let getDataSpy;

  beforeEach(() => {
    getDataSpy = spyOn(ModelManager, 'getData').and.returnValue(Promise.resolve(TEST_MODEL_DATA));

    TestBed.configureTestingModule({
      declarations: [ AEMComponentDirective, AEMModelProviderComponent ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [AEMModelProviderComponent]
      }
    }).compileComponents();

    fixture = TestBed.createComponent(AEMModelProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call ModelManager#getData when updateItem is called', () => {
    expect(getDataSpy.calls.count()).toEqual(0);
    component.updateItem();
    expect(getDataSpy.calls.count()).toEqual(1);
  });
});

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

import { Component, Input, NgZone } from '@angular/core';
import { ModelManager } from "@adobe/cq-spa-page-model-manager";

@Component({
  selector: 'aem-model-provider,[aemModelProvider]',
  template: `<ng-container [aemComponent] [cqItem]='cqItem' [cqPath]='cqPath' [itemName]='itemName'></ng-container>`
})
/**
 * The current component is responsible for providing access to the ModelManager and the model of a component
 */
export class AEMModelProviderComponent {
  /**
   * Path to the model associated with the current instance of the component
   */
  @Input() cqPath;
  /**
   * Model item associated with the current model provider component
   */
  @Input() cqItem;
  /**
   * Name of the item associated with the current model provider component
   */
  @Input() itemName;

  @Input() aemModelProvider;

  constructor(private ngZone: NgZone) {
  }

  /**
   * Updates the item data
   */
  updateItem() {
    ModelManager.getData({path: this.cqPath}).then(model => {
        this.ngZone.run(() => {
          this.cqItem = model;
        });
    });
  }

  ngOnInit() {
    ModelManager.addListener(this.cqPath, this.updateItem.bind(this));
  }

  ngDestroy() {
    ModelManager.removeListener(this.cqPath, this.updateItem.bind(this));
  }
}


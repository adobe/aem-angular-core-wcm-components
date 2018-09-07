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
import { Constants } from "../constants";

@Component({
  selector: '[aemModelProvider]',
  template: `<ng-container [aemComponent] [cqItem]='cqItem' [cqPath]='cqPath' [itemName]='itemName'></ng-container>`
})
export class AEMModelProviderComponent {
  @Input() cqPath;
  @Input() cqItem;
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

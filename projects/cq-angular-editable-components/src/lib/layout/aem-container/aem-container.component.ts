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

import { Component, Input } from '@angular/core';
import { Constants } from '../constants';

const CONTAINER_CLASS_NAMES = 'aem-container';

@Component({
  selector: 'aem-container',
  host: {
      '[class]': 'classNames',
      '[attr.data-cq-data-path]':'path'
  },
  templateUrl: './aem-container.component.html'
})
export class AEMContainerComponent {
  @Input() cqModel:any;
  @Input() path:string = '';
  @Input() pagePath:string = '';
  @Input() modelName:string = '';

  constructor() {}

  /**
   * Returns the aggregated path of this container path and the provided path
   *
   * @param path - the provided path to aggregate with the container path
   */
  getDataPath(path) {
    return this.path ? this.path + "/" + path : path;
  }

  /**
   * Return the page path from the data, defaulting to the provided pagePath to the container.
   */
  getPagePath() {
    return this.cqModel[Constants.PATH_PROP] || this.pagePath;
  }

  /**
   * Returns the item data from the cqModel
   *
   * @param itemKey - the itemKey to look for in the items.
   */
  getItem(itemKey) {
    return this.cqModel[Constants.ITEMS_PROP][itemKey];
  }

  /**
   * Returns the itemsOrder array from the cqModel
   */
  get itemsOrder() {
    return this.cqModel && this.cqModel[Constants.ITEMS_ORDER_PROP];
  }

  /**
   * Returns the gridClasses for the cqModel of the container
   */
  get gridClasses() {
    return this.cqModel && (this.cqModel["gridClassNames"] || '');
  }

  /**
   * Returns the class names of the container based on the data from the cqModel
   */
  get classNames() {
      if (!this.cqModel) {
          return '';
      }

      let classNames = CONTAINER_CLASS_NAMES;

      if (this.cqModel.classNames) {
          classNames += ' ' + (this.cqModel.classNames || '') ;
      }

      if (this.cqModel.columnClassNames) {
          classNames += ' ' + (this.cqModel.columnClassNames || '');
      }

      return classNames;
    }
}


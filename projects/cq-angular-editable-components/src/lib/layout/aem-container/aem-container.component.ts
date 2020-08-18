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
import { Utils } from '../utils';
import { AbstractMappedComponent } from '../component-mapping';

const PLACEHOLDER_CLASS_NAMES = Constants.NEW_SECTION_CLASS_NAMES;
const PLACEHOLDER_ITEM_NAME = '*';
const CONTAINER_CLASS_NAMES = 'aem-container';

@Component({
  selector: 'aem-container',
  host: {
      '[class]': 'hostClasses',
      '[attr.data-cq-data-path]':'cqPath'
  },
  templateUrl: './aem-container.component.html'
})
/**
 * The current component provides the base presentational logic common to containers such as a grid or a page.
 * Container have in common the notion of item holders. Items are represented in the model by the fields _:items_ and _:itemsOrder_
 */
export class AEMContainerComponent extends AbstractMappedComponent{
  /**
   * Map of model items included in the current container
   */
  @Input() cqItems;
  /**
   * Array of model item keys
   */
  @Input() cqItemsOrder;

  /**
   * Key of the model structure
   */
  @Input() modelName: string = '';
  /**
   * Class names of the current component
   */
  @Input() classNames: string;

  /**
   * Returns weather of not we are in the editor
   */
  get isInEditMode() {
    return Utils.isInEditor();
  }

  /**
   * Returns the aggregated path of this container path and the provided path
   *
   * @param path - the provided path to aggregate with the container path
   */
  getDataPath(path) {
    return this.cqPath ? this.cqPath + '/' + path : path;
  }

  /**
   * Returns the item data from the cqModel
   *
   * @param itemKey - the itemKey to look for in the items.
   */
  getItem(itemKey) {
    return this.cqItems && this.cqItems[itemKey];
  }

  /**
   * Returns the class names of the container based on the data from the cqModel
   */
  getHostClassNames() {
    return CONTAINER_CLASS_NAMES;
  }

  get hostClasses () {
    return this.getHostClassNames();
  }

  /**
   * Returns the placeholder classes
   */
  getPlaceholderClassNames() {
    return PLACEHOLDER_CLASS_NAMES;
  }

  /**
   * Returns the placeholder path
   */
  get placeholderPath() {
    return this.cqPath && this.cqPath + '/' + PLACEHOLDER_ITEM_NAME;
  }
}


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
import { AEMContainerComponent } from '../aem-container/aem-container.component';
import { Constants } from '../constants';

const PLACEHOLDER_CLASS_NAMES = ' aem-Grid-newComponent';
const RESPONSIVE_GRID_TYPE = 'wcm/foundation/components/responsivegrid';

@Component({
  selector: 'aem-responsivegrid',
  host: {
      '[class]': 'hostClasses',
      '[attr.data-cq-data-path]':'cqPath'
  },
  templateUrl: './aem-responsivegrid.component.html',
})
/**
 * The current class carries the base presentational logic of the AEM Layout Container (aka. Responsive grid)
 */
export class AEMResponsiveGridComponent extends AEMContainerComponent {
  /**
   * Class names associated with the current responsive grid
   */
  @Input() gridClassNames: string;
  /**
   * Map of class names corresponding to each child of the current responsive grid
   */
  @Input() columnClassNames: Object;
  /**
   * Class names of the current component
   */
  @Input() classNames: string;
  /**
   * Current number of columns of the grid
   */
  @Input() columnCount: number;

  /**
   * Returns the column class names for a given column
   * @param itemKey - The key of the column item
   */
  getColumnClassNames(itemKey:string) {
    return this.columnClassNames && this.columnClassNames[itemKey];
  }

  /**
   * Returns the placeholder classes
   */
  getPlaceholderClassNames() {
    return super.getPlaceholderClassNames() + PLACEHOLDER_CLASS_NAMES;
  }

  /**
   * Returns the class names of the responsive grid based on the data from the cqModel
   */
  getHostClassNames() {
    let classNames = super.getHostClassNames();

    if (this.classNames) {
        classNames += ' ' + (this.classNames || '') ;
    }

    return classNames + ' ' + this.gridClassNames;
  }

  /**
   * Returns the aggregated path of this container path and the provided path
   *
   * @param path - the provided path to aggregate with the container path
   */
  getAttrDataPath(path) {
    let item = this.getItem(path);
    if (item && item[Constants.TYPE_PROP] === RESPONSIVE_GRID_TYPE) {
      // We don't want to add the path for the wrapper for a reponsivegrid
      // The reponsivegrid adds the path on it's own
      return null;
    }

    return this.getDataPath(path);
  }
}

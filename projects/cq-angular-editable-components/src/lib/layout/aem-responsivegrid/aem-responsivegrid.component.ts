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

import { Component } from '@angular/core';
import { AEMContainerComponent } from '../aem-container/aem-container.component';
import { Utils } from "../utils";
import { Constants } from "../constants";

const CONTAINER_CLASS_NAMES = 'aem-container';
const PLACEHOLDER_CLASS_NAMES = Constants.NEW_SECTION_CLASS_NAMES + ' aem-Grid-newComponent';

@Component({
  selector: 'aem-responsivegrid',
  host: {
      '[class]': 'classNames',
      '[attr.data-cq-data-path]':'path'
  },
  templateUrl: './aem-responsivegrid.component.html',
})
export class AEMResponsiveGridComponent extends AEMContainerComponent {
  /**
   * Returns weather of not we are in the editor
   */
  get isInEditMode() {
    return Utils.isInEditor();
  }

  /**
   * Returns the placeholder classes
   */
  get placeholderClass() {
    return PLACEHOLDER_CLASS_NAMES;
  }

  /**
   * Returns the placeholder path
   */
  get placeholdePath() {
    return this.path && this.path + "/*";
  }

    /**
   * Returns the gridClasses for the cqModel of the responsive grid
   */
  get gridClasses() {
    return this.cqModel && (this.cqModel["gridClassNames"] || '');
  }

    /**
   * Returns the class names of the responsive grid based on the data from the cqModel
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

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

const PAGE_MODEL_SEPARATOR = '/jcr:content/';

@Component({
  selector: 'aem-page',
  host: {
      '[class]': 'hostClasses',
      '[attr.data-cq-data-path]':'cqPath'
  },
  templateUrl: '../aem-container/aem-container.component.html'
})
/**
 * The current component carries the base presentational logic of page component
 */
export class AEMPageComponent extends AEMContainerComponent {
  /**
   * Returns the aggregated path of this container path and the provided path
   *
   * @param {string} path - the provided path to aggregate with the container path
   */
  getDataPath(path) {
    return this.cqPath ? this.cqPath + PAGE_MODEL_SEPARATOR + path : path;
  }

}


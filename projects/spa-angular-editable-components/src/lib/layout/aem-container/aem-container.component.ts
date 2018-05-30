/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { Component, Input } from '@angular/core';
import Constants from '../constants';

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
  @Input() data:any;
  @Input() path:string = '';
  @Input() pagePath:string = '';
  @Input() modelName:string = '';

  constructor() {}

  getDataPath(path) {
    return this.path ? this.path + "/" + path : path;
  }

  getPagePath() {
    return this.data[Constants.PATH_PROP] || this.pagePath;
  }

  getItem(itemKey) {
    return this.data[Constants.ITEMS_PROP][itemKey];
  }

  get itemsOrder() {
    return this.data && this.data[Constants.ITEMS_ORDER_PROP];
  }

  get gridClasses() {
    return this.data && (this.data["gridClassNames"] || '');
  }

  get classNames() {
      if (!this.data) {
          return '';
      }

      let classNames = CONTAINER_CLASS_NAMES;

      if (this.data.classNames) {
          classNames += ' ' + (this.data.classNames || '') ;
      }

      if (this.data.columnClassNames) {
          classNames += ' ' + (this.data.columnClassNames || '');
      }

      return classNames;
    }
}


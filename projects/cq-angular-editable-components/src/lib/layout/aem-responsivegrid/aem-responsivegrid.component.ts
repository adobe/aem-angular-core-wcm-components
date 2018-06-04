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

import { Component } from '@angular/core';
import { AEMContainerComponent } from '../aem-container/aem-container.component';
import { Utils } from "../utils";
import { Constants } from "../constants";

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
}

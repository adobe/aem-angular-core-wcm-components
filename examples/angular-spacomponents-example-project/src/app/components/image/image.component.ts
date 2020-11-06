/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
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

import {Component, Input, OnInit} from '@angular/core';
import {MapTo} from '@adobe/aem-angular-editable-components';
import {AbstractMappedComponent} from "@adobe/aem-angular-editable-components";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent extends AbstractMappedComponent implements OnInit {

  @Input() src: string;
  @Input() link: string;
  @Input() alt: string;
  @Input() title: string;
  @Input() displayPopupTitle: string;

  get hasImage() {
    return this.src && this.src.trim().length > 0;
  }

  get imageTitle() {
    return this.displayPopupTitle ? this.title : '';
  }

  get imageCaption() {
    return this.title;
  }

  ngOnInit() { }
}

const ImageEditConfig = {
  emptyLabel: 'Image',

  isEmpty: function(componentData) {
    return !componentData || !componentData.src || componentData.src.trim().length < 1;
  }
};

MapTo('wknd-events/components/content/image')(ImageComponent, ImageEditConfig);

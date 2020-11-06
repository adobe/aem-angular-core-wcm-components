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
import {DomSanitizer} from '@angular/platform-browser';
import {MapTo} from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() richText: boolean;
  @Input() text: string;

  constructor(private sanitizer: DomSanitizer) {}

  get content() {
    const textValue = this.text || '';

    if (this.richText) {
      return this.sanitizer.bypassSecurityTrustHtml(textValue);
    } else {
      return textValue;
    }
  }

  ngOnInit() {}
}

const TextEditConfig = {
  emptyLabel: 'Text',

  isEmpty: function(componentData) {
    return !componentData || !componentData.text || componentData.text.trim().length < 1;
  }
};

MapTo('wknd-events/components/content/text')(TextComponent, TextEditConfig);

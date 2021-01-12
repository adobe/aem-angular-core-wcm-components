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
import {MappedComponentProperties, AbstractMappedComponent} from '@adobe/aem-angular-editable-components';


export interface TextComponentProperties extends MappedComponentProperties{
  richText: boolean;
  text: string;
}

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends AbstractMappedComponent implements OnInit, TextComponentProperties {
  @Input() richText;
  @Input() text;

  constructor(private sanitizer: DomSanitizer) {
    super();
  }

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

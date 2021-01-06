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

import { Component, OnInit, Input } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: object[];

  get events(): Event[] {
    return this.items.map(item => {
      return new Event(item);
    });
  }

  ngOnInit() { }
}

class Event {
  private monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  date: Date;
  path: string;
  url: string;
  title: string;
  description: string;

  constructor(data) {
    this.path = data.path;
    this.title = data.title;
    this.description = data.description;
    this.url = data.url;
    this.date = new Date(data.lastModified);
  }

  public get imageUrl(): string {
    return this.path + '/_jcr_content/root/responsivegrid/image.coreimg.jpeg';
  }

  public get month(): string {
    return this.monthNames[this.date.getMonth()];
  }

  public get day(): string {
    let tmp = this.date.getDate().toString();

    if (tmp.length === 1) {
      tmp = '0' + tmp;
    }

    return tmp;
  }
}

const ListEditConfig = {
  emptyLabel: 'List',

  isEmpty: function(componentData) {
    return !componentData || !componentData.items || componentData.items.length < 1;
  }
};

MapTo('wknd-events/components/content/list')(ListComponent, ListEditConfig);

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

import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelManager, Constants } from '@adobe/aem-spa-page-model-manager';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  path;
  items;
  itemsOrder;
  constructor(private route: ActivatedRoute,@Inject(PLATFORM_ID) private _platformId: Object) {
    // Get the data set by the AemPageDataResolver in the Router
    const path = route.snapshot.data.path;

    // Get the JSON data for the ActivatedRoute's path from ModelManager.
    // If the data exists in the JSON retrieved from ModelManager.initialize() that data will be used.
    // else ModelManager handles retrieving the data from AEM.
    ModelManager.getData(path).then((data) => {
      // Get the data well need to populate the template (which includes an Angular AemPageComponent

      // These 3 values, pulled from the JSON are stored as class variables allowing them to be exposed to
      this.path = data[Constants.PATH_PROP];
      this.items = data[Constants.ITEMS_PROP];
      this.itemsOrder = data[Constants.ITEMS_ORDER_PROP];

      if(isPlatformBrowser(_platformId)) {
          window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() { }
}

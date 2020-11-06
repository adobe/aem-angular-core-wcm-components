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

import {Component} from '@angular/core';
import {ModelManager} from '@adobe/aem-spa-page-model-manager';
import {AEMContainerComponent, AEMResponsiveGridComponent, MapTo} from '@adobe/aem-angular-editable-components';

import {AccordionV1Component} from "@adobe/aem-core-components-angular-spa/containers/accordion/v1";
import {CarouselV1Component} from "@adobe/aem-core-components-angular-spa/containers/carousel/v1";
import {TabsV1Component} from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";
import {ContainerV1Component} from "@adobe/aem-core-components-angular-spa/containers/container/v1";

import {TitleV2Component,TitleV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/title/v2';
import {BreadCrumbV2Component,BreadCrumbV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/layout/breadcrumb/v2';
import {TextV2Component,TextV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/text/v2';
import {NavigationV1Component} from  '@adobe/aem-core-components-angular-base/layout/navigation/v1';
import {ButtonV1Component,ButtonV1IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/button/v1';
import {ImageV2Component,ImageV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/image/v2';
import {LanguageNavigationV1Component} from '@adobe/aem-core-components-angular-base/layout/language-navigation/v1';
import {TeaserV1Component,TeaserV1IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/teaser/v1';
import {DownloadV1Component,DownloadV1IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/download/v1';
import {SeparatorV1Component,SeparatorV1IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/separator/v1';
import {ListV2Component,ListV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/list/v2';
import {DemoComponent} from "./components/demo/demo.component";
import {DemoJsonComponent} from "./components/demo/json/demo.json.component";
import {DemoPropertiesComponent} from "./components/demo/properties/demo.properties.component";
import {DemoMarkupComponent} from "./components/demo/markup/demo.markup.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    ModelManager.initialize();
  }
}

MapTo('core-components-examples/wcm/angular/components/demo/json')(DemoJsonComponent);
MapTo('core-components-examples/wcm/angular/components/demo/properties')(DemoPropertiesComponent);
MapTo('core-components-examples/wcm/angular/components/demo/markup')(DemoMarkupComponent);
MapTo('core-components-examples/wcm/angular/components/demo')(DemoComponent);
MapTo('core-components-examples/wcm/angular/components/demo/component')(AEMContainerComponent);

MapTo('core-components-examples/wcm/angular/components/navigation')(NavigationV1Component);
MapTo('core-components-examples/wcm/angular/components/download')(DownloadV1Component, {isEmpty: DownloadV1IsEmptyFn});
MapTo('core-components-examples/wcm/angular/components/languagenavigation')(LanguageNavigationV1Component);
MapTo('core-components-examples/wcm/angular/components/list')(ListV2Component, {isEmpty: ListV2IsEmptyFn});
MapTo('core-components-examples/wcm/angular/components/separator')(SeparatorV1Component, {isEmpty: SeparatorV1IsEmptyFn});
MapTo('core-components-examples/wcm/angular/components/download')(DownloadV1Component, {isEmpty: DownloadV1IsEmptyFn});
MapTo('core-components-examples/wcm/angular/components/text')(TextV2Component, {isEmpty: TextV2IsEmptyFn});
MapTo('core-components-examples/wcm/angular/components/breadcrumb')(BreadCrumbV2Component, {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('core-components-examples/wcm/angular/components/button')(ButtonV1Component, {isEmpty: ButtonV1IsEmptyFn});
MapTo('core-components-examples/wcm/angular/components/teaser')(TeaserV1Component, {isEmpty: TeaserV1IsEmptyFn});
MapTo('core-components-examples/wcm/angular/components/image')(ImageV2Component, {isEmpty: ImageV2IsEmptyFn});
MapTo('core-components-examples/wcm/angular/components/title')(TitleV2Component, {isEmpty: TitleV2IsEmptyFn});


MapTo('core-components-examples/wcm/angular/components/tabs')(TabsV1Component);
MapTo('core-components-examples/wcm/angular/components/accordion')(AccordionV1Component);
MapTo('core-components-examples/wcm/angular/components/carousel')(CarouselV1Component);
MapTo('core-components-examples/wcm/angular/components/container')(ContainerV1Component);

MapTo('core-components-examples/wcm/angular/components/page/angular-spacomponents-page')(AEMContainerComponent);
MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);
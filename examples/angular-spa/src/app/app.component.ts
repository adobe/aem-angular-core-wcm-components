import {Component} from '@angular/core';
import {ModelManager} from '@adobe/cq-spa-page-model-manager';
import {AEMContainerComponent, AEMResponsiveGridComponent, MapTo} from '@adobe/cq-angular-editable-components';

import {AccordionV1Component} from "@adobe/aem-core-components-angular-spa/containers/accordion/v1";
import {CarouselV1Component} from "@adobe/aem-core-components-angular-spa/containers/carousel/v1";
import {TabsV1Component} from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";
import {ContainerV1Component} from "@adobe/aem-core-components-angular-spa/containers/container/v1";


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


// MapTo('core-components-examples/wcm/angular/components/navigation')(withComponentMappingContext(NavigationV1));
// MapTo('core-components-examples/wcm/angular/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
// MapTo('core-components-examples/wcm/angular/components/languagenavigation')(withComponentMappingContext(LanguageNavigationV1));
// MapTo('core-components-examples/wcm/angular/components/list')(ListV2, {isEmpty: ListV2IsEmptyFn});
// MapTo('core-components-examples/wcm/angular/components/separator')(SeparatorV1, {isEmpty: SeparatorV1IsEmptyFn});
// MapTo('core-components-examples/wcm/angular/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
// MapTo('core-components-examples/wcm/angular/components/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
// MapTo('core-components-examples/wcm/angular/components/breadcrumb')(withComponentMappingContext(BreadCrumbV2), {isEmpty: BreadCrumbV2IsEmptyFn});
// MapTo('core-components-examples/wcm/angular/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
// MapTo('core-components-examples/wcm/angular/components/teaser')(TeaserV1, {isEmpty: TeaserV1IsEmptyFn});
// MapTo('core-components-examples/wcm/angular/components/image')(ImageV2, {isEmpty: ImageV2IsEmptyFn});
// MapTo('core-components-examples/wcm/angular/components/title')(TitleV2, {isEmpty: TitleV2IsEmptyFn});


MapTo('core-components-examples/wcm/angular/components/tabs')(TabsV1Component);
MapTo('core-components-examples/wcm/angular/components/accordion')(AccordionV1Component);
MapTo('core-components-examples/wcm/angular/components/carousel')(CarouselV1Component);
MapTo('core-components-examples/wcm/angular/components/container')(ContainerV1Component);

MapTo('core-components-examples/wcm/angular/components/page/angular-spacomponents-page')(AEMContainerComponent);
//MapTo('core-components-examples/wcm/angular/components/page/angular-spacomponents-page/app')(AEMContainerComponent);
MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);
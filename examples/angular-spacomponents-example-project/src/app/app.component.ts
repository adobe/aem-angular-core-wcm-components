import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ModelManager} from '@adobe/aem-spa-page-model-manager';

import {AEMContainerComponent, AEMResponsiveGridComponent, LazyMapTo, MapTo} from '@adobe/aem-angular-editable-components';

import {isPlatformBrowser} from '@angular/common';

import {TabsV1Component} from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";

import {TitleV2Component, TitleV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/title/v2';
import {BreadCrumbV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/layout/breadcrumb/v2';
import {TextV2Component, TextV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/text/v2';
import {NavigationV1Component, NavigationV1IsEmptyFn} from '@adobe/aem-core-components-angular-base/layout/navigation/v1';
import {ButtonV1IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/button/v1';
import {ImageV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/image/v2';

import {TeaserV1Component, TeaserV1IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/teaser/v1';
import {DownloadV1IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/download/v1';

import {ListV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/list/v2';
import {DemoComponent} from "./components/demo/demo.component";
import {DemoJsonComponent} from "./components/demo/json/demo.json.component";
import {DemoPropertiesComponent} from "./components/demo/properties/demo.properties.component";
import {DemoMarkupComponent} from "./components/demo/markup/demo.markup.component";
import {SeparatorV1Component} from "@adobe/aem-core-components-angular-base/authoring/separator/v1";
import {ContainerV1Component} from "@adobe/aem-core-components-angular-spa/containers/container/v1";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private _platformId: Object) {

    if(isPlatformBrowser(_platformId)){

      //@ts-ignore
      if(window.initialModel){
        //@ts-ignore
        ModelManager.initialize({model:window.initialModel});
      }else{
        ModelManager.initialize();
      }

    }
  }

  ngOnInit(): void {

    //always need these components
    MapTo('core-components-examples/wcm/angular/components/demo')(DemoComponent);
    MapTo('core-components-examples/wcm/angular/components/demo/json')(DemoJsonComponent);
    MapTo('core-components-examples/wcm/angular/components/demo/properties')(DemoPropertiesComponent);
    MapTo('core-components-examples/wcm/angular/components/demo/markup')(DemoMarkupComponent);
    MapTo('core-components-examples/wcm/angular/components/demo/component')(AEMContainerComponent);
    MapTo('core-components-examples/wcm/angular/components/navigation')(NavigationV1Component, {isEmpty: NavigationV1IsEmptyFn});
    MapTo('core-components-examples/wcm/angular/components/teaser')(TeaserV1Component, {isEmpty: TeaserV1IsEmptyFn});
    MapTo('core-components-examples/wcm/angular/components/title')(TitleV2Component, {isEmpty: TitleV2IsEmptyFn});
    MapTo('core-components-examples/wcm/angular/components/text')(TextV2Component, {isEmpty: TextV2IsEmptyFn});
    MapTo('core-components-examples/wcm/angular/components/tabs')(TabsV1Component);
    MapTo('core-components-examples/wcm/angular/components/page/angular-spacomponents-page')(AEMContainerComponent);
    MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);
    MapTo('core-components-examples/wcm/angular/components/experience-fragment')(AEMContainerComponent, {isEmpty: (props) => !props.configured });
    MapTo('core-components-examples/wcm/angular/components/separator')(SeparatorV1Component);
    MapTo('core-components-examples/wcm/angular/components/container')(ContainerV1Component)

    //lazy components
    LazyMapTo('core-components-examples/wcm/angular/components/lazycomponent')(() => new Promise<unknown>((resolve,reject) => {
      import('./components/text/text.component').then((Module) => resolve(Module.TextComponent)).catch(reject);
    }) );

    LazyMapTo('core-components-examples/wcm/angular/components/download')(() => new Promise<unknown>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/authoring/download/v1').then((Module) => resolve(Module.DownloadV1Component)).catch(reject);
    }), {isEmpty: DownloadV1IsEmptyFn} );

    LazyMapTo('core-components-examples/wcm/angular/components/languagenavigation')(() => new Promise<unknown>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/layout/language-navigation/v1').then((Module) => resolve(Module.LanguageNavigationV1Component)).catch(reject);
    }) );

    LazyMapTo('core-components-examples/wcm/angular/components/list')(
        () => new Promise<unknown>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/authoring/list/v2').then((Module) => resolve(Module.ListV2Component)).catch(reject);
    }),{isEmpty: ListV2IsEmptyFn});

    LazyMapTo('core-components-examples/wcm/angular/components/breadcrumb')(() => new Promise<unknown>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/layout/breadcrumb/v2').then((Module) => resolve(Module.BreadCrumbV2Component)).catch(reject);
    }),{isEmpty: BreadCrumbV2IsEmptyFn} );

    LazyMapTo('core-components-examples/wcm/angular/components/button')(() => new Promise<unknown>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/authoring/button/v1').then((Module) => resolve(Module.ButtonV1Component)).catch(reject);
    }),{isEmpty: ButtonV1IsEmptyFn} );

    LazyMapTo('core-components-examples/wcm/angular/components/image')(() => new Promise<unknown>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/authoring/image/v2').then((Module) => resolve(Module.ImageV2Component)).catch(reject);
    }), {isEmpty: ImageV2IsEmptyFn} );

    LazyMapTo('core-components-examples/wcm/angular/components/accordion')(() => new Promise<unknown>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-spa/containers/accordion/v1').then((Module) => resolve(Module.AccordionV1Component)).catch(reject);
    }) );

    LazyMapTo('core-components-examples/wcm/angular/components/carousel')(() => new Promise<unknown>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-spa/containers/carousel/v1').then((Module) => resolve(Module.CarouselV1Component)).catch(reject);
    }) );

  }
}
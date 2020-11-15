import {Component, Inject, OnInit, PLATFORM_ID, Type} from '@angular/core';
import {ModelManager} from '@adobe/aem-spa-page-model-manager';
import {AEMContainerComponent, AEMResponsiveGridComponent, MapTo, LazyMapTo, MappedComponentProperties} from '@adobe/aem-angular-editable-components';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';


import {TabsV1Component} from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";

import {TitleV2Component, TitleV2IsEmptyFn, TitleV2Model} from '@adobe/aem-core-components-angular-base/authoring/title/v2';
import {BreadCrumbV2Model,BreadCrumbV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/layout/breadcrumb/v2';
import {TextV2Component, TextV2IsEmptyFn, TextV2Model} from '@adobe/aem-core-components-angular-base/authoring/text/v2';
import {NavigationV1Component, NavigationV1IsEmptyFn, NavigationV1Model} from '@adobe/aem-core-components-angular-base/layout/navigation/v1';
import {ButtonV1Model,ButtonV1IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/button/v1';
import {ImageV2Model,ImageV2IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/image/v2';

import {TeaserV1Component, TeaserV1IsEmptyFn, TeaserV1Model} from '@adobe/aem-core-components-angular-base/authoring/teaser/v1';
import { DownloadV1IsEmptyFn, DownloadV1Model} from '@adobe/aem-core-components-angular-base/authoring/download/v1';
import {SeparatorV1Component, SeparatorV1IsEmptyFn} from '@adobe/aem-core-components-angular-base/authoring/separator/v1';
import {ListV2IsEmptyFn, ListV2Model} from '@adobe/aem-core-components-angular-base/authoring/list/v2';
import {DemoComponent, DemoContainerProperties} from "./components/demo/demo.component";
import {DemoJsonComponent, DemoJsonModel} from "./components/demo/json/demo.json.component";
import {DemoPropertiesComponent, PropertiesModel} from "./components/demo/properties/demo.properties.component";
import {DemoMarkupComponent, DemoMarkupModel} from "./components/demo/markup/demo.markup.component";
import {TextComponentProperties} from "./components/text/text.component";
import {ContainerProperties} from "@adobe/aem-core-components-angular-spa/core";

type T = MappedComponentProperties;

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
    MapTo<DemoContainerProperties>('core-components-examples/wcm/angular/components/demo')(DemoComponent);
    MapTo<DemoJsonModel>('core-components-examples/wcm/angular/components/demo/json')(DemoJsonComponent);
    MapTo<PropertiesModel>('core-components-examples/wcm/angular/components/demo/properties')(DemoPropertiesComponent);
    MapTo<DemoMarkupModel>('core-components-examples/wcm/angular/components/demo/markup')(DemoMarkupComponent);
    MapTo('core-components-examples/wcm/angular/components/demo/component')(AEMContainerComponent);
    MapTo<NavigationV1Model & MappedComponentProperties>('core-components-examples/wcm/angular/components/navigation')(NavigationV1Component, {isEmpty: NavigationV1IsEmptyFn});
    MapTo<T & TeaserV1Model>('core-components-examples/wcm/angular/components/teaser')(TeaserV1Component, {isEmpty: TeaserV1IsEmptyFn});
    MapTo<T & TitleV2Model>('core-components-examples/wcm/angular/components/title')(TitleV2Component, {isEmpty: TitleV2IsEmptyFn});
    MapTo<T & TextV2Model>('core-components-examples/wcm/angular/components/text')(TextV2Component, {isEmpty: TextV2IsEmptyFn});
    MapTo('core-components-examples/wcm/angular/components/tabs')(TabsV1Component);
    MapTo('core-components-examples/wcm/angular/components/page/angular-spacomponents-page')(AEMContainerComponent);
    MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);

    //lazy components
    LazyMapTo<TextComponentProperties>('core-components-examples/wcm/angular/components/lazycomponent')(() => new Promise<Type<TextComponentProperties>>((resolve,reject) => {
      import('./components/text/text.component').then((Module) => resolve(Module.TextComponent)).catch(reject);
    }) );

    LazyMapTo<DownloadV1Model & MappedComponentProperties>('core-components-examples/wcm/angular/components/download')(() => new Promise<Type<DownloadV1Model & MappedComponentProperties>>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/authoring/download/v1').then((Module) => resolve(Module.DownloadV1Component)).catch(reject);
    }), {isEmpty: DownloadV1IsEmptyFn} );

    LazyMapTo<MappedComponentProperties>('core-components-examples/wcm/angular/components/languagenavigation')(() => new Promise<Type<MappedComponentProperties>>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/layout/language-navigation/v1').then((Module) => resolve(Module.LanguageNavigationV1Component)).catch(reject);
    }) );

    LazyMapTo<ListV2Model & MappedComponentProperties>('core-components-examples/wcm/angular/components/list')(
        () => new Promise<Type<ListV2Model & MappedComponentProperties>>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/authoring/list/v2').then((Module) => resolve(Module.ListV2Component)).catch(reject);
    }),{isEmpty: ListV2IsEmptyFn});

    LazyMapTo<MappedComponentProperties & any>('core-components-examples/wcm/angular/components/separator')(() => new Promise<Type<SeparatorV1Component>>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/authoring/separator/v1').then((Module) => resolve(Module.SeparatorV1Component)).catch(reject);
    }));

    LazyMapTo<BreadCrumbV2Model & MappedComponentProperties>('core-components-examples/wcm/angular/components/breadcrumb')(() => new Promise<Type<BreadCrumbV2Model & MappedComponentProperties>>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/layout/breadcrumb/v2').then((Module) => resolve(Module.BreadCrumbV2Component)).catch(reject);
    }),{isEmpty: BreadCrumbV2IsEmptyFn} );

    LazyMapTo<ButtonV1Model & MappedComponentProperties>('core-components-examples/wcm/angular/components/button')(() => new Promise<Type<ButtonV1Model & MappedComponentProperties>>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/authoring/button/v1').then((Module) => resolve(Module.ButtonV1Component)).catch(reject);
    }),{isEmpty: ButtonV1IsEmptyFn} );

    LazyMapTo<ImageV2Model & MappedComponentProperties>('core-components-examples/wcm/angular/components/image')(() => new Promise<Type<ImageV2Model & MappedComponentProperties>>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-base/authoring/image/v2').then((Module) => resolve(Module.ImageV2Component)).catch(reject);
    }), {isEmpty: ImageV2IsEmptyFn} );

    LazyMapTo<ContainerProperties>('core-components-examples/wcm/angular/components/accordion')(() => new Promise<Type<ContainerProperties>>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-spa/containers/accordion/v1').then((Module) => resolve(Module.AccordionV1Component)).catch(reject);
    }) );

    LazyMapTo<ContainerProperties>('core-components-examples/wcm/angular/components/carousel')(() => new Promise<Type<ContainerProperties>>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-spa/containers/carousel/v1').then((Module) => resolve(Module.CarouselV1Component)).catch(reject);
    }) );

    LazyMapTo<ContainerProperties>('core-components-examples/wcm/angular/components/container')(() => new Promise<Type<ContainerProperties>>((resolve,reject) => {
      import('@adobe/aem-core-components-angular-spa/containers/container/v1').then((Module) => resolve(Module.ContainerV1Component)).catch(reject);
    }) );
  }
}


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

import { Directive, Input, Output, EventEmitter, Renderer2, NgZone, ChangeDetectorRef, ViewContainerRef, ComponentFactoryResolver, ApplicationRef, ComponentRef } from '@angular/core';

import { ComponentMapping } from "./component-mapping";

import { PageModelManager } from '@adobe/cq-spa-page-model-manager';

import Constants from "./constants";
import Utils from "./utils";


const PLACEHOLDER_CLASS_NAME = 'cq-placeholder';
const DRAG_DROP_REGEX = /cq-dd-([^ ])+/g;
const DRAG_DROP_CLASS_NAME = 'cq-dd-';

@Directive({
  selector: '[aemComponent]'
})

export class AEMComponentDirective {
  private _component:ComponentRef<any>;
  private _oldClasses:string;

  constructor(
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef,
    private factoryResolver: ComponentFactoryResolver,
    private ngZone: NgZone) {
  }

    @Input() data:any;
    @Output() dataChange =  new EventEmitter<any>();
    @Input() path:string;
    @Input() pagePath:string;
    @Input() modelName:string;

    @Input() set aemComponent(data:any) {}
    ngOnInit() {
      this.renderComponent(ComponentMapping.get(this.type));
    }

    get type() {
      return this.data && this.data[":type"];
    }

    updateData() {
      let self = this;
      // Fetching the latest data for the item at the given path
      this.getData().then(model => {
          this.ngZone.run(() => {
            model[Constants.DATA_PATH_PROP] = this.path;
            this.data = model;
            this.updateComponentData();
            this.setupElement();
            let editConfig = ComponentMapping.getEditConfig(ComponentMapping.get(this.type));
            if (editConfig) {
              this.setupPlaceholder(editConfig);
            }
          });
      });
    }

    getData() {
        return PageModelManager.getData({pagePath: this.pagePath, dataPath: this.path});
    }

    renderComponent(componentDefinition:any) {
      if (componentDefinition) {
        const factory = this.factoryResolver.resolveComponentFactory(componentDefinition);
        this.viewContainer.clear();
        this._component = this.viewContainer.createComponent(factory);

        this.updateComponentData();
        this.setupElement();
        let editConfig = ComponentMapping.getEditConfig(componentDefinition);
        if (editConfig) {
          this.setupPlaceholder(editConfig);
        }
        PageModelManager.removeListener({pagePath: this.pagePath, dataPath: this.path, callback: this.updateData.bind(this) });
        PageModelManager.addListener({pagePath: this.pagePath, dataPath: this.path, callback: this.updateData.bind(this) });
      }
    }

    createAttribute(object, name) {
      Object.defineProperty(object, name, {
        get: () => {
          return this[name];
        },
        set: (value) => { this[name] = value }
      });
    }

    private updateComponentData() {
      this._component.instance.data = this.data;
      this._component.instance.path = this.path;
      this._component.instance.pagePath = this.pagePath;
      this._component.instance.modelName = this.modelName;

    }

    private setupElement()  {
      if (this._oldClasses) {
        let oldClasses = this._oldClasses.split(' ');
        oldClasses.forEach((columnClass) => {
          this.renderer.removeClass(this._component.location.nativeElement, columnClass);
        });
      }

      this._oldClasses = this.columnClasses;
      // Manually add the classes
      if (this.columnClasses) {
        let classes = this.columnClasses.split(' ');
        classes.forEach((columnClass) => {
          this.renderer.addClass(this._component.location.nativeElement, columnClass);
        });
      }

      if (this.path) {
        this.renderer.setAttribute(this._component.location.nativeElement, "data-cq-data-path" ,this.path);
      }

    }

    setupPlaceholder(editConfig) {
      // Remove previous drag and drop class names
      this.renderer.removeClass(this._component.location.nativeElement, DRAG_DROP_CLASS_NAME + editConfig.dragDropName);

      if (editConfig.dragDropName && editConfig.dragDropName.trim().length > 0) {
          this.renderer.addClass(this._component.location.nativeElement, DRAG_DROP_CLASS_NAME + editConfig.dragDropName);
      }

      if (this.usePlaceholder(editConfig)) {
          this.renderer.addClass(this._component.location.nativeElement, PLACEHOLDER_CLASS_NAME);
          this._component.location.nativeElement.dataset.emptytext = editConfig.emptyLabel;
      } else {
          this.renderer.removeClass(this._component.location.nativeElement, PLACEHOLDER_CLASS_NAME);
          delete this._component.location.nativeElement.dataset.emptytext;
      }
    }

    usePlaceholder(editConfig) {
      return editConfig.isEmpty && typeof editConfig.isEmpty === "function" && editConfig.isEmpty(this.data);
    }

    ngOnDestroy() {
      PageModelManager.removeListener({pagePath: this.pagePath, dataPath: this.path, callback: this.updateData.bind(this) });
      this._component && this._component.destroy();
    }

    get columnClasses() {
      return this.data && (this.data.columnClassNames || '');
    }
}

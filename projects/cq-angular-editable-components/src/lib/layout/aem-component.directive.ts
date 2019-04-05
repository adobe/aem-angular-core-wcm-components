/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2018 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

import {
  Directive,
  Input,
  Renderer2,
  NgZone,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  AfterViewInit,
  OnInit,
  OnDestroy
} from '@angular/core';

import { ComponentMapping } from './component-mapping';
import { Constants } from './constants';
import { Utils } from './utils';


const PLACEHOLDER_CLASS_NAME = 'cq-placeholder';

@Directive({
  selector: '[aemComponent]'
})

/**
 * The current directive provides advanced capabilities among which are
 *
 * - The management of the component placeholder in the Page Editor
 * - The dynamic instantiation of components based on a component definition
 * - The conversion from model fields to properties and injection in the component instance
 * - The management of HTMLElement attributes and class names on the native element
 */
export class AEMComponentDirective implements AfterViewInit, OnInit, OnDestroy {
  /**
   * Dynamically created component
   */
  private _component: ComponentRef<any>;
  /**
   * Model item that corresponds to the current component
   */
  private _cqItem: object;

  get cqItem(): object {
    return this._cqItem;
  }

  @Input()
  set cqItem(value: object) {
    this._cqItem = value;
    this.updateComponentData();
  }

  /**
   * Path to the model structure associated with the current component
   */
  @Input() cqPath: string;
  /**
   * Name of the current instance of the component
   */
  @Input() itemName: string;
  /**
   * HtmlElement attributes for the current instance of the component
   */
  @Input() itemAttrs: object;

  @Input() aemComponent;

  constructor(
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef,
    private factoryResolver: ComponentFactoryResolver,
    private ngZone: NgZone) {
  }

  ngOnInit() {
    this.renderComponent(ComponentMapping.get(this.type));
  }

  /**
   * Returns the type of the cqItem if exists.
   */
  get type() {
    return this.cqItem && this.cqItem[Constants.TYPE_PROP];
  }
  /**
   * Renders a component dynamically based on the component definition
   *
   * @param componentDefinition The component definition to render
   */
  private renderComponent(componentDefinition: any) {
    if (componentDefinition) {
      const factory = this.factoryResolver.resolveComponentFactory(componentDefinition);
      this.viewContainer.clear();
      this._component = this.viewContainer.createComponent(factory);
      this.updateComponentData();
    }
  }

  /**
   * Updates the data of the component based the data of the directive
   */
  private updateComponentData() {
    if (!this._component || !this._component.instance) {
      return;
    }

    const keys = Object.getOwnPropertyNames(this.cqItem);

    keys.forEach((key) => {
        let propKey = key;

        if (propKey.startsWith(':')) {
            // Transformation of internal properties namespaced with [:] to [cq]
            // :myProperty => cqMyProperty
            const tempKey = propKey.substr(1);
            propKey = 'cq' + tempKey.substr(0, 1).toUpperCase() + tempKey.substr(1);
        }

        this._component.instance[propKey] = this.cqItem[key];
    });

    this._component.instance.cqPath = this.cqPath;
    this._component.instance.itemName = this.itemName;
    const editConfig = ComponentMapping.getEditConfig(this.type);
    if (editConfig && Utils.isInEditor) {
      this.setupPlaceholder(editConfig);
    }
  }

  /**
   * Adds the specified item attributes to the element
   */
  private setupItemAttrs() {
    if (this.itemAttrs) {
      const keys = Object.getOwnPropertyNames(this.itemAttrs);

      keys.forEach((key) => {
        if (key === 'class') {
          const classes = this.itemAttrs[key].split(' ');
          classes.forEach((itemClass) => {
            this.renderer.addClass(this._component.location.nativeElement, itemClass);
          });
        } else {
          this.renderer.setAttribute(this._component.location.nativeElement, key , this.itemAttrs[key]);
        }
      });
    }
  }

  /**
   * Determines if the placeholder should e displayed.
   *
   * @param editConfig - the edit config of the directive
   */
  private usePlaceholder(editConfig) {
    return editConfig.isEmpty && typeof editConfig.isEmpty === 'function' && editConfig.isEmpty(this.cqItem);
  }

  /**
   * Setups the placeholder of needed for the AEM editor
   *
   * @param editConfig - the editConfig, which will dictate the classes to be added on.
   */
  private setupPlaceholder(editConfig) {
    if (this.usePlaceholder(editConfig)) {
        this.renderer.addClass(this._component.location.nativeElement, PLACEHOLDER_CLASS_NAME);
        this.renderer.setAttribute(this._component.location.nativeElement, 'data-emptytext', editConfig.emptyLabel);
    } else {
        this.renderer.removeClass(this._component.location.nativeElement, PLACEHOLDER_CLASS_NAME);
        this.renderer.removeAttribute(this._component.location.nativeElement, 'data-emptytext');
    }
  }

  ngAfterViewInit() {
    this.setupItemAttrs();
  }

  ngOnDestroy() {
    this._component && this._component.destroy();
  }

}

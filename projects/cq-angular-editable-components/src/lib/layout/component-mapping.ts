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

import { ComponentMapping as SPAComponentMapping } from '@adobe/cq-spa-component-mapping';

/**
 * The current class extends the @adobe/cq-spa-component-mapping#Mapto library and features with Angular specifics such as
 *
 * - Storing the editing configurations for each resource type
 */
export class ComponentMappingWithConfig {
  /**
   * Store of EditConfig structures
   */
  private editConfigMap = {};

  constructor(private spaMapping:SPAComponentMapping) {}

  /**
   * Stores a component class for the given resource types and also allows to provide an EditConfig object
   * @param {string[]} resourceTypes - List of resource types
   * @param {{}} clazz - Component class to be stored
   * @param {} [editConfig] - Edit configuration to be stored for the given resource types
   */
  map(resourceTypes, clazz, editConfig = null) {
      let innerClass = clazz;

      if (editConfig) {
          this.editConfigMap[resourceTypes] = editConfig;
      }
      this.spaMapping.map(resourceTypes, innerClass);
  };

  /**
   * Returns the component class for the given resourceType
   * @param {string} resourceType - Resource type for which the component class has been stored
   */
  get(resourceType) {
    return this.spaMapping.get(resourceType);
  }

  /**
   * Returns the EditConfig structure for the given type
   * @param {string} resourceType - Resource type for which the configuration has been stored
   */
  getEditConfig(resourceType) {
    return this.editConfigMap[resourceType];
  }
}

let componentMapping = new ComponentMappingWithConfig(SPAComponentMapping);

function MapTo(resourceTypes) {
    return (clazz, editConfig = null) => {
        return componentMapping.map(resourceTypes, clazz, editConfig);
    };
}


export { componentMapping as ComponentMapping, MapTo };

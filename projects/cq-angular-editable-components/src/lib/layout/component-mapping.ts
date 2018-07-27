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

import { ComponentMapping as SPAComponentMapping } from "@adobe/cq-spa-component-mapping";

export class ComponentMappingWithConfig {
  private editConfigMap = {}

  constructor(private spaMapping:SPAComponentMapping) {}

  map(resourceTypes, clazz, editConfig = null) {
      let innerClass = clazz;

      if (editConfig) {
          this.editConfigMap[resourceTypes] = editConfig;
      }
      this.spaMapping.map(resourceTypes, innerClass);
  };

  get(resourceType) {
    return this.spaMapping.get(resourceType);
  }

  getEditConfig(type) {
    return this.editConfigMap[type];
  }
}

let componentMapping = new ComponentMappingWithConfig(SPAComponentMapping);

function MapTo(resourceTypes) {
    return (clazz, editConfig = null) => {
        return componentMapping.map(resourceTypes, clazz, editConfig);
    };
}


export { componentMapping as ComponentMapping, MapTo };

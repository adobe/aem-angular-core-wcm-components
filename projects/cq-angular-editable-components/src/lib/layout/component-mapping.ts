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

import { ComponentMapping as SPAComponentMapping } from "@adobe/cq-spa-component-mapping";

export class ComponentMappingWithConfig {
  private editConfigMap:WeakMap<any, any>  = new WeakMap();

  constructor(private spaMapping:SPAComponentMapping) {}

  map(resourceTypes, clazz, editConfig = null) {
      let innerClass = clazz;

      if (editConfig) {
          this.editConfigMap.set(clazz, editConfig);
      }
      this.spaMapping.map(resourceTypes, innerClass);
  };

  get(resourceType) {
    return this.spaMapping.get(resourceType);
  }

  getEditConfig(component) {
    return this.editConfigMap.get(component);
  }
}

let componentMapping = new ComponentMappingWithConfig(SPAComponentMapping);

function MapTo(resourceTypes) {
    return (clazz, editConfig = null) => {
        return componentMapping.map(resourceTypes, clazz, editConfig);
    };
}


export { componentMapping as ComponentMapping, MapTo };

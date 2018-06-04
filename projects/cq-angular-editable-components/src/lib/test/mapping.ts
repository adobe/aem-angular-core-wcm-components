import { MapTo } from "../layout/component-mapping";

import { Component1 } from "./test-comp1.component";
import { Component2 } from "./test-comp2.component";
import { Component3 } from "./test-comp3.component";
import { AEMResponsiveGridComponent } from "../layout/aem-responsivegrid/aem-responsivegrid.component";

MapTo("app/components/comp1")(Component1);
MapTo("app/components/comp2")(Component2);
MapTo("app/components/comp3")(Component3);
MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);

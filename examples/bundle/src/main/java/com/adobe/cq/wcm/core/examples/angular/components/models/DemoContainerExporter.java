package com.adobe.cq.wcm.core.examples.angular.components.models;

import com.adobe.cq.export.json.ContainerExporter;
import com.fasterxml.jackson.annotation.JsonInclude;


public interface DemoContainerExporter extends ContainerExporter {
    
    @JsonInclude
    boolean isFullWidth();

}

package com.adobe.cq.wcm.core.examples.angular.components.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;


@Model(adaptables = SlingHttpServletRequest.class, adapters = {LazyComponent.class, ComponentExporter.class}, resourceType = LazyComponent.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class LazyComponent implements ComponentExporter {
    
    public static final String RESOURCE_TYPE = "core-components-examples/wcm/angular/components/lazycomponent";
    
    @JsonInclude
    public String getText(){
        return "I am lazy loaded with code splitting!";
    }
    
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
    
}


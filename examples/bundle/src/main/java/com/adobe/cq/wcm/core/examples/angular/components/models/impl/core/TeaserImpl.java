package com.adobe.cq.wcm.core.examples.angular.components.models.impl.core;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Button;
import com.adobe.cq.wcm.core.components.models.Teaser;
import com.adobe.cq.wcm.core.examples.angular.components.models.AngularDynamicallyLoadable;
import lombok.experimental.Delegate;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.via.ResourceSuperType;


@Model(
        adaptables = SlingHttpServletRequest.class, adapters = {Teaser.class, ComponentExporter.class},
        resourceType = TeaserImpl.RESOURCE_TYPE
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class TeaserImpl implements Teaser, AngularDynamicallyLoadable {
    
    public static final String RESOURCE_TYPE = "core-components-examples/wcm/angular/components/teaser";
    
    
    @Delegate(types = Teaser.class,excludes = TeaserImpl.Excludes.class)
    @Self
    @Via(type = ResourceSuperType.class)
    Teaser delegate;
    
    @Override
    public String getAngularDynamicComponent() {
        return "TeaserV1Component";
    }
    
    private interface Excludes{
        String getExportedType();
    }
    
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
    
   
    
    
    
}

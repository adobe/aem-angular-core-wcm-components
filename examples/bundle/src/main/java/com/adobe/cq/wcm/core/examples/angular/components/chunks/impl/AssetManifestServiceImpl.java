package com.adobe.cq.wcm.core.examples.angular.components.chunks.impl;


import com.adobe.cq.wcm.core.examples.angular.components.chunks.AssetManifestService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.osgi.service.component.annotations.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;


@Component(service = AssetManifestService.class)
public class AssetManifestServiceImpl implements AssetManifestService {
    
    private static final String PATH_ANGULAR_MANIFEST = "/apps/core-components-examples/wcm/angular/clientlibs/angular-spacomponents/resources/stats.json";

    @Override
    public Map<String,String> getManifest(SlingHttpServletRequest request) throws IOException {
    
        final Resource assetManifestResource = request.getResourceResolver().getResource(PATH_ANGULAR_MANIFEST);
    
        if(assetManifestResource != null){
            InputStream file = assetManifestResource.adaptTo(InputStream.class);
            String fileString = IOUtils.toString(file);
        
        
            ObjectMapper objectMapper = new ObjectMapper();
            AngularStatsManifest manifest = objectMapper.readValue(fileString, AngularStatsManifest.class);
            Map<String,String> computed = new HashMap<>(manifest.getAssetsByChunkName().size());
        
            for(Iterator<Map.Entry<String,Object>> iterator = manifest.getAssetsByChunkName().entrySet().iterator(); iterator.hasNext();){
                Map.Entry<String,Object> entry = iterator.next();
            
                Object val = entry.getValue();
            
                if(val instanceof String){
                    String keySuffix = getExtensionSuffix(entry.getValue().toString());
                    computed.put(entry.getKey() + keySuffix, manifest.getPublicPath() + entry.getValue().toString());
                }else if(val instanceof List){
                
                    List subScripts = (List) entry.getValue();
                
                    for(Object subScript: subScripts){
                        final String value = subScript.toString();
                        String keySuffix = getExtensionSuffix(value);
                        computed.put(entry.getKey() + keySuffix, manifest.getPublicPath() + value);
                    }
                
                }
            }
            return computed;
        
        }else{
            throw new IOException("Could not load manifest file!");
        }
      
    }
    
    private String getExtensionSuffix(String value){
        return "." + FilenameUtils.getExtension(value);
    }
    
}
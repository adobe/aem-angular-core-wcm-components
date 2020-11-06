/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe
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
    
    private static final String PATH_ANGULAR_SPA_MANIFEST = "/apps/core-components-examples/wcm/angular/clientlibs/angular-spacomponents/resources/stats.json";
    private static final String PATH_ANGULAR_WEB_MANIFEST = "/apps/core-components-examples/wcm/angular/clientlibs/angular-webcomponents/resources/stats.json";

    @Override
    public Map<String,String> getManifest(SlingHttpServletRequest request) throws IOException {
    
        String targetPath = (request.getResource().getPath().startsWith("/content/aem-angular-core-webcomponents-example")) ? PATH_ANGULAR_WEB_MANIFEST : PATH_ANGULAR_SPA_MANIFEST;
        final Resource assetManifestResource = request.getResourceResolver().getResource(targetPath);
    
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

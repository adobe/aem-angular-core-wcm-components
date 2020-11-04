package com.adobe.cq.wcm.core.examples.angular.components.models;

import com.fasterxml.jackson.annotation.JsonInclude;


public interface AngularDynamicallyLoadable {
    @JsonInclude
    String getAngularDynamicComponent();
}

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

import { ComponentMapping, MapTo } from "./component-mapping";

describe("Component Mapping", () => {

  it("stores configuration", () => {
    let Component1 = function(){};
    let Component2 = function() {};
    let editConfig1 = { some: "1" };
    let editConfig2 = { some: "2" };

    MapTo("component1")(Component1, editConfig1);
    MapTo("component2")(Component2, editConfig2);

    expect(ComponentMapping.get("component1")).toBe(Component1);
    expect(ComponentMapping.get("component2")).toBe(Component2);
    expect(ComponentMapping.getEditConfig(ComponentMapping.get("component1"))).toBe(editConfig1);
    expect(ComponentMapping.getEditConfig(ComponentMapping.get("component2"))).toBe(editConfig2);

  });
});

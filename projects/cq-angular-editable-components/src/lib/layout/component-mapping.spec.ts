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

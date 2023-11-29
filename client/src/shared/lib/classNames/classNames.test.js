import { classNames } from "./classNames";

describe("classNames", () => {
  test("returns the base class when no modifiers or additional classes are provided", () => {
    expect(classNames("base-class", {}, [])).toBe("base-class");
  });

  test("includes modifiers in the output when they are true", () => {
    expect(classNames("base-class", { modifier1: true, modifier2: false }, [])).toBe("base-class modifier1");
  });

  test("filters out modifiers with false values", () => {
    expect(classNames("base-class", { modifier1: false, modifier2: true }, [])).toBe("base-class modifier2");
  });

  test("includes additional classes in the output", () => {
    expect(classNames("base-class", {}, ["additional-class1", "additional-class2"])).toBe("base-class additional-class1 additional-class2");
  });

  test("handles an empty additional class", () => {
    expect(classNames("base-class", {}, [""])).toBe("base-class");
  });

  test("filters out duplicate additional classes", () => {
    expect(classNames("base-class", {}, ["additional-class", "additional-class"])).toBe("base-class additional-class additional-class");
  });

  test("filters out non-boolean modifier values", () => {
    expect(classNames("base-class", { modifier1: "string", modifier2: 123 }, [])).toBe("base-class modifier1 modifier2");
  });

  test("handles all falsy values in modifiers and additional classes", () => {
    expect(classNames("", { modifier1: false, modifier2: 0 }, [null, undefined, false])).toBe("");
  });

  test("handles all falsy values in additional classes", () => {
    expect(classNames("base-class", {}, [null, undefined, false])).toBe("base-class");
  });

  test("handles edge case of an empty additional class", () => {
    expect(classNames("base-class", {}, [""])).toBe("base-class");
  });

});

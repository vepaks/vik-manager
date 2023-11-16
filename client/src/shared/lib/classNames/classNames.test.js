import { classNames } from "./classNames";

describe("classNames", () => {
  test("test", () => {
    expect(classNames("cls", {}, [])).toBe("cls");
  });
});

describe("classNames", () => {
  test("test", () => {
    expect(classNames("cls", {red: true}, [])).toBe("cls red");
  });
});

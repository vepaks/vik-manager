import { classNames } from "./classNames";

describe("classNames", () => {
  test("test", () => {
    expect(classNames("cls", {}, [])).toBe("cls");
  });
});

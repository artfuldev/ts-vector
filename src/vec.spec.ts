import { expect } from "chai";
import { vec } from "./vec";

describe("vec", () => {
  describe("given items", () => {
    const items = [1, 2, 3];

    it("should create a vector", () => {
      expect(vec(...items)).to.deep.equal(items);
    });
  });
});

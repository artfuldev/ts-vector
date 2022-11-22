import { expect } from "chai";
import { vector } from "./vector";

describe("vector", () => {
  describe("given a size", () => {
    const size = 2;

    describe("given an array of equal size", () => {
      const array = [1, 2];

      it("should create a vector", () => {
        expect(vector(size)(array)).to.not.be.null;
      });

      it("should have the items", () => {
        expect(vector(size)(array)).to.deep.equal(array);
      });
    });

    describe("given an array of different size", () => {
      const array = [1, 2, 3];

      it("should not create a vector", () => {
        expect(vector(size)(array)).to.be.null;
      });
    });
  });
});

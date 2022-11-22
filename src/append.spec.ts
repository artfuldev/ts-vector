import { expect } from "chai";
import { append } from "./append";
import { vec } from "./vec";

describe("append", () => {
  describe("given a suffix", () => {
    const suffix = vec(4, 5, 6);

    describe("given a vector", () => {
      const items = vec(1, 2, 3);

      it("should append the suffix to items", () => {
        expect(append(suffix)(items)).to.deep.equal([...items, ...suffix]);
      });

      it("should leave suffix intact", () => {
        const previous_suffix = suffix;
        append(suffix)(items);
        expect(suffix).to.deep.equal(previous_suffix);
      });

      it("should leave items intact", () => {
        const previous_items = items;
        append(suffix)(items);
        expect(items).to.deep.equal(previous_items);
      });
    });
  });
});

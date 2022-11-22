import { Nullable, TupleOf } from "./tuple";

/**
 * A fixed-length array of values, inferred when possible.
 */
export type Vector<A, S extends number> = TupleOf<A, S> & { length: S };

/**
 * Creates a vector from an array of values.
 * @param size The expected size of the vector.
 * @returns A constructor that can optionally return a vector of the specified
 * size from any array.
 * @example
 * const vector3 = vector(3);
 * // null
 * vector3([1, 2, 3, 4]);
 * // [1, 2, 3]
 * vector3([1, 2, 3]);
 */
export const vector =
  <S extends number>(size: S) =>
  <A>(ras: readonly A[]): Nullable<Vector<A, S>> =>
    [ras]
      .filter((as) => as.length === size)
      .map<Vector<A, S>>((as) => as as Vector<A, S>)
      .pop() ?? null;

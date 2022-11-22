import { Sum } from "./tuple";
import { Vector } from "./vector";

/**
 * Appends values from a source vector to a target vector.
 * @param source The source vector.
 * @returns A function that appends the source vector to any target vector.
 * 
 * @example
 * const a = vec(1, 2, 3)
 * const b = vec(4, 5, 6)
 * // [1, 2, 3, 4, 5, 6]
 * const x = append(b)(a);
 */
export const append =
  <A, T extends number>(source: Vector<A, T>) =>
  <S extends number>(target: Vector<A, S>): Vector<A, Sum<T, S>> =>
    target.concat(source) as Vector<A, Sum<T, S>>;

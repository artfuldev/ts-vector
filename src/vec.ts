import { Unwrap, Size } from "./tuple";
import { Vector } from "./vector";

/**
 * Creates a vector from values.
 * @param as Values that belong to this vector.
 * @returns A vector containing the provided values.
 * @example
 * // [1, 2, 3]: Vector<number, 3>
 * vec(1, 2, 3);
 */
export const vec = <T extends any[]>(...as: T): Vector<Unwrap<T>, Size<T>> =>
  as as Vector<Unwrap<T>, Size<T>>;

/**
 * Creates an object containing key-value pairs from the first object that are different
 * from the second object, based on a custom comparison function.
 *
 * @param obj1 - The source object to check for differences.
 * @param obj2 - The object to compare against.
 * @param comparator - Function that determines if two values are equal.
 * @returns A new object containing only the different key-value pairs from obj1.
 * @throws When either input is not a non-null object, or comparator is not a function.
 *
 * @example
 * // Simple value comparison
 * const obj1 = { a: 1, b: 2, c: 3 };
 * const obj2 = { a: 1, b: 4, c: 3 };
 * differenceBy(obj1, obj2, (a, b) => a === b);
 * // => { b: 2 }
 *
 * @note Keys that exist only in the first object are included in the result.
 */
export function differenceBy<T extends Record<string, any>>(
  obj1: T,
  obj2: T,
  comparator: (a: any, b: any) => boolean,
): Partial<T> {
  if (typeof obj1 !== 'object' || obj1 === null) {
    throw new TypeError('First argument must be a non-null object');
  }
  if (typeof obj2 !== 'object' || obj2 === null) {
    throw new TypeError('Second argument must be a non-null object');
  }
  if (typeof comparator !== 'function') {
    throw new TypeError('Comparator must be a function');
  }

  return Object.fromEntries(
    Object.entries(obj1).filter(
      ([key, value]) => !comparator(value, obj2[key]),
    ),
  ) as Partial<T>; // Explicitly cast the result to Partial<T>
}

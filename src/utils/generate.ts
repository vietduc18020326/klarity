import { snakeCase, transform } from "lodash";

/**
 * Type helper để auto-generate slug mapping type từ object keys
 * Converts: "kan-sustain" -> KAN_SUSTAIN
 */
export type SlugMap<T extends Record<string, any>> = {
  readonly [K in keyof T as Uppercase<
    K extends string ? K : never
  > extends `${infer P}-${infer R}`
    ? `${Uppercase<P>}_${Uppercase<R>}`
    : Uppercase<K extends string ? K : never>]: K;
};

/**
 * Generate slug constants từ object keys
 * @param sourceObject - Object có keys là slugs (e.g., "kan-sustain", "kan-perform")
 * @returns Object với keys là UPPERCASE_SNAKE_CASE và values là original keys
 *
 * @example
 * const PRODUCT_MAP = { "kan-sustain": {...}, "kan-perform": {...} };
 * const PRODUCT_SLUG = generateSlugConstants(PRODUCT_MAP);
 * // Result: { KAN_SUSTAIN: "kan-sustain", KAN_PERFORM: "kan-perform" }
 */
export function generateSlugConstants<T extends Record<string, any>>(
  sourceObject: T
): SlugMap<T> {
  return transform(
    sourceObject,
    (result, value, key) => {
      result[snakeCase(key).toUpperCase()] = key;
    },
    {} as Record<string, string>
  ) as SlugMap<T>;
}

/**
 * Create type-safe slug constants với TypeScript inference
 * @param sourceObject - Source object
 * @returns Tuple [slugConstants, typeHelper]
 */
export function createSlugMapping<T extends Record<string, any>>(
  sourceObject: T
) {
  const slugConstants = generateSlugConstants(sourceObject);
  type SlugType = keyof T;

  return {
    constants: slugConstants,
    type: {} as SlugType, // Type helper for inference
  };
}

/**
 * Exhaustiveness helper for discriminated-union switch statements.
 * If a new variant is added without a matching case, TypeScript flags
 * the call site at compile time; if reached at runtime, throws.
 */
export function assertNever(value: never): never {
  throw new Error(`Unhandled variant: ${JSON.stringify(value)}`);
}

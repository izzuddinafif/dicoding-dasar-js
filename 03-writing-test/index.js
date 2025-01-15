function sum(a, b) {
  if (typeof a !== 'number' | typeof b !== 'number' ) throw new Error("a and b should be of type Numbser")
  return a + b;
}

export { sum };

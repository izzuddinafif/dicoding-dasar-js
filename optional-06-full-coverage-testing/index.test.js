import { describe, it, expect } from "bun:test"
import sum from "./index.js"

// describe('sum function', () => {
//     it('should return the sum of two numbers', () => {
//         expect(sum(2,3)).toBe(5);
//     })
//     it('should throw an Error if one of the inputs is not a number', ()=> {
//         expect(sum('3',3)).toBe(0)
//     })
//     it('should not handle negative numbers', ()=> {
//         expect(sum(-2,-3)).toBe(0)
//     })
// })

describe("sum function", () => {
    // Test for valid positive numbers
    it("should return the correct sum of two positive numbers", () => {
      expect(sum(2, 3)).toBe(5);
      expect(sum(0, 0)).toBe(0);
      expect(sum(10, 20)).toBe(30);
    });
  
    // Test for non-number inputs
    it("should return 0 if any input is not a number", () => {
      expect(sum("2", 3)).toBe(0);
      expect(sum(2, "3")).toBe(0);
      expect(sum(null, 3)).toBe(0);
      expect(sum(2, undefined)).toBe(0);
      expect(sum({}, 3)).toBe(0);
      expect(sum([], 3)).toBe(0);
    });
  
    // Test for negative numbers
    it("should return 0 if any input is a negative number", () => {
      expect(sum(-1, 5)).toBe(0);
      expect(sum(5, -1)).toBe(0);
      expect(sum(-5, -5)).toBe(0);
    });
  
    // Edge case test
    it("should handle edge cases with large numbers", () => {
      expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    });
  });
  
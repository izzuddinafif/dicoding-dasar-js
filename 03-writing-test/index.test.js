import { describe, it, expect } from "bun:test"
import { sum } from "./index.js"

describe('sum function', () => {
    it('should return the sum of two numbers', () => {
        expect(sum(2,3)).toBe(5);
    })
    it('should throw an Error if one of the inputs is not a number', ()=> {
        expect(() => {sum('2',3)}).toThrow(Error)
    })
    it('should handle negative numbers', ()=> {
        expect(sum(-2,-3)).toBe(-5)
    })
})
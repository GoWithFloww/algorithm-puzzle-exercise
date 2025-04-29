import { describe, it, expect } from 'vitest'
import { pairSumUnsorted } from './pair-sum-unsorted'

// Assuming the file exists

describe('pairSumUnsorted', () => {
    it('should find two numbers that add up to the target', () => {
        expect(pairSumUnsorted([2, 7, 11, 15], 9)).toEqual([0, 1])
    })

    it('should handle negative numbers', () => {
        expect(pairSumUnsorted([-1, -3, 5, 7], 4)).toEqual([0, 2])
    })

    it('should handle duplicate numbers and find the first valid pair', () => {
        // The map will store {3: 0, 5: 1}. When it reaches index 2 (value 3),
        // complement is 6 - 3 = 3. Map has 3 at index 0. Returns [0, 2].
        expect(pairSumUnsorted([3, 5, 3, 7], 6)).toEqual([0, 2])
    })

    it('should return an empty array if no solution exists', () => {
        expect(pairSumUnsorted([1, 2, 3, 4], 10)).toEqual([])
    })

    it('should return an empty array for an empty input array', () => {
        expect(pairSumUnsorted([], 10)).toEqual([])
    })
})

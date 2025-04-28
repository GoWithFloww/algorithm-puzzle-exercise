import { describe, it, expect } from 'vitest'
import { pairSum } from './pair-sum'
import { tripletSum } from './triplet-sum'

describe('pairSum', () => {
    it('should find two numbers that add up to the target', () => {
        expect(pairSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    })

    it('should handle numbers that are the same', () => {
        expect(pairSum([3, 3], 6)).toEqual([0, 1])
    })

    it('should handle negative numbers', () => {
        expect(pairSum([-1, -3, 5, 7], 4)).toEqual([0, 2])
    })

    it('should handle empty array', () => {
        expect(pairSum([], 10)).toEqual([])
    })

    it('should handle no solution', () => {
        expect(pairSum([1, 2, 3, 4], 10)).toEqual([])
    })
})

describe('tripletSum', () => {
    it('should find unique triplets that sum to zero', () => {
        const nums = [-1, 0, 1, 2, -1, -4]
        expect(tripletSum(nums)).toEqual(
            expect.arrayContaining([
                [-1, -1, 2],
                [-1, 0, 1],
            ])
        )
        expect(tripletSum(nums).length).toBe(2)
    })

    it('should handle duplicates correctly', () => {
        const nums = [-2, 0, 1, 1, 2]
        expect(tripletSum(nums)).toEqual(
            expect.arrayContaining([
                [-2, 0, 2],
                [-2, 1, 1],
            ])
        )
        expect(tripletSum(nums).length).toBe(2)
    })

    it('should handle array with all zeros', () => {
        const nums = [0, 0, 0, 0]
        expect(tripletSum(nums)).toEqual([[0, 0, 0]])
    })

    it('should return an empty array if no triplets sum to zero', () => {
        const nums = [1, 2, 3, 4]
        expect(tripletSum(nums)).toEqual([])
    })

    it('should return an empty array for empty or small input', () => {
        expect(tripletSum([])).toEqual([])
        expect(tripletSum([1, 2])).toEqual([])
    })
})

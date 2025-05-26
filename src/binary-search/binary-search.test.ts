import { describe, expect, it } from "vitest";
import { findInsertionIndex } from "./find-insertion-index";
import { firstAndLastOccurrenceOfNumber } from "./first-and-last-occurrence-of-number";


describe('findInsertionIndex', () => {
    it('should return correct index when target number in the array', () => {
        const nums = [2, 4, 7, 19, 21, 88]
        const target = 21
        expect(findInsertionIndex(nums, target)).toEqual(4)
    })
    it('empty array', () => {
        expect(findInsertionIndex([], 5)).toEqual(0)
    })
    it('insert at start', () => {
        expect(findInsertionIndex([10, 20, 30], 5)).toEqual(0)
    })
    it('insert at end', () => {
        expect(findInsertionIndex([10, 20, 30], 40)).toEqual(3)
    })
    it('insert in middle', () => {
        expect(findInsertionIndex([1, 3, 5, 7], 4)).toEqual(2)
    })
})

describe('firstAndLastOccurrenceOfNumber', () => {
    it('return first and last occurrences of a number', () => {
        expect(firstAndLastOccurrenceOfNumber([1, 3, 4, 4, 4, 6, 11], 4)).toEqual([2, 4])
    })
    it('target number in the first index', () => {
        expect(firstAndLastOccurrenceOfNumber([4, 4, 6, 21, 54, 99], 4)).toEqual([0, 1])
    })
    it('target at end', () => {
        expect(firstAndLastOccurrenceOfNumber([1, 2, 3, 4], 4)).toEqual([3, 3])
    })
    it('all elements same', () => {
        expect(firstAndLastOccurrenceOfNumber([5, 5, 5, 5], 5)).toEqual([0, 3])
    })
    it('no occurrence', () => {
        expect(firstAndLastOccurrenceOfNumber([1, 2, 3], 4)).toEqual([-1, -1])
    })
    it('single element', () => {
        expect(firstAndLastOccurrenceOfNumber([7], 7)).toEqual([0, 0])
    })
})
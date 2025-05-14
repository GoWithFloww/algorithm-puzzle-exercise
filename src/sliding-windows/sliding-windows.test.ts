import { describe, it, expect } from 'vitest'
import { findAnagrams } from './substring-anagram'

describe('findAnagrams', () => {
    it('should find anagrams in a standard case', () => {
        expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6])
    })

    it('should return empty array if no anagrams are found', () => {
        expect(findAnagrams('abab', 'xyz')).toEqual([])
    })

    it('should return empty array if s is shorter than target', () => {
        expect(findAnagrams('a', 'ab')).toEqual([])
    })

    it('should find multiple overlapping anagrams', () => {
        expect(findAnagrams('abacbabc', 'abc')).toEqual([1, 2, 3, 5])
    })

    it('should handle strings with all same characters', () => {
        expect(findAnagrams('aaaaa', 'aa')).toEqual([0, 1, 2, 3])
    })
})

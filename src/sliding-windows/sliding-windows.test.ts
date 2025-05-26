import { describe, it, expect } from 'vitest'
import { longestSubstringWithUniqueChar } from './longest-substring-with-unique-char'
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

describe('longestSubstringWithUniqueChar', () => {
    const cases: [string, number][] = [
        ['', 0],
        ['abcabcbb', 3],
        ['bbbbb', 1],
        ['pwwkew', 3],
        ['au', 2],
    ]
    cases.forEach(([s, want]) => {
        it(`${s}->${want}`, () => {
            expect(longestSubstringWithUniqueChar(s)).toBe(want)
        })
    })
})

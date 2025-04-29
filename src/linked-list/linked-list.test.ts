import { describe, it, expect } from 'vitest'
import { createLinkedListFromData, listToArray } from '../utils/types'
import { linkedListReversal } from './linked-list-reversal'

describe('linkedListReversal', () => {
    it('should return null for an empty list', () => {
        const head = null
        const reversed = linkedListReversal(head)
        expect(reversed).toBeNull()
        // Optional: Check array representation too
        expect(listToArray(reversed)).toEqual([])
    })

    it('should return the same node for a single-node list', () => {
        const head = createLinkedListFromData([1])
        const reversed = linkedListReversal(head)
        expect(listToArray(reversed)).toEqual([1])
    })

    it('should reverse a two-node list', () => {
        const head = createLinkedListFromData([1, 2])
        const reversed = linkedListReversal(head)
        expect(listToArray(reversed)).toEqual([2, 1])
    })

    it('should reverse a list with multiple nodes', () => {
        const head = createLinkedListFromData([1, 2, 3, 4, 5])
        const reversed = linkedListReversal(head)
        expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1])
    })

    it('should reverse a list with string values', () => {
        const head = createLinkedListFromData(['a', 'b', 'c'])
        const reversed = linkedListReversal(head)
        expect(listToArray(reversed)).toEqual(['c', 'b', 'a'])
    })
})

import { describe, it, expect } from 'vitest'
import { createLinkedListFromData, listToArray } from '../utils/types'
import { linkedListIntersection } from './linked-list-intersection'
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

describe('linkedListIntersection', () => {
    it('should return the intersection node when lists intersect', () => {
        const commonList = createLinkedListFromData([3, 4, 5])
        const headA = createLinkedListFromData([1, 2])
        let currentA = headA
        while (currentA?.next) {
            currentA = currentA.next
        }
        if (currentA) currentA.next = commonList

        const headB = createLinkedListFromData([6, 7])
        let currentB = headB
        while (currentB?.next) {
            currentB = currentB.next
        }
        if (currentB) currentB.next = commonList

        const intersectionNode = commonList

        if (headA && headB) {
            expect(linkedListIntersection(headA, headB)).toBe(intersectionNode)
        } else {
            throw new Error('Test setup failed')
        }
    })

    it('should return null when lists do not intersect', () => {
        const headA = createLinkedListFromData([1, 2, 3])
        const headB = createLinkedListFromData([4, 5, 6])
        if (headA && headB) {
            expect(linkedListIntersection(headA, headB)).toBeNull()
        } else {
            throw new Error('Test setup failed')
        }
    })

    it('should return the intersection node when lists are identical', () => {
        const headA = createLinkedListFromData([1, 2, 3])
        if (headA) {
            expect(linkedListIntersection(headA, headA)).toBe(headA)
        } else {
            throw new Error('Test setup failed')
        }
    })

    it('should handle lists of different lengths with intersection', () => {
        const commonList = createLinkedListFromData([5, 6, 7])
        const headA = createLinkedListFromData([10, 11])
        let currentA = headA
        while (currentA?.next) {
            currentA = currentA.next
        }
        if (currentA) currentA.next = commonList

        const headB = createLinkedListFromData([1, 2, 3])
        let currentB = headB
        while (currentB?.next) {
            currentB = currentB.next
        }
        if (currentB) currentB.next = commonList

        const intersectionNode = commonList

        if (headA && headB) {
            expect(linkedListIntersection(headA, headB)).toBe(intersectionNode)
        } else {
            throw new Error('Test setup failed')
        }
    })

    it('should handle lists of different lengths without intersection', () => {
        const headA = createLinkedListFromData([1, 2])
        const headB = createLinkedListFromData([3, 4, 5, 6])
        if (headA && headB) {
            expect(linkedListIntersection(headA, headB)).toBeNull()
        } else {
            throw new Error('Test setup failed')
        }
    })
})

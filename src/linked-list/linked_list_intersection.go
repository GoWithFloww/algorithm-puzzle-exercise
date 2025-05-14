package linkedlist

import "algorithm-puzzle-exercise/src/utils"

func LinkedListIntersection[T comparable](headA, headB *utils.ListNode[T]) *utils.ListNode[T] {
	if headA == nil || headB == nil {
		return nil
	}

	pA := headA
	pB := headB

	for pA != pB {
		if pA == nil {
			pA = headB
		} else {
			pA = pA.Next
		}

		if pB == nil {
			pB = headA
		} else {
			pB = pB.Next
		}
	}

	return pA
}

package linkedlist

import (
	utils "algorithm-puzzle-exercise/src/utils"
)

func LinkedListReversal[T any](head *utils.ListNode[T]) *utils.ListNode[T] {
	if head == nil || head.Next == nil {
		return head
	}

	var prevNode *utils.ListNode[T] = nil
	currentNode := head

	for currentNode != nil {
		nextNode := currentNode.Next

		currentNode.Next = prevNode

		prevNode = currentNode
		currentNode = nextNode
	}

	return prevNode
}

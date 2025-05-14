package utils

type ListNode[T any] struct {
	Value T
	Next  *ListNode[T]
}

func CreateNode[T any](value T) *ListNode[T] {
	return &ListNode[T]{
		Value: value,
		Next:  nil,
	}
}

func CreateLinkedListFromData[T any](items []T) *ListNode[T] {
	if len(items) == 0 {
		return nil
	}

	head := CreateNode(items[0])
	current := head

	for i := 1; i < len(items); i++ {
		current.Next = CreateNode(items[i])
		current = current.Next
	}

	return head
}

func ListToSlice[T any](head *ListNode[T]) []T {
	var arr []T
	current := head
	for current != nil {
		arr = append(arr, current.Value)
		current = current.Next
	}
	// Return empty slice, not nil slice, if list was empty for consistent comparison
	if arr == nil {
		return []T{}
	}
	return arr
}

// DListNode represents a node in a doubly linked list.
type DListNode[T any] struct {
	Value T
	Prev  *DListNode[T]
	Next  *DListNode[T]
}

// CreateDNode creates a new doubly linked list node with the given value.
func CreateDNode[T any](value T) *DListNode[T] {
	return &DListNode[T]{
		Value: value,
		Prev:  nil,
		Next:  nil,
	}
}

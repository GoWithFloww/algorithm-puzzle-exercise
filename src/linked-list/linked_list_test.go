package linkedlist_test

import (
	linkedlist "algorithm-puzzle-exercise/src/linked-list"
	utils "algorithm-puzzle-exercise/src/utils"
	"reflect"
	"testing"
)

func getLastNode[T any](head *utils.ListNode[T]) *utils.ListNode[T] {
	if head == nil {
		return nil
	}
	current := head
	for current.Next != nil {
		current = current.Next
	}
	return current
}

func TestLinkedListReversal_Int(t *testing.T) {
	testCases := []struct {
		name     string
		input    []int
		expected []int
	}{
		{
			name:     "empty list",
			input:    []int{},
			expected: []int{},
		},
		{
			name:     "single node list",
			input:    []int{1},
			expected: []int{1},
		},
		{
			name:     "two node list",
			input:    []int{1, 2},
			expected: []int{2, 1},
		},
		{
			name:     "multiple node list",
			input:    []int{1, 2, 3, 4, 5},
			expected: []int{5, 4, 3, 2, 1},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			head := utils.CreateLinkedListFromData[int](tc.input)
			reversedHead := linkedlist.LinkedListReversal[int](head)
			resultSlice := utils.ListToSlice[int](reversedHead)

			if !reflect.DeepEqual(resultSlice, tc.expected) {
				t.Errorf("LinkedListReversal[int]() = %v; want %v", resultSlice, tc.expected)
			}
		})
	}
}

func TestLinkedListReversal_String(t *testing.T) {
	testCases := []struct {
		name     string
		input    []string
		expected []string
	}{
		{
			name:     "string values",
			input:    []string{"a", "b", "c"},
			expected: []string{"c", "b", "a"},
		},
		// Add more string test cases if needed
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			head := utils.CreateLinkedListFromData[string](tc.input)
			reversedHead := linkedlist.LinkedListReversal[string](head)
			resultSlice := utils.ListToSlice[string](reversedHead)

			if !reflect.DeepEqual(resultSlice, tc.expected) {
				t.Errorf("LinkedListReversal[string]() = %v; want %v", resultSlice, tc.expected)
			}
		})
	}
}

func TestLinkedListIntersection(t *testing.T) {
	commonNode1 := utils.CreateLinkedListFromData([]int{3, 4, 5})
	headA1 := utils.CreateLinkedListFromData([]int{1, 2})
	lastA1 := getLastNode(headA1)
	if lastA1 != nil {
		lastA1.Next = commonNode1
	}
	headB1 := utils.CreateLinkedListFromData([]int{6, 7})
	lastB1 := getLastNode(headB1)
	if lastB1 != nil {
		lastB1.Next = commonNode1
	}
	expectedNode1 := commonNode1

	headA2 := utils.CreateLinkedListFromData([]int{1, 2, 3})
	headB2 := utils.CreateLinkedListFromData([]int{4, 5, 6})
	expectedNode2 := (*utils.ListNode[int])(nil)

	headA3 := utils.CreateLinkedListFromData([]int{10, 20, 30})
	headB3 := headA3
	expectedNode3 := headA3

	commonNode4 := utils.CreateLinkedListFromData([]int{5, 6})
	headA4 := utils.CreateLinkedListFromData([]int{1, 2, 3})
	lastA4 := getLastNode(headA4)
	if lastA4 != nil {
		lastA4.Next = commonNode4
	}
	headB4 := utils.CreateLinkedListFromData([]int{9})
	lastB4 := getLastNode(headB4)
	if lastB4 != nil {
		lastB4.Next = commonNode4
	}
	expectedNode4 := commonNode4

	headA5 := utils.CreateLinkedListFromData([]int{1, 2})
	headB5 := utils.CreateLinkedListFromData([]int{3, 4, 5})
	expectedNode5 := (*utils.ListNode[int])(nil)

	testCases := []struct {
		name     string
		headA    *utils.ListNode[int]
		headB    *utils.ListNode[int]
		expected *utils.ListNode[int]
	}{
		{"Intersection Exists", headA1, headB1, expectedNode1},
		{"No Intersection", headA2, headB2, expectedNode2},
		{"Identical Lists", headA3, headB3, expectedNode3},
		{"Different Lengths Intersection", headA4, headB4, expectedNode4},
		{"Different Lengths No Intersection", headA5, headB5, expectedNode5},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			got := linkedlist.LinkedListIntersection(tc.headA, tc.headB)
			if got != tc.expected {
				t.Errorf("LinkedListIntersection() pointers differ: got %p, want %p", got, tc.expected)
			}
		})
	}
}

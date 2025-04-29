package linkedlist_test

import (
	linkedlist "algorithm-puzzle-exercise/src/linked-list"
	utils "algorithm-puzzle-exercise/src/utils"
	"reflect"
	"testing"
)

func TestLinkedListReversal(t *testing.T) {
	testCases := []struct {
		name     string
		input    []interface{} // Use interface{} to match CreateLinkedListFromData
		expected []interface{}
	}{
		{
			name:     "empty list",
			input:    []interface{}{},
			expected: []interface{}{},
		},
		{
			name:     "single node list",
			input:    []interface{}{1},
			expected: []interface{}{1},
		},
		{
			name:     "two node list",
			input:    []interface{}{1, 2},
			expected: []interface{}{2, 1},
		},
		{
			name:     "multiple node list",
			input:    []interface{}{1, 2, 3, 4, 5},
			expected: []interface{}{5, 4, 3, 2, 1},
		},
		{
			name:     "string values",
			input:    []interface{}{"a", "b", "c"},
			expected: []interface{}{"c", "b", "a"},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			// Need to specify type for CreateLinkedListFromData
			head := utils.CreateLinkedListFromData[interface{}](tc.input)
			// Need to specify type for LinkedListReversal
			reversedHead := linkedlist.LinkedListReversal[interface{}](head)
			resultSlice := utils.ListToSlice[interface{}](reversedHead)

			if !reflect.DeepEqual(resultSlice, tc.expected) {
				t.Errorf("LinkedListReversal() = %v; want %v", resultSlice, tc.expected)
			}
		})
	}
}

package hashmapsandsets_test // Use _test package convention

import (
	hashmapsandsets "algorithm-puzzle-exercise/src/hashmaps-and-sets" // Import the package to test
	"reflect"
	"testing"
)

func TestPairSumUnsorted(t *testing.T) {
	testCases := []struct {
		name     string
		nums     []int
		target   int
		expected []int
	}{
		{
			name:     "should find two numbers that add up to the target",
			nums:     []int{2, 7, 11, 15},
			target:   9,
			expected: []int{0, 1},
		},
		{
			name:     "should handle negative numbers",
			nums:     []int{-1, -3, 5, 7},
			target:   4,
			expected: []int{0, 2},
		},
		{
			name:     "should handle duplicate numbers and find the first valid pair",
			nums:     []int{3, 5, 3, 7},
			target:   6,
			expected: []int{0, 2},
		},
		{
			name:     "should return an empty slice if no solution exists",
			nums:     []int{1, 2, 3, 4},
			target:   10,
			expected: []int{},
		},
		{
			name:     "should return an empty slice for an empty input slice",
			nums:     []int{},
			target:   10,
			expected: []int{},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			result := hashmapsandsets.PairSumUnsorted(tc.nums, tc.target)
			// Use reflect.DeepEqual for slice comparison
			// Note: Order matters in the expected result for this specific algorithm
			if !reflect.DeepEqual(result, tc.expected) {
				t.Errorf("PairSumUnsorted(%v, %d) = %v; want %v", tc.nums, tc.target, result, tc.expected)
			}
		})
	}
}

package twopointer_test

import (
	twopointer "algorithm-puzzle-exercise/src/two-pointer"
	"reflect"
	"sort" // Import sort package
	"testing"
)

// Helper function to sort slice of slices for consistent comparison
func sortSlices(slices [][]int) {
	// Sort each inner slice
	for _, s := range slices {
		sort.Ints(s)
	}
	// Sort the outer slice based on the content of inner slices
	sort.Slice(slices, func(i, j int) bool {
		s1, s2 := slices[i], slices[j]
		len1, len2 := len(s1), len(s2)
		for k := 0; k < len1 && k < len2; k++ {
			if s1[k] < s2[k] {
				return true
			}
			if s1[k] > s2[k] {
				return false
			}
		}
		return len1 < len2 // Shorter slice comes first if prefixes match
	})
}

func TestPairSum(t *testing.T) {
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
			name:     "should handle numbers that are the same",
			nums:     []int{3, 3},
			target:   6,
			expected: []int{0, 1},
		},
		{
			name:     "should handle negative numbers",
			nums:     []int{-1, -3, 5, 7},
			target:   4,
			expected: []int{0, 2}, // Because nums[0] + nums[2] = -1 + 5 = 4
		},
		{
			name:     "should handle empty array",
			nums:     []int{},
			target:   10,
			expected: []int{},
		},
		{
			name:     "should handle no solution",
			nums:     []int{1, 2, 3, 4},
			target:   10,
			expected: []int{},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			result := twopointer.PairSum(tc.nums, tc.target)
			if !reflect.DeepEqual(result, tc.expected) {
				t.Errorf("PairSum(%v, %d) = %v; want %v", tc.nums, tc.target, result, tc.expected)
			}
		})
	}
}

func TestTripletSum(t *testing.T) {
	testCases := []struct {
		name     string
		nums     []int
		expected [][]int
	}{
		{
			name:     "should find unique triplets that sum to zero",
			nums:     []int{-1, 0, 1, 2, -1, -4},
			expected: [][]int{{-1, -1, 2}, {-1, 0, 1}},
		},
		{
			name:     "should handle duplicates correctly",
			nums:     []int{-2, 0, 1, 1, 2},
			expected: [][]int{{-2, 1, 1}, {-2, 0, 2}},
		},
		{
			name:     "should handle array with all zeros",
			nums:     []int{0, 0, 0, 0},
			expected: [][]int{{0, 0, 0}},
		},
		{
			name:     "should return an empty array if no triplets sum to zero",
			nums:     []int{1, 2, 3, 4},
			expected: [][]int{},
		},
		{
			name:     "should return an empty array for empty or small input",
			nums:     []int{1, 2},
			expected: [][]int{},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			// Copy nums to avoid modifying the test case slice during sort
			numsCopy := make([]int, len(tc.nums))
			copy(numsCopy, tc.nums)

			result := twopointer.TripletSum(numsCopy)

			// Sort both result and expected slices for order-independent comparison
			sortSlices(result)
			sortSlices(tc.expected)

			if !reflect.DeepEqual(result, tc.expected) {
				t.Errorf("TripletSum(%v) = %v; want %v", tc.nums, result, tc.expected)
			}
		})
	}
}

package binarysearch_test

import (
	binarysearch "algorithm-puzzle-exercise/src/binary-search"
	"testing"
)

func TestFindInsertionIndex(t *testing.T) {
	cases := []struct {
		nums   []int
		target int
		want   int
	}{
		{[]int{2, 4, 7, 19, 21, 88}, 21, 4},
		{[]int{}, 5, 0},
		{[]int{10, 20, 30}, 5, 0},
		{[]int{10, 20, 30}, 40, 3},
		{[]int{1, 3, 5, 7}, 4, 2},
	}

	for _, c := range cases {
		if got := binarysearch.FindInsertionIndex(c.nums, c.target); got != c.want {
			t.Errorf("FindInsertionIndex(%v, %d) = %d; want %d", c.nums, c.target, got, c.want)
		}
	}
}

func TestFirstAndLastOccurrenceOfNumber(t *testing.T) {
	cases := []struct {
		nums   []int
		target int
		want   [2]int
	}{
		{[]int{1, 3, 4, 4, 4, 6, 11}, 4, [2]int{2, 4}},
		{[]int{4, 4, 6, 21, 54, 99}, 4, [2]int{0, 1}},
		{[]int{1, 2, 3, 4}, 4, [2]int{3, 3}},
		{[]int{5, 5, 5, 5}, 5, [2]int{0, 3}},
		{[]int{1, 2, 3}, 4, [2]int{-1, -1}},
		{[]int{7}, 7, [2]int{0, 0}},
	}
	for _, c := range cases {
		first, last := binarysearch.FirstAndLastOccurrenceOfNumber(c.nums, c.target)
		got := [2]int{first, last}
		if got != c.want {
			t.Errorf("FirstAndLastOccurrenceOfNumber(%v, %d) = %v; want %v", c.nums, c.target, got, c.want)
		}
	}
}

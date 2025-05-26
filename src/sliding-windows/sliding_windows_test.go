package slidingwindows_test

import (
	slidingwindows "algorithm-puzzle-exercise/src/sliding-windows"
	"reflect"
	"testing"
)

func TestFindAnagrams(t *testing.T) {
	testCases := []struct {
		s        string
		target   string
		expected []int
	}{
		{"cbaebabacd", "abc", []int{0, 6}},
		{"abab", "xyz", []int{}},
		{"a", "ab", []int{}},
		{"abacbabc", "abc", []int{1, 2, 3, 5}},
		{"aaaaa", "aa", []int{0, 1, 2, 3}},
	}

	for _, tc := range testCases {
		result := slidingwindows.FindAnagram(tc.s, tc.target)
		if !reflect.DeepEqual(result, tc.expected) {
			t.Errorf("FindAnagrams(%q, %q) = %v; want %v", tc.s, tc.target, result, tc.expected)
		}
	}
}

func TestLongestSubstringWithUniqueChar(t *testing.T) {
	cases := []struct {
		s    string
		want int
	}{
		{"", 0},
		{"abcabcbb", 3},
		{"bbbbb", 1},
		{"pwwkew", 3},
		{"au", 2},
	}
	for _, c := range cases {
		if got := slidingwindows.LongestSubstringWithUniqueChar(c.s); got != c.want {
			t.Errorf("got %d for %q, want %d", got, c.s, c.want)
		}
	}
}

package slidingwindows

func LongestSubstringWithUniqueChar(s string) int {
	runes := []rune(s)
	seen := make(map[rune]bool)
	left, maxLen := 0, 0

	for right, ch := range runes {
		for seen[ch] {
			delete(seen, runes[left])
			left++
		}

		seen[ch] = true
		if length := right - left + 1; length > maxLen {
			maxLen = length
		}
	}

	return maxLen
}

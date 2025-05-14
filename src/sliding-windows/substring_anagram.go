package slidingwindows

func FindAnagram(s string, target string) []int {
	result := make([]int, 0)

	if len(s) < len(target) {
		return result
	}

	targetCharFreq := make([]int, 26)
	for i := 0; i < len(target); i++ {
		targetCharFreq[target[i]-'a']++
	}
	windowCharFreq := make([]int, 26)
	isFreqEqual := func() bool {
		for i := 0; i < len(targetCharFreq); i++ {
			if targetCharFreq[i] != windowCharFreq[i] {
				return false
			}
		}
		return true
	}

	start := 0
	for end := 0; end < len(s); end++ {
		windowCharFreq[s[end]-'a']++

		if end-start+1 == len(target) {
			if isFreqEqual() {
				result = append(result, start)
			}
			windowCharFreq[s[start]-'a']--
			start++
		}
	}

	return result
}

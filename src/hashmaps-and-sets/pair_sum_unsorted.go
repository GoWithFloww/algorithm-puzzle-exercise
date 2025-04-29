package hashmapsandsets

func PairSumUnsorted(nums []int, target int) []int {
	numToIndex := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		complementNum := target - nums[i]
		if complementIndex, ok := numToIndex[complementNum]; ok {
			return []int{complementIndex, i}
		}
		numToIndex[nums[i]] = i
	}

	return []int{}
}

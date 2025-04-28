package twopointer

// Time complexity: O(n)
// Space complexity: O(1)
func PairSum(nums []int, target int) []int {
	start := 0
	end := len(nums) - 1

	for start < end {
		currentSum := nums[start] + nums[end]
		if currentSum < target {
			start++
		} else if currentSum > target {
			end--
		} else {
			return []int{start, end}
		}
	}

	return []int{}
}

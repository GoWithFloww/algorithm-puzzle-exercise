package binarysearch

func FindInsertionIndex(nums []int, target int) int {
	start := 0
	end := len(nums) - 1

	for start <= end {
		midIndex := (start + end) / 2

		if nums[midIndex] < target {
			start = midIndex + 1
		} else if nums[midIndex] > target {
			end = midIndex - 1
		} else {
			return midIndex
		}
	}

	return start
}
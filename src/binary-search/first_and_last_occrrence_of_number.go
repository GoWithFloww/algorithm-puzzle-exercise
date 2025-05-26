package binarysearch

func FirstAndLastOccurrenceOfNumber(nums []int, target int) (int, int) {
	lo := 0
	hi := len(nums) - 1

	left := -1
	right := -1

	for lo <= hi {
		mid := (lo + hi) / 2

		if nums[mid] < target {
			lo = mid + 1
		} else {
			if nums[mid] == target {
				left = mid
			}
			hi = mid - 1
		}
	}

	lo = left
	hi = len(nums) - 1
	for lo <= hi {
		mid := (lo + hi) / 2

		if nums[mid] > target {
			hi = mid - 1
		} else {
			if nums[mid] == target {
				right = mid
			}
			lo = mid + 1
		}
	}

	return left, right
}
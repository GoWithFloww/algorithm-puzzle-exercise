package twopointer

import (
	"sort"
)

func TripletSum(nums []int) [][]int {
	sort.Ints(nums)
	triplets := [][]int{}

	for i := 0; i < len(nums)-2; i++ {
		if nums[i] > 0 {
			break
		}
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		pairs := findAllPairSumGo(nums, i+1, -nums[i])
		for _, pair := range pairs {
			triplets = append(triplets, []int{nums[i], pair[0], pair[1]})
		}
	}

	return triplets
}

func findAllPairSumGo(nums []int, start int, target int) [][]int {
	end := len(nums) - 1
	pairs := [][]int{}

	for start < end {
		currentSum := nums[start] + nums[end]

		if currentSum == target {
			pairs = append(pairs, []int{nums[start], nums[end]})
			start++
			end--

			for start < end && nums[start] == nums[start-1] {
				start++
			}
		} else if currentSum < target {
			start++
		} else {
			end--
		}
	}
	return pairs
}

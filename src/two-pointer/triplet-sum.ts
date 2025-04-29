export function tripletSum(nums: number[]): number[][] {
    nums.sort()
    let tripletSum: number[][] = []

    for (let i = 0; i < nums.length; i++) {
        // if current index number > 0, there's no need to keep iterate in a sorted array
        if (nums[i] > 0) {
            break
        }
        // deduplicate
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }

        const pairs = findAllPairSum(nums, i + 1, -nums[i])
        for (const pair of pairs) {
            tripletSum.push([nums[i], ...pair])
        }
    }

    return tripletSum
}

function findAllPairSum(
    nums: number[],
    start: number,
    target: number
): number[][] {
    let end = nums.length - 1
    let pairs: number[][] = []

    while (start < end) {
        const currentSum = nums[start] + nums[end]
        if (currentSum == target) {
            // push result
            pairs.push([nums[start], nums[end]])
            start += 1
            // deduplicate
            while (start < end && nums[start] == nums[start - 1]) {
                start += 1
            }
        } else if (currentSum < target) {
            start += 1
        } else {
            end -= 1
        }
    }

    return pairs
}

// O(n)
export function pairSum(nums: number[], target: number): number[] {
    let start = 0,
        end = nums.length - 1

    while (start < end) {
        const currentSum = nums[start] + nums[end]
        if (currentSum < target) {
            start += 1
        } else if (currentSum > target) {
            end -= 1
        } else {
            return [start, end]
        }
    }

    return []
}

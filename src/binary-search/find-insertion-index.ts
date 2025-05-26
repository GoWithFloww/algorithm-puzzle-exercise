export function findInsertionIndex(nums: number[], target: number): number {
    let start = 0, end = nums.length - 1

    while (start <= end) {
        let midIndex = Math.trunc((start + end) / 2)
        if (nums[midIndex] < target) {
            start = midIndex + 1
        } else if (nums[midIndex] > target) {
            end = midIndex - 1
        } else {
            return midIndex
        }
    }

    return start
}
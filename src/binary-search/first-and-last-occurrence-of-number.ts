export function firstAndLastOccurrenceOfNumber(
    nums: number[],
    target: number
): [number, number] {
    let lo = 0,
        hi = nums.length - 1
    let left = -1,
        right = -1

    // find leftmost
    while (lo <= hi) {
        const mid = (lo + hi) >> 1
        if (nums[mid] < target) lo = mid + 1
        else {
            if (nums[mid] === target) left = mid
            hi = mid - 1
        }
    }
    if (left < 0) return [-1, -1]

    // find rightmost
    lo = left
    hi = nums.length - 1
    while (lo <= hi) {
        const mid = (lo + hi) >> 1
        if (nums[mid] > target) hi = mid - 1
        else {
            if (nums[mid] === target) right = mid
            lo = mid + 1
        }
    }

    return [left, right]
}

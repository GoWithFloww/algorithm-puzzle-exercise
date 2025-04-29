export function pairSumUnsorted(nums: number[], target: number): number[] {
    const numToIndex = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        const complementNum = target - nums[i]
        if (numToIndex.has(complementNum)) {
            return [numToIndex.get(complementNum)!, i]
        }
        numToIndex.set(nums[i], i)
    }

    return []
}

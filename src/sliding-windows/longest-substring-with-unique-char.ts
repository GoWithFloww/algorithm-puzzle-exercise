export function longestSubstringWithUniqueChar(s: string): number {
    const seen = new Set<string>()
    let left = 0, maxLen = 0

    for (let right = 0; right < s.length; right++) {
        // if duplicate at `right`, shrink window from `left`
        while (seen.has(s[right])) {
            seen.delete(s[left])
            left++
        }
        // now it's safe to add s[right]
        seen.add(s[right])
        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen
}

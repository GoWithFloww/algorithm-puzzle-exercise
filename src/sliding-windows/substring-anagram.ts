export function findAnagrams(s: string, target: string): number[] {
    const result: number[] = []

    if (s.length < target.length) {
        return result
    }

    const targetCharFreq = new Array(26).fill(0)
    for (let i = 0; i < target.length; i++) {
        targetCharFreq[target.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }
    const windowCharFreq: number[] = new Array(26).fill(0)
    const isFreqEqual = () => {
        for (let i = 0; i < targetCharFreq.length; i++) {
            if (targetCharFreq[i] !== windowCharFreq[i]) {
                return false
            }
        }
        return true
    }

    let start = 0,
        end = 0
    while (end < s.length) {
        windowCharFreq[s.charCodeAt(end) - 'a'.charCodeAt(0)]++

        if (end - start + 1 === target.length) {
            if (isFreqEqual()) {
                result.push(start)
            }
            windowCharFreq[s.charCodeAt(start) - 'a'.charCodeAt(0)]--
            start++
        }

        end++
    }

    return result
}

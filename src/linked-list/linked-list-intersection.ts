import { ListNode, ListNodeOrNull } from '../utils/types'

export function linkedListIntersection<T>(
    headA: ListNode<T>,
    headB: ListNode<T>
): ListNodeOrNull<T> {
    let pA: ListNodeOrNull<T> = headA
    let pB: ListNodeOrNull<T> = headB

    while (pA !== pB) {
        // iterate A -> B combined list
        pA = pA === null ? headB : pA.next

        // iterate B -> A combined list
        pB = pB === null ? headA : pB.next
    }

    return pA
}

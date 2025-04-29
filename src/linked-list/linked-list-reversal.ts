import { ListNodeOrNull } from '../utils/types'

export function linkedListReversal<T>(
    head: ListNodeOrNull<T>
): ListNodeOrNull<T> {
    if (head == null || head.next == null) {
        return head
    }

    let prevNode: ListNodeOrNull<T> = null,
        currentNode: ListNodeOrNull<T> = head
    while (currentNode != null) {
        const nextNode: ListNodeOrNull<T> = currentNode.next

        currentNode.next = prevNode

        prevNode = currentNode
        currentNode = nextNode
    }

    return prevNode
}

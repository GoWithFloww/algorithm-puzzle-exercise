export interface ListNode<T> {
    value: T
    next: ListNodeOrNull<T>
}

export type ListNodeOrNull<T> = ListNode<T> | null

export function createNode<T>(value: T): ListNode<T> {
    return {
        value: value,
        next: null,
    }
}

export function createLinkedListFromData<T>(
    items: Iterable<T>
): ListNodeOrNull<T> {
    const iterator = items[Symbol.iterator]()
    let result = iterator.next()
    if (result.done) {
        return null
    }

    const head: ListNode<T> = createNode(result.value)
    let current = head

    result = iterator.next()
    while (!result.done) {
        current.next = createNode(result.value)

        current = current.next

        result = iterator.next()
    }

    return head
}

export function listToArray<T>(head: ListNodeOrNull<T>): T[] {
    const arr: T[] = []
    let current = head
    while (current != null) {
        arr.push(current.value)
        current = current.next
    }
    return arr
}

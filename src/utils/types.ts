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

// Doubly Linked List
export interface DListNode<T> {
    value: T
    next: DListNodeOrNull<T>
    prev: DListNodeOrNull<T>
}

export type DListNodeOrNull<T> = DListNode<T> | null

export function createDNode<T>(value: T): DListNode<T> {
    return {
        value: value,
        next: null,
        prev: null,
    }
}

export function createDLinkedListFromData<T>(
    items: Iterable<T>
): DListNodeOrNull<T> {
    const iterator = items[Symbol.iterator]()
    let result = iterator.next()
    if (result.done) {
        return null
    }

    const head: DListNode<T> = createDNode(result.value)
    let current = head
    let previousNode: DListNodeOrNull<T> = null

    result = iterator.next()
    while (!result.done) {
        const newNode = createDNode(result.value)
        current.next = newNode
        newNode.prev = current
        previousNode = current
        current = newNode
        result = iterator.next()
    }

    return head
}

export function dListToArray<T>(head: DListNodeOrNull<T>): T[] {
    const arr: T[] = []
    let current = head
    while (current != null) {
        arr.push(current.value)
        current = current.next
    }
    return arr
}

export function dListToArrayReverse<T>(tail: DListNodeOrNull<T>): T[] {
    const arr: T[] = []
    let current = tail
    while (current != null) {
        arr.push(current.value)
        current = current.prev
    }
    return arr
}

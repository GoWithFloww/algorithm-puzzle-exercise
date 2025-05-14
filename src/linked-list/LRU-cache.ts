import { DListNode, DListNodeOrNull, createDNode } from '../utils/types'

// Existing CacheNodePayload
interface CacheNodePayload<K, V> {
    key: K
    value: V
}

// New SentinelPayload for dummy nodes
interface SentinelPayload {
    _isSentinel: true
}

// Union type for any node's value in the list
type NodeValue<K, V> = CacheNodePayload<K, V> | SentinelPayload

class LRUCache<K, V> {
    private capacity: number
    // hashMap stores nodes whose 'value' is guaranteed to be CacheNodePayload
    private hashMap: Map<K, DListNode<NodeValue<K, V>>>
    // Head and tail use NodeValue, specifically SentinelPayload for their 'value'
    private head: DListNode<NodeValue<K, V>>
    private tail: DListNode<NodeValue<K, V>>

    // Define a constant sentinel payload instance for head and tail
    private readonly sentinelPayload: SentinelPayload = { _isSentinel: true }

    constructor(capacity: number) {
        this.capacity = capacity
        this.hashMap = new Map<K, DListNode<NodeValue<K, V>>>()

        this.head = createDNode<NodeValue<K, V>>(this.sentinelPayload)
        this.tail = createDNode<NodeValue<K, V>>(this.sentinelPayload)

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    private removeNode(node: DListNode<NodeValue<K, V>>): void {
        // The check for node.prev and node.next is important to ensure it's linked.
        if (!node.prev || !node.next) {
            // This might happen if trying to remove head/tail or a detached node.
            // For internal LRU logic, nodes passed here should always be linked.
            return
        }
        const prevNode = node.prev
        const nextNode = node.next

        prevNode.next = nextNode
        nextNode.prev = prevNode
    }

    private addToTail(node: DListNode<NodeValue<K, V>>): void {
        const previousTailElement = this.tail.prev! // Should always exist (at least head)

        previousTailElement.next = node
        node.prev = previousTailElement
        node.next = this.tail
        this.tail.prev = node
    }

    public get(key: K): V | -1 {
        if (!this.hashMap.has(key)) {
            return -1
        }

        const node = this.hashMap.get(key)! // node is DListNode<NodeValue<K, V>>

        this.removeNode(node)
        this.addToTail(node)

        // Value from hashMap is guaranteed to be CacheNodePayload, not SentinelPayload.
        // We use a type assertion here based on that guarantee.
        const payload = node.value as CacheNodePayload<K, V>
        return payload.value
    }

    public put(key: K, value: V): void {
        if (this.capacity <= 0) {
            return
        }

        let nodeToInsert: DListNode<NodeValue<K, V>>

        if (this.hashMap.has(key)) {
            const oldNode = this.hashMap.get(key)! // DListNode<NodeValue<K, V>>
            this.removeNode(oldNode)
        }

        const newNodePayload: CacheNodePayload<K, V> = { key, value }
        // Create node with NodeValue<K,V> type, but actual value is CacheNodePayload
        nodeToInsert = createDNode<NodeValue<K, V>>(newNodePayload)

        this.hashMap.set(key, nodeToInsert)

        if (this.hashMap.size > this.capacity) {
            const lruNode = this.head.next // DListNodeOrNull<NodeValue<K, V>>

            // Ensure lruNode is a data node (not head/tail or null)
            if (lruNode && lruNode !== this.tail) {
                const lruValue = lruNode.value // Type is NodeValue<K,V>

                // Type guard to ensure it's a data payload before accessing 'key'
                if (!('_isSentinel' in lruValue)) {
                    // lruValue is now known to be CacheNodePayload<K,V>
                    this.hashMap.delete(lruValue.key)
                    this.removeNode(lruNode)
                }
            }
        }

        this.addToTail(nodeToInsert)
    }
}

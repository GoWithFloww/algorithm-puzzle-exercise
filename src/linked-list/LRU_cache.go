package linkedlist

import "algorithm-puzzle-exercise/src/utils"

// CacheEntry holds the key and value for an LRU cache node.
// This will be the data stored in DListNode.Value.
type CacheEntry[K comparable, V any] struct {
	key K
	val V
}

// LRUCache is an LRU (Least Recently Used) cache.
type LRUCache[K comparable, V any] struct {
	capacity int
	cache    map[K]*utils.DListNode[CacheEntry[K, V]]
	head     *utils.DListNode[CacheEntry[K, V]] // Dummy head node
	tail     *utils.DListNode[CacheEntry[K, V]] // Dummy tail node
}

// NewLRUCache creates a new LRUCache with the given capacity.
func NewLRUCache[K comparable, V any](capacity int) *LRUCache[K, V] {
	// Initialize dummy head and tail nodes.
	// Their CacheEntry value will be the zero-value for CacheEntry.
	head := utils.CreateDNode(CacheEntry[K, V]{})
	tail := utils.CreateDNode(CacheEntry[K, V]{})

	head.Next = tail
	tail.Prev = head

	return &LRUCache[K, V]{
		capacity: capacity,
		cache:    make(map[K]*utils.DListNode[CacheEntry[K, V]]),
		head:     head,
		tail:     tail,
	}
}

// removeNode removes a node from the linked list.
// This is an internal helper method.
func (lc *LRUCache[K, V]) removeNode(node *utils.DListNode[CacheEntry[K, V]]) {
	if node.Prev == nil || node.Next == nil {
		return
	}
	prevNode := node.Prev
	nextNode := node.Next
	prevNode.Next = nextNode
	nextNode.Prev = prevNode
}

// addToTail adds a node to the tail of the linked list (marking it as most recently used).
// This is an internal helper method.
func (lc *LRUCache[K, V]) addToTail(node *utils.DListNode[CacheEntry[K, V]]) {
	lastActualNode := lc.tail.Prev // This is lc.head if the list is empty

	lastActualNode.Next = node
	node.Prev = lastActualNode
	node.Next = lc.tail
	lc.tail.Prev = node
}

// Get retrieves a value from the cache for the given key.
// It returns the value and true if the key exists, otherwise the zero value for V and false.
func (lc *LRUCache[K, V]) Get(key K) (V, bool) {
	node, ok := lc.cache[key]
	if !ok {
		var zeroV V // Default zero value for type V
		return zeroV, false
	}

	// Move the accessed node to the tail (most recently used)
	lc.removeNode(node)
	lc.addToTail(node)

	return node.Value.val, true
}

// Put adds or updates a key-value pair in the cache.
func (lc *LRUCache[K, V]) Put(key K, value V) {
	if lc.capacity <= 0 {
		return // Cache has no space or invalid capacity
	}

	// If key already exists, remove its old node from the list.
	if oldNode, ok := lc.cache[key]; ok {
		lc.removeNode(oldNode)
	}

	// Create the new node with its CacheEntry
	entry := CacheEntry[K, V]{key: key, val: value}
	newNode := utils.CreateDNode(entry)
	lc.cache[key] = newNode // Add/update the key in the map to point to the new node

	// If adding this node exceeds capacity, remove the least recently used item.
	if len(lc.cache) > lc.capacity {
		lruNode := lc.head.Next // The node right after head is the LRU one
		if lruNode != lc.tail { // Ensure it's an actual data node, not the tail sentinel
			lc.removeNode(lruNode)
			delete(lc.cache, lruNode.Value.key) // Access key from node's Value
		}
	}

	// Add the new (or newly updated) node to the tail of the list
	lc.addToTail(newNode)
}

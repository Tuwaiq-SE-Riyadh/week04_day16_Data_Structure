# Data Structure Lab

## Queue
Implement a queue data structure by creating a queue class, then add the following functions to it:
* enqueue: adds an item to the back of a queue.
* dequeue: removes an item from the front of a queue.
* traverse: print the elements of the queue one by one.


## Stack
Implement a stack data structure by creating a stack class, and add the following functions to it:
* push: adds an item to the top of a stack.
* pop: removes an item from the top of a stack.
* traverse: print the element of the stack one by one.


## Tree (BONUS)

The following JS code will create a tree of numbers

```
function Node(value) {

    this.value = value;
    this.children = [];
}

// Create elements
const root = new Node(0)

const child1 = new Node(1)
root.children.push(child1)

const child2 = new Node(2)
root.children.push(child2)

const child3 = new Node(3)
root.children.push(child3)

const child11 = new Node(11)
child1.children.push(child11)

const child12 = new Node(12)
child1.children.push(child12)

const child31  = new Node(31)
child3.children.push(child31)
```

write a function that takes a root object, and use this root to traverse the tree and print its elements.
  
<i>Hint: read about recursion<i>

# Data Structure Lab

## Queue
Implement a queue data structure by creating a queue class, then add the following functions to it:
* enqueue: adds an item to the back of a queue.
* dequeue: removes an item from the front of a queue.
* traverse: print all the element of the queue.


## Stack
Implement a stack data structure by creating a stack class, and add the following functions to it:
* push: adds an item to the top of a stack.
* pop: removes an item from the top of a stack.
* traverse: print all the element of the stack.


## Tree

The following JS code will create a tree of numbers

```
function Node(value) {

    this.value = value;
    this.children = [];
    this.parent = null;
}

// Create elements
const root = new Node(0)

const child1  = root.children.push(new Node(1))
child1.parent = root

const child2  = root.children.push(new Node(2))
child2.parent = root

const child3  = root.children.push(new Node(3))
child3.parent = root

const child11  = child1.children.push(new Node(11))
child11.parent = child1    

const child12  = child1.children.push(new Node(12))
child12.parent = child1

const child31  = child3.children.push(new Node(31))
child31.parent = child3  
```

write a function that takes a root object, and use this root to traverse the tree and print its elements.
  

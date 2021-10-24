class queue {
  constructor(array) {
    this.array = array;
  }
  enqueue(item) {
    this.array.unshift(item);
  }
  dequeue() {
    this.array.shift();
  }
  traverse() {
    for (let i = 0; i < this.array.length; i++) console.log(this.array[i]);
  }
}
let queueTest = new queue([1, 2, 3]);
queueTest.enqueue(99);
queueTest.dequeue();
queueTest.traverse();

//

class stack {
  constructor(array) {
    this.array = array;
  }
  push(item) {
    this.array.push(item);
  }
  pop() {
    this.array.pop();
  }
  traverse() {
    for (let i = 0; i < this.array.length; i++) console.log(this.array[i]);
  }
}
let stackTest = new stack([4, 5, 6]);
stackTest.push(77);
stackTest.pop();
stackTest.traverse();

//

class Node {
  constructor(value) {
    this.val = value;
    this.children = [];
  }
  inOrderPrint(currentNode) {
    if (currentNode !== null) {
      for (i in children) this.inOrderPrint(currentNode.children[i]);
      console.log(currentNode.val);
    }
  }
}

// Create elements
const root = new Node(0);

const child1 = new Node(1);
root.children.push(child1);

const child2 = new Node(2);
root.children.push(child2);

const child3 = new Node(3);
root.children.push(child3);

const child11 = new Node(11);
child1.children.push(child11);

const child12 = new Node(12);
child1.children.push(child12);

const child31 = new Node(31);
child3.children.push(child31);

console.log(root);

root.inOrderPrint(root);

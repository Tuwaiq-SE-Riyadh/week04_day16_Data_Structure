//---------------------QUEUE
class queue {
  constructor() {
    let arr = [];
  }

  enqueue(value) {
    arr.push(value);
  }
  dequeue() {
    return arr.shift();
  }
  traverse() {
    for (x in arr) {
      console.log(arr[x]);
    }
  }
}
//---------------------STACK
class stack {
  constructor() {
    let arr = [];
  }
  push(value) {
    arr.push(value);
  }
  pop() {
    return arr.pop();
  }
  traverse() {
    for (x in arr) {
      console.log(arr[x]);
    }
  }
}
//---------------------TREE
function Node(value) {
  this.value = value;
  this.children = [];
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

let traverse = (root) => {
  console.log(root.value);
  if (root.children.length > 0) {
    root.children.forEach((el) => {
      traverse(el);
    });
  }
};

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

class Queue {
  Enqueue(Array, obj) {
    return Array.push(obj);
  }
  Dequeue(Array) {
    return Array.shift();
  }
  traverse(Array) {
    console.log(Array);
  }
}

const Array = [1, 2, 3, 4];
const q = new Queue();
console.log(Array);

q.Enqueue(Array, 10);

const pop = q.Dequeue(Array);
console.log(Array);
console.log(pop);
q.traverse(Array);

class Stack {
  push(Array, obj) {
    return Array.push(obj);
  }
  pop(Array) {
    return Array.pop();
  }
  traverse(Array) {
    console.log(Array);
  }
}

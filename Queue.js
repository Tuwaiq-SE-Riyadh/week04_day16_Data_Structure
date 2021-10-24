class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(e) {
    this.queue.unshift(e);
  }

  dequeue() {
    this.queue.pop();
  }

  print() {
    this.queue.forEach(function (e) {
      console.log(e);
    });
  }
}
let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue();
myQueue.print();

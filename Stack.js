class Stack {
  constructor() {
    this.stack = [];
  }

  push(e) {
    this.stack.push(e);
    // console.log(this.data)
  }

  pop() {
    this.stack.pop();
  }

  print() {
    this.stack.forEach(function (e) {
      console.log(e);
    });
  }
}

let mystack = new Stack();
mystack.push(1);
mystack.push(2);
mystack.pop();
mystack.print();

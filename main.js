// ## Queue
// Implement a queue data structure by creating a queue class, then add the following functions to it:
// * enqueue: adds an item to the back of a queue.
// * dequeue: removes an item from the front of a queue.
// * traverse: print the elements of the queue one by one.
class Queue{
    constructor() {
        this.queue = [];
    }

    enqueue(x) {
        this.queue.push(x);
    }
    dequeue(){
        this.queue.shift();
    }

    traverse(){
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
        }
    }
}

Q = new Queue();

// ## Stack
// Implement a stack data structure by creating a stack class, and add the following functions to it:
// * push: adds an item to the top of a stack.
// * pop: removes an item from the top of a stack.
// * traverse: print the element of the stack one by one.

class Stack{
    constructor(){
        this.stack = [];
    }

    push(x){
        this.stack.push(x);
    }

    pop(){
        this.stack.pop()
    }
    
    traverse(){
        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i]);
        }
    }

}
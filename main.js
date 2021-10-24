// ## Queue
// Implement a queue data structure by creating a queue class, then add the following functions to it:
// * enqueue: adds an item to the back of a queue.
// * dequeue: removes an item from the front of a queue.
// * traverse: print the elements of the queue one by one.
console.log("Queue section >>>>>>>");

class Queue{
    constructor(arr) {
        this.arr = [];
        this.count = 0;
      }
    enqueue(item) {
        // console.log("count> "+this.count);
        for (let i = 0; i <= this.count; i++) {
            if (this.arr[i]===undefined) {
                this.arr[i] = item
                // console.log("item: "+this.arr[i]+" stored");
                break
            }
        }
        console.log("after enqueue: "+this.arr);
        this.count += 1
    }

    dequeue() {
        // console.log("deqeue count> "+this.count);
        // console.log("queue before dequeue : "+this.arr);
        this.arr[0]=null
        this.count -= 1
        for (let i = 0; i <= this.count; i++) {
            // console.log(this.arr[i+1]);
            this.arr[i] =this.arr[i+1]
            // console.log(this.arr[i]);
        }
        console.log("after dequeue: "+this.arr);
        // this.count += 1
        
    }
    traverse() {
        for (let i = 0; i < this.count; i++) {
            console.log(this.arr[i]);    
        }
    }
}
let q1 = new Queue();


q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)

q1.dequeue()
console.log("the queue is: ");
q1.traverse()




// ## Stack
// Implement a stack data structure by creating a stack class, and add the following functions to it:
// * push: adds an item to the top of a stack.
// * pop: removes an item from the top of a stack.
// * traverse: print the element of the stack one by one.
console.log("");
console.log("");
console.log("Stack section >>>>>>>");

class Stack{
    constructor(arr) {
        this.arr = [];
        this.count = 0;
      }
    push(item) {
        // console.log("push count> "+this.count);
        for (let i = 0; i <= this.count; i++) {
            if (this.arr[i]===undefined) {
                this.arr[i] = item
                // console.log("item: "+this.arr[i]+" stored");
                break
            }
        }
        console.log("after push: "+this.arr);
        this.count += 1
    }

    pop() {
        // console.log("stack in pop count> "+this.count);
        // console.log("stack before pop : "+this.arr);
        this.arr[this.count]=null
        this.count -= 1
        console.log("after pop: "+this.arr);
        
    }
    traverse() {
        for (let i = 0; i < this.count; i++) {
            console.log(this.arr[i]);    
        }
    }
}
let s1 = new Stack();

s1.push(1)
s1.push(2)
s1.push(3)
s1.push(4)

s1.pop()
console.log("the stack is: ");
s1.traverse()
class Queue {
    constructor () {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
        return this.queue;
    }
    dequeue() {
        return this.queue.shift();
    }
    traverse() {
        for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i])
        }
        return;
    }
}

class Stack {
    constructor () {
        this.stack = [];
    }
    push(item) {
        return this.stack.push(item);
    }
    shift() {
        return this.stack.shift();
    }
    pop() {
        return this.stack.shift();
    }
    traverse() {
        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i])
        }
        return;
    }
}

// BOUNS
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
child3.children.push(child31);

const recursion = (root) => {
    root.children.forEach(child => {
        if(child.length >= 1) recursion(child);
        console.log(child.value);
    });
};

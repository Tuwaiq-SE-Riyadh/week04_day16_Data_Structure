// Queue Class

class Queue {
    Queue() {
        Queue.array1 = []
    }

    enqueue(num) {
        Queue.aaray1.puch(num)

        return Queue.aaray1
    }
    dequeue() {
        return Queue.aaray1.shifit()
    }
    traverse() {
        for (i = 0; i < Queue.array1.length; i++) {
            return Queue.array1[i]
        }
    }

}

//Stack class

class Stack {
    Stack() {

        Stack.array2 = []
    }

    puch(item) {
        Stack.array2.puch(item)
    }

    pop() {
        Stack.array2.pop()
    }
    traverse() {
        for (i = 0; i < Queue.array1.length; i++) {
            return Stack.array2[i]
        }

    }
}

//BounsTree
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

const child31 = new Node(31)
child3.children.push(child31)

function traverse(node) {
    console.log('Node: ' + node.value);
    if (node.children) {
        node.children.forEach(child => {
            traverse(child)
        });

    }
}

traverse(root)
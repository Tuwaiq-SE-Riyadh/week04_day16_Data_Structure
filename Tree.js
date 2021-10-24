function Node(value) {

    this.value = value;
    this.children = [];
}

function recursion(root) {

    for(let i = 0; i < root.children.length; i++) {
        recursion(root.children[i])   
    }
    console.log(root);
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
child3.children.push(child31)


recursion(root);
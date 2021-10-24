/* Queue ( First In First Out ) */
let queue = [];

let queueAddItem = (item) => queue.push(item);

let queueRemoveItem = () => queue.shift();

let queuePrint = () => {
    queue.forEach((element, index) => {
        console.log(element);
    });
}

queueAddItem(2);
queueAddItem(5);
queueAddItem(1);
queuePrint();
queueRemoveItem();
queuePrint();


/* Stack ( Last In First Out ) */

let stack = [];

let stackAddItem = ( item ) => stack.push(item);

let stackRemoveItem = () => stack.pop();

let stackPrint = () => {
    stack.forEach((element, index) => {
        console.log(element);
    });
}

stackAddItem(2);
stackAddItem(5);
stackAddItem(1);
stackPrint();
stackRemoveItem();
stackPrint();


/* Tree */

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
child3.children.push(child31)

let traverseTree = () =>{
    console.log ( root.value )
    root.children.forEach((element, index) => {
        element.children > 0 ? console.log("├─┬ "+element.value) : console.log("├── "+element.value)
    
        element.children.forEach((element2) => {
            console.log("| └── " + element2.value);
        });
    });
}

traverseTree();
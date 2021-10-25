function Node(value) {
  this.value = value;
  this.children = [];
}

// Create elements
const root = new Node(0);

const child1 = new Node(1);
root.children.push(child1);

const child2 = new Node(2);
root.children.push(child2);

const child3 = new Node(3);
root.children.push(child3);

const child11 = new Node(11);
child1.children.push(child11);

const child12 = new Node(12);
child1.children.push(child12);

const child31 = new Node(31);
child3.children.push(child31);
console.log(root);
console.log(root.children);
console.log(root.children[0]);
console.log(root.children[1]);
console.log(root.children[0].children);
// console.log(root.children[0].children[]);


function recursion(array) {
    console.log(array.value);
  for (let index = 0; index < array.children.length; index++) {
    if (array) {
      recursion(array.children[index]);
    }
    // console.log(array.children[index].value);
  }
}
recursion(root);


class Queue{
    data=[];
    constructor(){}
    enqueue(value){
        this.data.push(value);
    }
    dequeue(){
        this.data.shift();
    }
    traverse(){
        console.log(this.data);
    }
}

class Stack{
    data=[];
    constructor(){}
    push(value){
        this.data.push(value);
    }
    pop(){
        this.data.pop();
    }
    traverse(){
        console.log(this.data);
    }
}

let qu = new Queue();
let st = new Stack();
qu.enqueue(1)
qu.enqueue(2)
qu.enqueue(3)
qu.dequeue();
qu.traverse();

st.push(1);
st.push(2);
st.push(3);
st.pop();
st.traverse();


class Node{
    constructor(value){
        this.value=value;
        this.children=[];
    }
    push(node){
        this.children.push(node)
    }
}

/*class Tree{
    constructor(nod){
        this.root=nod;
        children=[];
    }
}*/


/*
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
console.log(root);
console.log("traversing values",traversing(root));

function traversing(node){
    let str='';
    if (node.children.length==0){str=node.value;}
    if (node.children.length!=0) {
        for(let i=0;i<node.children.length;i++){
            str=+traversing(node.children[i])
        } 
    }
    return str
}

console.log("rooooooooooooot",root.children);
console.log("child 11",child11.children);
console.log("child 11",child11.children.length==0?'1':'2');
*/
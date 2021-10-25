
class Stack{
     array =[];
     push(x){
         this.array.push(x);
     }
     pop(){
         this.array.pop();
     }
     traverse(){
         for(let i=0; i<this.array.length; i++){
             console.log(this.array[i]);
         }
     }
}

const stack = new Stack;
stack.push(10);
stack.push(17);
stack.push(15);
stack.push(13);
stack.push(12);
stack.pop();
stack.traverse();
//-----------------------------------------------------------------------------
class Queue{
    array =[];

    enqueue(x){
        this.array.push(x);
    }
    dequeue(){
        this.array.shift();
    }
    traverse(){
        for(let i=0; i<this.array.length; i++){
            console.log(this.array[i]);
        }
    }

}

const queue = new Queue;
queue.enqueue(15);
queue.enqueue(35);
queue.enqueue(25);
queue.enqueue(45);
queue.enqueue(75);
queue.dequeue();
queue.traverse();
//-------------------------------------------------------------------------------------
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


function print(root){
    console.log(root.value);
    if( root.children != []){
    for(let i=0; i<root.children.length ; i++){
        print(root.children[i])
    }}
}

print(root);

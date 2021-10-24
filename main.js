class listQueue { 
    queue=[] ;


    queueAdd= (x)=>{
        this.queue.push(x)


    }
    queueremove=()=>{
        this.queue.shift()
    }
    queuePrint =()=>{
        for (let i = 0; i < this.queue.length; i++) {
            console.log('Queue : '+this.queue[i]);
              
        }}
    
}

const queue =new listQueue;
queue.queueAdd(1);
queue.queueAdd(2);
queue.queueAdd(3);
queue.queueAdd(4);
queue.queuePrint()
queue.queueremove();
queue.queuePrint()

// --------------------------stack----------------------------

class listStack{
stack=[];

stackAdd= (x)=>{
    this.stack.push(x);

}
stackPop=()=>{
    this.stack.pop()
}
stackPrint =()=>{
    for (let i = 0; i < this.stack.length; i++) {
        console.log('Stack : '+this.stack[i]);
          
    }}

}
const stack = new listStack;
stack.stackAdd(11)
stack.stackAdd(12)
stack.stackAdd(13)
stack.stackAdd(14)
stack.stackAdd(15)
stack.stackPrint()
stack.stackPop()
stack.stackPrint()

// ------------------------------------------Tree----------------------------------------------
class Node {
    constructor(value) {

        this.value = value;
        this.children = [];
    }
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



 function printTree(root){
    for (let i = 0; i < root.children.length; i++) {
      console.log(root.children[i]); 
        
    }

 }
 printTree(root)

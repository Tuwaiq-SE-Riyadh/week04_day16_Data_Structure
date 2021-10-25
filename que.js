
class queue {
     constructor() {
        this.items = [];
    }
       
 
    
    // add elem
    enqueue(item) {
        
        this.items.push(item);
        }
    
    // remove elem
    dequeue(){
        
        
      return this.items.shift()
        }
    

    printqueue() {
let x ="";
for(let i=0; i<this.items.length;i++)
x += this.items[i]+"";

return x;
}
}

  queue = new queue();
 queue.enqueue(1);
 queue.enqueue(2);
 queue.enqueue(3);
 queue.enqueue(4);
 queue.enqueue(5);

 console.log(queue.items);

 queue.dequeue();
 console.log(queue.items);


 queue.printqueue()

console.log(queue.items);



// stack


class stack {
  
    
    constructor()
    {
        this.items = [];
    }
    push(element)
{
    
    this.items.push(element);
}
pop()
{
    return this.items.pop() 
}
printstack() {
    let x ="";
    for(let i=0; i<this.items.length;i++)
    x += this.items[i]+"";
    
    return x;
    }

}
 stack=new stack();
 stack.push(3);
 stack.push(7);
 stack.push(9);
 console.log( stack.items)

 stack.pop()

 console.log( stack.items)
 stack.printstack()
 console.log( stack.items)

 
//tree
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

function node(root) {
    
   
    console.log(root.value)
    }
    //  frist print root;
    // then go for loop print 
    for (var i = 0; i < root.children.length; i++) {
      
     
        node(children[i]);
        
    }

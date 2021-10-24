
class Queue {

    constructor() {
        this.elements = [];
    }

    isEmpty(){return this.elements.length == 0;}

    enqueue(e){ this.elements.push(e); }

    dequeue(){ return this.elements.shift(); }

    traverse(){

        for (let i = 0; i < this.elements.length; i++) {
            console.log(this.elements[i])
            
        }
        
    }

   
}// end of class

console.log("Queue Test")

     let q = new Queue();
         
    for (let i = 2; i <= 5; i++) {
        
        q.enqueue(i);
    }
    q.traverse()

    q.dequeue()
    console.log("After dequeue")
    q.traverse()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Stack{

    constructor(){
        this.data = [];
    }

    push(value){
        this.data.push(value);
        return this;
    }

    pop(){ return this.data.pop(); }

    isEmpty(){
        if(this.data.length === 0){ return true;}

        else{ return false; }
    }

    Traverse(){
       
       for (let i = 0; i < this.data.length; i++) {
           console.log(this.data[i])
           
       }
    }

    
}// end of class

console.log("Stack Test")

 let s = new Stack();

 for (let i = 2; i <= 5; i++) {
     s.push(i);
 }

 s.Traverse()
 s.pop()
 console.log("After pop")
 s.Traverse()

 //////////////////////////////////////////////////////////////////////////////////

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

function recursion(root, depth){

       for (let i = 0; i < children.length; i++) {
                iterate(children[i], depth+1);
    
}
}


 



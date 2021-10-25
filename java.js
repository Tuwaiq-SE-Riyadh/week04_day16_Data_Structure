// Queue
class Queue {
    constructor(){
        this.elements = [];
    }
    enqueue(e) {
        this.elements.push(e);
    }
    dequeue(){
        this.elements.shift();
    }
    traverse(){
        this.elements.forEach(function(e){
            console.log(e);
        })
    }
}
//object Queue
let q=new Queue();
    
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
console.log(q);
q.traverse();


// stack
class stack {
    constructor(){
        this.elements = [];
    }
    push(e) {
        this.elements.push(e);
        return
    }
    pop(){
        this.elements.pop();
        return
    }
    traverse(){
        this.elements.forEach(function(e){
            console.log(e);
        })
    }
}

  // object stack
   let s=new stack();
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.pop();
    console.log(s);
    s.traverse();
   

//tree
        function Node(value) {

            this.value = value;
            this.children = [];
            
        }
        function traverse(root) {
           console.log(root.value);
                root.children.forEach(function(e){
                  traverse(e) 
                })

         
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

        const x= traverse(root);
        // console.log(x);
// Queue
class Queue{
    constructor()
    {
        this.items = [];
    }

    // enqueue function
    enqueue(element)
    {    
        // adding element to the queue
        this.items.push(element);
    }

    // dequeue function
    dequeue()
    {
        // removing element from the queue
        // returns underflow when called 
        // on empty queue
        if(this.items.length == 0)
            return "Underflow";
        return this.items.shift();
    }

    // printQueue function
    traverse()
    {
        let str = "";
        for(let i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }

}


// Adding element to the queue
let q1 = new Queue();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(q1.traverse());
  

  
// // returns 30 and remove it from stack
console.log(q1.dequeue());

// Stack
class Stack{
    constructor()
    {
        this.items = [];
    }

    push(element){
        // push element into the items
        this.items.push(element);
    }

    pop(){
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    traverse()
    {
        let str = "";
        for(let i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }

}
// Adding element to the stack
let s1 = new Stack();
s1.push(10);
s1.push(20);
s1.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(s1.traverse());
  

  
// // returns 30 and remove it from stack
console.log(s1.pop());
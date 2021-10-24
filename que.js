
class Queue {

    constructor() {
        this.elements = [];
    }

    enqueue(e) {
        this.elements.push(e);
    }

    dequeue() {
        return this.elements.shift();
    };

    Traverse() {

        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            console.log(element)
        }
    }
}
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);

queue.Traverse()







class Stack {
    constructor()
    {
        this.items = [];
    }

push(elements)
{
    this.items.push(elements);
}

pop()
{
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}

Traverse() {

    for (let i = 0; i < this.items.length; i++) {
        const element = this.items[i];
        console.log(element)
    }
}
}
let stack= new Stack ();
stack.push(10);
stack.push(20);
stack.push(30);

stack.Traverse ()
stack.pop()
stack.Traverse()










  // Arrow function syntax is used to rewrite the function

function PrintName(name) {
 console.log(name);   
}
PrintName("aljoharh")


const print=(name) => {
console.log(name);
}
print("aljoharah")




function updateTime () {
    let currentDateTime = new Date();
document.querySelector("#time").innerHTML=(currentDateTime)
  }
  
  setInterval(updateTime, 1000);
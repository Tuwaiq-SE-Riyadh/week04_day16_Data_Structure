class Stack {

    stack = [];

    // this constructor call push to add in the Stack
    constructor(item){
        this.push(item);
    }

    // push function to add items in the Stack
    push(item) {
        this.stack.push(item);
        console.log("the item that was added to the Stack is: " + item)
    }

    // pop function to remove items from the end of the Stack (LIFO)
    pop(){
        let item = this.stack.pop();
        console.log("the item that was removed from Stack is : " + item)
    }

    // this function to print the Queue
    traverse()
    {
        console.log("the Stack is: " , this.stack)
        // print the elements of the stack one by one
        for(let i=0; i < this.stack.length; i++){
            console.log(this.stack[i]);
        }
    }
}

const obj = new Stack("Faisal");
obj.push("Ahmed")
obj.push("Faris")
obj.push("Saad")
obj.push("Bader")
obj.push("Khalid")
obj.traverse();
obj.pop();
obj.traverse();
obj.pop();
obj.traverse();
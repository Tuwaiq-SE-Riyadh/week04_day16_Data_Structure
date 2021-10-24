class Queue{
    arr = []
    enqueue (addItem){
       this.arr.push(addItem)
    }
    dequeue(){
       this.arr.splice(0,1)
    }
    traverse(){
       console.log(this.arr)
    }
    
}

let test = new Queue()
test.enqueue(1)
test.traverse()
test.enqueue(2)
test.traverse()
test.dequeue()
test.traverse()



class Stack{
    arr = []
    push(addItem){
        this.arr.push(addItem)
    }
    pop(){
        this.arr.pop()
    }
    traverse(){
        console.log(this.arr)
    }
}

let test = new Stack()
test.push(1)
test.traverse()
test.push(2)
test.traverse()
test.pop()
test.traverse()
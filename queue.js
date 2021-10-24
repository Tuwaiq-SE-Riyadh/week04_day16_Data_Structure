class Queue {

    queue = [];

    // this constructor call enqueue to add in the Queue
    constructor(item){
        this.enqueue(item);
    }

    // enqueue function to add items in the Queue
    enqueue(item) {
        this.queue.push(item);
        console.log("the item that was added to the Queue is: " + item)
    }

    // dequeue function to remove items from the beginning of the Queue (FIFO)
    dequeue(){
        let item = this.queue.shift();
        console.log("the item that was removed from Queue is : " + item)
    }

    // this function to print the Queue
    traverse()
    {
        console.log("the Queue is: " , this.queue)
        // print the elements of the Queue one by one
        for(let i=0; i < this.queue.length; i++){
            console.log(this.queue[i]);
        }
    }
}

const obj = new Queue("Faisal");
obj.enqueue("Ahmed")
obj.enqueue("Faris")
obj.enqueue("Saad")
obj.enqueue("Bader")
obj.enqueue("Khalid")
obj.traverse();
obj.dequeue();
obj.traverse();
obj.dequeue();
obj.traverse();



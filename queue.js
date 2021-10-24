class queue {

    constructor(){
        this.data = [10,20,30,40,50];
    }

    enqueue(element)
    {
        this.data.unshift(element)
        // console.log(this.data)
    }

    dequeue()
    {
        this.data.pop()
    }

    traverse()
    {
        this.data.forEach(function(element){
            console.log(element)
        })
    }
}

let obj1 = new queue()




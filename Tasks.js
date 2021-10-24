class Queue {

    arr=[]
Queue(){


}

enqueue(s){
    
    this.arr.unshift(s)
}

dequeue(){
    
    this.arr.pop()

}

traverse(){

    for(let i=0;i<this.arr.length;i++){

        console.log(this.arr[i] + ",")
    }
}

}

class Stack {

    arr=[]
Stack(){


}

myPush(s){
    
    this.arr.push(s)
}

myPop(){
    
    this.arr.pop()

}

traverse(){

    for(let i=0;i<this.arr.length;i++){

        console.log(this.arr[i] + ",")
    }
}

}


 const ex = new Queue()
 const ex1= new Stack()


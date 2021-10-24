class Queue {
    constructor(arr) {
      this.arr=arr;

    }

    enqueue(ele){
        this.arr[this.arr.length]=ele;

    }
    dequeue(){
        for (let i =0;i<this.arr.length;i++) {
            this.arr[i]=this.arr[i+1]   
            if(i==this.arr.length-1)
            this.arr.splice(i, 1); 
        }
    }

    traverse(){
        for(let i=0;i<this.arr.length;i++){
            console.log(this.arr[i])
        }
    }
}



class Stack {
    constructor(arr) {
      this.arr=arr;

    }

    push(ele){
        this.arr[this.arr.length]=ele;
        

    }
    pop(){
        for (let i =0;i<this.arr.length;i++) { 
            if(i==this.arr.length-1)
            this.arr.splice(i, 1); 
        }
       
    }

    traverse(){
        for(let i=0;i<this.arr.length;i++){
            console.log(this.arr[i])
        }
    }
}


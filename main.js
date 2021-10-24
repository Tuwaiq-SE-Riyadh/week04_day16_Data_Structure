class Queue{

 array=[];

 enqueue(ele){
     this.array.push(ele);
 }

 dequeue(){
     this.array.splice(0,1);
 }

 traverse(){
     console.log(this.array);
 }


}
//---------------------

class Stack{

     array = [];

     push(ele){
         this.array.push(ele);
     }

     pop(){
         this.array.pop();
     }

     traverse(){
         console.log(this.array);
     }

}
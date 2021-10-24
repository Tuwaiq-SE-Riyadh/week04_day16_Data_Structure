class Queue {

constructor(arr){
    this.arr = arr;
}

enqueue(elment) {
    this.arr.push(elment);
}

dequeue() {
    this.arr.shift();
}

traverse(){
for (let i = 0; i < this.arr.length; i++) {
  console.log(this.arr[i])
}}
}


class Stack{

constructor(arr){
    this.arr = arr;
}

push(elment){
    this.arr.push(elment);
}

pop(){
    this.arr.pop();
}

traverse(){
for (let i = 0; i < this.arr.length; i++) {
    console.log(this.arr[i])
  }}
}


array = [0,1,2,3,4,5,6,7,8,9];

const queue = new Queue(array);
const stack = new Stack(array);




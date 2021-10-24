class listQueue { 
    queue=[] ;


    queueAdd= (x)=>{
        this.queue.push(x)


    }
    queueremove=()=>{
        this.queue.shift()
    }
    queuePrint =()=>{
        for (let i = 0; i < this.queue.length; i++) {
            console.log('Queue : '+this.queue[i]);
              
        }}
    
}

const queue =new listQueue;
queue.queueAdd(1);
queue.queueAdd(2);
queue.queueAdd(3);
queue.queueAdd(4);
queue.queuePrint()
queue.queueremove();
queue.queuePrint()

// --------------------------stack----------------------------

class listStack{
stack=[];

stackAdd= (x)=>{
    this.stack.push(x);

}
stackPop=()=>{
    this.stack.pop()
}
stackPrint =()=>{
    for (let i = 0; i < this.stack.length; i++) {
        console.log('Stack : '+this.stack[i]);
          
    }}

}
const stack = new listStack;
stack.stackAdd(11)
stack.stackAdd(12)
stack.stackAdd(13)
stack.stackAdd(14)
stack.stackAdd(15)
stack.stackPrint()
stack.stackPop()
stack.stackPrint()



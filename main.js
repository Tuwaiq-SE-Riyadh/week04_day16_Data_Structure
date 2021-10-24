


class Queue{

    item =[]

    enqueue(newItem){

        this.item[this.item.length] = newItem
    }

    dequeue(){

         this.item.shift()
    }


    traverse(){

    for(let i=0 ;i< this.item.length ; i++){
        console.log(this.item[i])
    }

    console.log("----------")
    }

}

//----------------------------------------Stack-----------------------------------

class Stack{

    item =[]

    push(item){

        this.item.push(item)
    }

    pop(){

        this.item.pop()
    }

    traverse(){

    

            for(let i=0 ;i< this.item.length ; i++){
                console.log(this.item[i])
            }
        
            console.log("----------")
    }
        
    

}

const item1 = new  Queue()

item1.traverse()
item1.enqueue(1)
item1.enqueue(2)
item1.enqueue(3)
item1.enqueue(4)
item1.traverse()
item1.dequeue()
item1.traverse()

const item2 = new  Stack()

item2.traverse()
item2.push(100)
item2.push(110)
item2.push(120)
item2.push(130)
item2.traverse()
item2.pop() 
item2.traverse()



//---------------------------------Tree (BONUS)--------------------------------


function Node(value) {

    this.value = value;
    this.children = [];
}

// Create elements
const root = new Node(0)

const child1 = new Node(1)
root.children.push(child1)

const child2 = new Node(2)
root.children.push(child2)

const child3 = new Node(3)
root.children.push(child3)

const child11 = new Node(11)
child1.children.push(child11)

const child12 = new Node(12)
child1.children.push(child12)

const child31  = new Node(31)
child3.children.push(child31)



console.log(root)

function traverse(root) {
     
for(let i=0; i< root.children.length; i++){

    for(let j=0; j< root.children[i].children.length; j++ ){

        console.log("children => " + root.children[i].children[j].value)
    }

    console.log( "root => " + root.children[i].value)
}
    console.log("root => " + root.value)
}

traverse(root)












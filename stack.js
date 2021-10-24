class stack {

    constructor(){
        this.data = [];
    }

    push(element)
    {
        this.data.push(element)
        // console.log(this.data)
    }

    pop()
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

let obj2 = new stack()




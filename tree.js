

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


function recursion(root)
{       
    console.log(root.value)

    if(root.children.length >= 1)
    {
        for(let i = 0 ; i< root.children.length ;i++)
        {
            if(root.children[i].children.length >= 1 )
            {
                recursion(root.children[i])
            }
            else{
                console.log(root.children[i].value)
            }
        }
    }
}


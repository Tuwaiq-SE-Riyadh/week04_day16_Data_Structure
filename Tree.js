class Node {
  constructor(root = 0, children = []) {
    this.root = root;
    this.children = children;
  }

  add(...children) {
    for (let child of children) {
      this.children.push(child);
    }
    return this;
  }

  print(root) {
    console.log("ROOT :", root.root);
    if (root.children != []) {
      for (let i = 0; i < root.children.length; i++) {
        console.log(root.children[i]);
      }
    }
  }
}

const tree = new Node("A", [new Node("  B", [new Node("    C")])]);


tree.print(tree);

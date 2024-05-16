// Question 3 ->
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  levelOrderTraversal() {
    if (!this.root) {
      return [];
    }

    let ans = [];
    let queue = [root];
    while (queue.length > 0) {
      let qln = queue.length;
      let output = [];
      for (let i = 0; i < qln; i++) {
        let curr = queue.shift();
        console.log(curr);
        output.push(curr.val);
        console.log(output);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
      ans.push(output);
    }
    return ans
  }
}

// Create the binary tree
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// Create a BinaryTree object and set the root
const binaryTree = new BinaryTree();
binaryTree.root = root;

// Perform level order traversal and log the result
console.log(binaryTree.levelOrderTraversal());

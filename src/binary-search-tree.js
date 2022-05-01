const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');



/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

constructor() {this.sTree = null;}

  root() {return this.sTree;}

  add(data) {
    this.sTree ? this.sTree = addInto(this.sTree, data):this.sTree = new Node(data);
   

    function addInto(node, nData) {

      if (!node) return new Node(nData);
      if (node.data === nData) return node;
      if (nData > node.data) {
        node.right = addInto(node.right, nData);
      } else {node.left = addInto(node.left, nData);}
      return node;
    }
  }

  has(data) {

    if (this.find(data) !== null) return true;
    else
    return false;
    
  }

  find(data) {

    let it = this.sTree;
    while (it) {
      if (it.data === data) return it;
      data > it.data ? it = it.right : it = it.left;
    }
    return null;
  }

  remove(data) {

    if (!this.sTree) return null;
    this.sTree = del(this.sTree, data);

    function del(node, nData) {
      if (nData > node.data) {node.right = del(node.right, nData); return node;}

      if (nData < node.data) {
        node.left = del(node.left, nData);return node;
      }
      
      if (!node.right && !node.left) return null; 
      if (!node.left) {
        node = node.right; return node;
      }
      if (!node.right) {node = node.left; return node;}
     
      let min = node.right;
      while (min.left) {min = min.left;}
      node.data = min.data;
      node.right = del(node.right, min.data);
      return node;
    }
  }

  min() {
    if (!this.sTree) return null;
    let it = this.sTree;
    while (it.left) {it = it.left;}
    return it.data;
  }

  max() {
    if (!this.sTree) return null;
    let it = this.sTree;
    while (it.right) {it = it.right;}
    return it.data;
  }
 
}

module.exports = {
  BinarySearchTree
};
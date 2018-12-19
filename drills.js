// Input: 'Cheese'
// Output: '0.123'
const BinarySearchTree = require('./bst'); 

function main(){ 
    const BST = new BinarySearchTree(); 
    const arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
    arr.forEach(item => BST.insert(item, true)); 
    // console.log(dsfPreOrder(BST)); 
    let arr2 = []; 
    dsfPreOrder(BST, arr2); 
    console.log(arr2); 

    arr2 =[]; 
    dsfInOrder(BST, arr2); 
    console.log(arr2); 
    
    arr2 =[]; 
    dsfPostOrder(BST, arr2); 
    console.log(arr2); 
}

function dsfPreOrder(BST, output=[]){ 
    output.push(BST.key);  
    if (BST.left) { dsfPreOrder(BST.left, output) } 
    if (BST.right) { dsfPreOrder(BST.right, output); } 
}

function dsfInOrder(BST, output=[]){ 
    if (BST.left) { dsfInOrder(BST.left, output)}
    output.push(BST.key); 
    if (BST.right) { dsfInOrder(BST.right, output)}
}

function dsfPostOrder(BST, output=[]){ 
    if (BST.left) {dsfPostOrder(BST.left, output)}
    if (BST.right) { dsfPostOrder(BST.right, output)}
    output.push(BST.key)
}

main(); 
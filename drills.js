// Input: 'Cheese'
// Output: '0.123'
const BinarySearchTree = require('./bst'); 

function main(){ 
    const BST = new BinarySearchTree(); 
    const arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
    arr.forEach(item => BST.insert(item, true)); 
    // console.log(dsfPreOrder(BST)); 
    // let arr2 = []; 
    // dsfPreOrder(BST, arr2); 
    // console.log(arr2); 

    // arr2 =[]; 
    // dsfInOrder(BST, arr2); 
    // console.log(arr2); 
    
    // arr2 =[]; 
    // dsfPostOrder(BST, arr2); 
    // console.log(arr2);

    // let arr2 = [105,100,121,123,97,125,128];
    // const answer = maxProfit3(arr2);
    // console.log(answer);
    // let arr3 = [20,30,40,50,60];
    // const answer2 = maxProfit3(arr3);
    // console.log(answer2);
    // let arr4 = [100, 97, 121, 123, 98, 99, 105];
    // let answer3 = maxProfit3(arr4);
    // console.log(answer3);

    const library = [
      { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
      { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
      { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
      { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
      { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
      { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
      { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
      { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
      { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
      { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
    ];

    const book = { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' };

    const answer2 = bookSearch(library, book, 0, library.length-1);
    console.log(answer2);

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

function bookSearch(library, book, start=0, end=library.length-1){
  let mid = Math.floor((start+end)/2);
  if(start>end){
    return -1;
  }
  //base case
  if(library[mid].title === book.title){
    return library[mid];
  }if(library[mid].dewey<book.dewey){
    return bookSearch(library, book,mid+1,end);
  } else if(library[mid].dewey>book.dewey){
    return bookSearch(library, book, start, mid-1);
  } else {
    if(library[mid].title===book.title){
      return library[mid];
    } else {
      while(mid < library.length && library[mid].dewey===book.dewey){
        if(library[mid].title===book.title){
          return library[mid];
        }
        mid++;
      }
      mid--;
      while(mid>-1 && library[mid].dewey===book.dewey){
        if(library[mid].title===book.title){
          return library[mid];
        }
        mid--;
      }
      return -1;
    }
  }
}

function maxProfit(arr){
  let max_profit = -1;
  let buy_price = 0;
  let sell_price = 0;
  let count=0;
  let change_buy = true;

  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i; j++){
      sell_price = arr[i+j];
      count++;
      if(change_buy){
        buy_price = arr[i];
      }
      if(sell_price < buy_price){
        change_buy = true;
        continue;
      } else {
        let temp = sell_price - buy_price;
        if(temp > max_profit){
          max_profit = temp;
        }
        change_buy = false;
      }
    }
  }
  console.log(count);
  return max_profit;
}
//O(n^2)

function maxProfit2(arr){
  let buy_index = arr.length;
  let sell_index = 0;
  let prices = arr;
  let min = Number.POSITIVE_INFINITY;
  let max = 0;
  let profit = -1;
  let count=0;
  while(buy_index >= sell_index){
    if(min!==Number.POSITIVE_INFINITY){
      prices.splice(sell_index,1);
    }
    for(let i=0; i<prices.length; i++){
      if(arr[i]>max){
        max=arr[i];
        sell_index=i;
      }
      if(arr[i]<min){
        min = arr[i];
        buy_index=i;
      }
      count++;
    }
  }
  console.log(count);
  return arr[sell_index]-arr[buy_index];
}

function maxProfit3(arr){
  let maxProfit = arr[1]-arr[0];
  let minPrice = arr[0];
  for(let i=0; i<arr.length-1; i++){
    if(arr[i]<minPrice){
      minPrice = arr[i];
    }
    if(arr[i]-minPrice > maxProfit){
      maxProfit = arr[i]-minPrice
    }
  }
  return maxProfit;
}

// function maxProfit2(arr){
//   let buy_index =0;
//   let sell_index = 1;
//   let min = 0;
//   let max = 0;
//   while(buy_index < sell_index){
//     let buy_price = arr[buy_index];
//     let sell_price = arr[sell_index];
//     let temp = sell_price-buy_price;
//     if(buy_price>sell_price){
//       buy_index++;
//       sell_index++;
//     }
//     if(sell_price>buy_price){
//       sell_index++;
//     }
//   }
// }


//            v       v
//input: [128,97,121,123,98,97,105]
//output: 123-97 = 26

//    buy v      sell v
//input: [20,30,40,50,60]
//ouput: 40 <= 60-20

/*

-iterate thru each num in list
-at index i, get the i+j index price and
 check if higher than the index i price
-set buy price at i and sell price at i+j
 then calc sell price - buy price
-if future stock price is cheaper than current buy price
 set this to be the new buy price and repeat
-otherwise, only change the sell-price and keep buy price

*/

main(); 
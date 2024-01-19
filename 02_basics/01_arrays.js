
const myArr = [1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]); // 1
console.log(myHeros); // [ 'shaktiman', 'naagraj' ]
console.log(myArr2); // [ 1, 2, 3, 4 ]

// Array Methods

// myArr.push(6)
myArr.push(7)
console.log(myArr);  // [ 1, 2, 3, 4, 5, 6 , 7]

myArr.pop()
console.log(myArr);  // [ 1, 2, 3, 4, 5, 6 ]

myArr.unshift(9) // add number at the starting
console.log(myArr);
/*
[
  9, 1, 2, 3,
  4, 5, 6
] 
*/

myArr.shift()  //  here we have removed that number 9 from array
console.log(myArr);  // [ 1, 2, 3, 4, 5, 6 ]

console.log(myArr.includes(9));  //  false

console.log(myArr.indexOf(9));  //  -1
console.log(myArr.indexOf(3));  //  2

const newArr = myArr.join()


console.log(myArr);  // [ 1, 2, 3, 4, 5, 6 ]
console.log(newArr);  //  1,2,3,4,5,6

console.log(typeof myArr);  //  object
console.log(typeof newArr);  //  string (because of join)


// Slice AND  Splice

console.log("A", myArr);  // A [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);  // [ 2, 3 ]
console.log("B", myArr);  //  B [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  // C  [ 1, 5 ]
console.log(myn2);  // [ 2, 3, 4 ]

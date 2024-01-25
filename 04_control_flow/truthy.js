const userEmail = "r@rishabh.ai"
const userEmail2 = []

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Dont have user email");
}

// FALSY VALUES

// flase, 0, -0, BigInt 0n, "", null , undefined, NaN


// TRUTHY VALUES

// "0" , 'false', " ", [], {}, function(){}, 

if(userEmail2.length === 0) {
    console.log("Array is empty");  // Array is empty
}

const emptyObj = {}

if (Object.keys(emptyObj).length == 0) {
    console.log("Object is Empty");      // Object is Empty
}

false == 0 // true
false == ''  // true
0 == '' //true

// Nullish Coalescing Operator (??): null underfined

let val1;

val1 = 5 ?? 10  // 5
val2 = null ?? 10  // 10 (null is not returened in the output)
val3  = undefined ?? 15  // 15
val4 = null ?? 10 ?? 20  // 10


console.log(val1); // 5
console.log(val2); // 10 (null is not returened in the output)
console.log(val3); // 15
console.log(val4); // 10


// TERNIARY OPERATOR

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // more than 80

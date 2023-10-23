// There are two types of Memories
// Stack (Primitive) & Heap (Non Primitive)

let myYoutubeName = "rishabhdhawaddotcom";

let anotherName = myYoutubeName;
anotherName = "ChaiOrCode"

console.log(anotherName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ibl"
}

let userTwo = userOne;

userTwo.email = "rishabh@google.com";

console.log(userOne.email);
console.log(userTwo.email);


/* 
datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.
*/
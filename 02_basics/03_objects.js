// objects can be declared in 2 ways - 1) literal & 2) constructor

// singleton object - when we actuall declare objects from literal then singleton is not created
// if its created from a cronstructor its always a singelton

// OBJECT LITERALS

const mySym = Symbol("key1")

const jsUser = {
    name : "Rishabh",
    "full name" : "Rishabh Dhawad",
    // mySym: "mykey1", // here we are using symbol as a string but not as a symbol  (incorrect way of using symbol)
    [mySym]: "mykey1", // correct way of declaring symbol
    age: 18,
    location: "Indore",
    email: "rishabh@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(jsUser.email);  // rishabh@google.com
// console.log(jsUser[email]);  // this will give an error (because its not in the string format)
console.log(jsUser["email"])  // rishabh@google.com

console.log(jsUser["full name"]);  // Rishabh Dhawad

console.log(jsUser.mySym);  // mykey1 (but this is used as a string not as a symbol)

console.log(typeof jsUser.mySym);  // this is of a string type


// this is an actulal way of printing a symbol
console.log(jsUser[mySym]);  // mykey1

jsUser.email = "rishabh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "rishabh@microsoft.com"
console.log(jsUser);  // email: 'rishabh@chatgpt.com',

jsUser.greeting = function(){
    console.log("Hello Js User");  // Hello Js User
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // 
}

console.log(jsUser.greeting());  // Hello JS user, Rishabh
console.log(jsUser.greetingTwo());  // undefined

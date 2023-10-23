const name = "rishabh"
const repoCount = 50

// This is not at all recommended 
console.log(name + repoCount + "value"); // rishabh50value

// Mordern Way is to use BackTick --> ``

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);  // Hello my name is rishabh and my repo is 50

// Another way of declering string

const gameName = new String("rishabh-rd")

console.log(gameName[0]);  // r
console.log(gameName.__proto__); // {}   <- This is an object

console.log(gameName.length); // 7
console.log(gameName.toUpperCase()); // RISHABH
// this dosent change our origninal string because its using STACK


console.log(gameName.charAt(3)); // h

console.log(gameName.indexOf('b')); // 5

// Substring dosent allow negative values
const newString = gameName.substring(0, 4);
console.log(newString); // rish

const anotherString = gameName.slice(-5,4);
console.log(anotherString); 

const newStringOne = "    rishabh     "
console.log(newStringOne);  //    rishabh     
console.log(newStringOne.trim()); //rishabh


const url = "https://rishabhdotcom/rishabh%20dhawad"

url.replace('%20', '-'); // this is how we replace the string
console.log(url.replace('%20', '-')); // https://rishabhdotcom/rishabh-dhawad

console.log(url.includes('rishabh')); // true
console.log(url.includes('rohit'));  // false

// Convert String into an Array

// spliting on the basis of dash '-'
console.log(gameName.split('-')); // [ 'rishabh', 'rd' ]



/*

Old way:
Let a = name
Let b = age
let a = prompt("What is your name");
    let b = prompt("What is your age");
    document.write("My name is " + a + "and i am " + b + "years old")


New way:
let a = prompt("What is your name");
    let b = prompt("What is your age");
    document.write(`Hello my name is ${a} and I'm ${b} years old `);

We use ` ` to write complete string and will use ${} to inject variables in it.

*/
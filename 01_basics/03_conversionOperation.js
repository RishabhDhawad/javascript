let score1 = "33"

console.log(typeof score1);  //string
console.log(typeof (score1)); //string

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);   // 33



let score2 = null

console.log(typeof score2);  //object
console.log(typeof (score2)); //object

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);  //number
console.log(valueInNumber2);   // 0



let score3 = undefined

console.log(typeof score3);  //undefined
console.log(typeof (score3)); //undefined

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);  //number
console.log(valueInNumber3);   // NaN



let score4 = true

console.log(typeof score4);  //boolean
console.log(typeof (score4)); //boolean

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);  //number
console.log(valueInNumber4);   // 1



let score5 = "rishabh"

console.log(typeof score5);  //string
console.log(typeof (score5)); //string

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);  //number
console.log(valueInNumber5);   // NaN


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  // true


let isLoggedIn2 = "rishabh"

let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2);  // true


let isLoggedIn3 = ""

let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3);  // false


// 1 => true ; 0 => false
// "" => false
// "rishabh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);   //  33
console.log(typeof stringNumber);  //string


// ********************OPERATIONS**************************


let value = 3;
let negValue = -value;
console.log(negValue);   // -3



let str1 = "hello";
let str2 = " rishabh"

let str3 = str1 + str2;
console.log(str3);   // hello rishabh


console.log("1" + 2);  //  12
console.log(1 + "2");  //  12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2");  //32

// try to use much simpler input, try to use paranthesis.
console.log((3 + 4) * 5 % 3); // 2 

console.log(true); //true

// not recomended
console.log(+true);  //1
console.log(+""); //0

// not at all recommended
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;


let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101

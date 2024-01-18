// Premitive Data Type

// There are 7 Catogries
// Strings, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isloggedIn = false;
const outsideTemp = null;
let userEmail; // this will be undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);  // false

// const bigNumber = 2351295657919851278n;


// Reference Type / Non Premitive Data Type
// Arrays, Objects, Functinons

const heroes = ["shaktiman", "nagraj", "doga"]

//objects
let myObj = {
    name: "rishabh",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp); // object

/* 

Return type of variables in JavaScript
1) Primitive Datatypes
    Number => number
    String  => string
    Boolean  => boolean
    null   => object
    undefined  =>  undefined
    Symbol  =>  symbol
    BigInt  =>  bigint

2) Non-primitive Datatypes
    Arrays  =>  object
    Function  =>  function
    Object  =>  object

*/
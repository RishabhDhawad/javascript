// IF STATEMENT

const isUserLoggedIn = true

if(2 == "2") {
    console.log("executed");  // executed
}

if(2 === "2") {
    console.log("executed");  // it will not run
}

// comparison Operatoors
// < , > , <= , >= , == , != , === , !==

const temperature = 41

if(temperature === 40) {
    console.log("less than 50");  // less than 50
} else {
    console.log("temp is greater than 50"); 
}

console.log("this will always execute");

const score = 200

if(score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);  // User power: fly
}


// Short Hand Notation

const balance = 1000

// This is an example of IMPLICIT scope
// This is a bad practice 
// if (balance > 500) console.log("test");

// NESTING OF LOOPS

if (balance < 500) {
    console.log("less than");
} else if(balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");  // less than 1200
}

const userLoggerIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggerIn && debitCard) {
    console.log("Allow to buy course");  // Allow to buy course
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged In");  // User logged In
}


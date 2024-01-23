
function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}

// sayMyName -> this is a refference of function
// sayMyName() -> this is an execution of function

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}


addTwoNumbers()  // Nan
addTwoNumbers(3, 4)  // 4
addTwoNumbers(3, "4")  // 34
addTwoNumbers(3, "a")  // 3a
addTwoNumbers(3, null)  // 3

const result = addTwoNumbers(3, 5)  
console.log("Result: ", result);  // Result:  undefined

function addTwoNumbers2(number3, number4){
    let result = number3 + number4
    return result
}

const result2 = addTwoNumbers2(3, 5)  // 4
console.log("Result: ", result2);  // Result:  8


function addTwoNumber3(number5, number6){
    return number5 + number6;
}

const result3 = addTwoNumber3(4, 5)
console.log("Result: ", result3);  // Result:  9


function loginUserMessage(username){
    if(username === undefined){  // or (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("rishabh") -> this will not run because this is not printing the message

// correct format is below 
console.log(loginUserMessage("rishabh"))  // rishabh just logged in

console.log(loginUserMessage(""))  // just logged in

console.log(loginUserMessage())  //Please enter a username, undefined

// SItuation where we dont know how many arguments will come inside the function

function calculateCartPrice(...num1) { //(...num) here these 3 dots are a rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));  // [ 200, 400, 500, 2000 ]

const user = {
    username : "rishabh",
    price: 499
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)  // username is rishabh and price is 499

// another way to write this
handleObject({
    username: "ram",
    price: 399
})   // username is ram and price is 399

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));  // 400
console.log(returnSecondValue([200, 400, 100, 600]));  // 400

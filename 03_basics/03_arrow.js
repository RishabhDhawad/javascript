const user = {
    username: "rishabh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// "this" keyword reffers current context

// user.welcomeMessage()  // rishabh , welcome to website
// user.username = "sam"
// user.welcomeMessage()  // sam , welcome to website

// console.log(this);  // {}

function chai() {
    let username = "rishabh"
    console.log(this);  // bhoot sari values
    // console.log(this.username);  // undefined
}

chai()  // bhoot sari values

const chai2 = function () {
    let username = "rishabh"
    console.log(this.username);  // undefined
}

chai2()  // undefined


// ARROW function
const chai3 = () => {
    let username = "rishabh"
    console.log(this.username);  // undefined
}

chai3() // undefined


// ARROW FUNCTION

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));  // 7

// INMLECIT RETURN 
const addTwoo = (num1, num2) => num1 + num2

console.log(addTwoo(3, 4));  // 7

// another way of IMPLECIT RETURN
const addNumber = (num1, num2) => ( num1 + num2 )

console.log(addNumber(3, 4));  // 7

// how to return an object in an arrow function

const addNumber2 = (num1, num2) => ({username: "rishabh"})

console.log(addNumber2(3, 4));  // { username: 'rishabh' }

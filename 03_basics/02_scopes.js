// var c = 300

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30; // this is avoided in general because this will provide values outside the scope
}

// console.log(a);  // error
// console.log(b);  // error
// console.log(c);  // 30 -> this will run for the above scope

let d = 300

if (true) {
    let d = 10
    const e = 20
    console.log("Inner Scope: ", d); // Inner Scope:  10
}

console.log(d);  // 300


// NESTED SCOPE

function one(){
    const username = "rishabh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); -> this line will give error because this is outside the scope
    
    two()  // rishabh
}

one()


if(true) {
    const username = "rishabh"
    if(username === 'rishabh') {
        const website = " youtube"
        console.log(username + website); // rishabh youtube
    }
    // console.log(website); error because excecing outside the scope
}
// console.log(username); error because excecing outside the scope

// +++++++++++++++++++++++ INTERESTING +++++++++++++++++++++

addOne(5) // this statement willll run easily ang gove 6

function addOne(num){
    return num + 1
}

// this is also know as hosting
addTwo(5) // but this will not run because of hosting as ot dosent have access to the below function

const addTwo = function(num){
    return num + 2
}

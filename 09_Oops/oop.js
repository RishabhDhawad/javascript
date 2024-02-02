// object literal

const user = {
    username: "rishabh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);  // this current context code
    }
}

//console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // {}


// ------CONSTRUCTOR FUNCTIONs-----
// here new is a constructor function

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    // left hand side is variable
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeeting = function(){
        console.log(`Welcome ${this.username}`); //  greeeting: [Function (anonymous)]
    }

    //return this -> write this or not , this will always work
}


const userOne = new User("rishabh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);  // [Function: User]
console.log(userOne);
console.log(userTwo);


// output without new and witout user two consol log

/*
 username: 'rishabh',
  loginCount: 12,
  isLoggedIn: true
*/


// here all values are overwrite
/*
  username: 'ChaiAurCode',
  loginCount: 11,
  isLoggedIn: false
}
*/

// if we put new keyword in the above code [line 36,37]
// output


// output after new keyword ans both the log staments

// User { username: 'rishabh', loginCount: 12, isLoggedIn: true }
// User { username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false }


// something about 'new' keyword
/*

1) As soon as we use new keyword - empty object is beign created, which is also called instances

STEP 1: new object is being created
STEP 2: constructor function is called because of 'new' keyword.
STEP 3: all the arguments are being injected inside 'this' keyword
STEP 4: we get the resulted output

*/
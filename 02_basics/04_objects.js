// const tinderUser = new Object()  // This is a singelton object
// const tinderUser = {} // This is non singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rishabh",
            lastname: "dhawad",
        }
    }
}

console.log(regularUser.fullname);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }{ userfullname: { firstname: 'rishabh', lastname: 'dhawad' } }

console.log(regularUser.fullname.userfullname); // { firstname: 'rishabh', lastname: 'dhawad' }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {4: "a", 5: "b"}

const obj4 = { obj1 , obj2}  // this is incorrect way to merge objects

console.log(obj4);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


const obj5 = Object.assign(obj1, obj2)
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// another way to get the same output as this

const obj6 = Object.assign({}, obj1, obj2) // add this paranthesis in the starting (but this is an optional character)
console.log(obj6);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj7 = Object.assign({}, obj1, obj2, obj3)
console.log(obj7); // { '1': 'a', '2': 'b', '3': 'a', '4': 'a', '5': 'b' }


const obj8 = {...obj1, ...obj2}  // using spread operator
console.log(obj8);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const user = [
    {
        id: 1,
        email: "r@gmail.com",
    },
    {
        id: 2,
        email: "d@gmail.com",
    },
]

user[1].email
console.log(tinderUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]


console.log(Object.values(tinderUser));  // [ '123abc', 'Sammy', false ]


console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true

console.log(tinderUser.hasOwnProperty('isLogged'));  // false

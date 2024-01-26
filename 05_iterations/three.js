// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "UNited States Of America")
map.set('FR', "France")

console.log(map);

/*
Map(3) {
  'IN' => 'India',
  'USA' => 'UNited States Of America',
  'FR' => 'France'
}
*/

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

/*
IN :- India
USA :- UNited States Of America
FR :- France
*/

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// these will not work as these are not iteratable

for (const [key, value] of myObject) {
    console.log(key, '-', value);
}

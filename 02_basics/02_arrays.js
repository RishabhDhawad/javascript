const marvelHeroes = ["thor", "Ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

marvelHeroes.push(dcHeroes)

console.log(marvelHeroes);  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  (array inside an array)

console.log(marvelHeroes[3][1]);  // flash

const allHeroes = marvelHeroes.concat(dcHeroes)
console.log(allHeroes);  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// easy method of concat -> spread operator

// Spread Operator

const allNewHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allNewHeroes);  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// All the data will get spread out here 
// In the bracket we have to write at how much depth we have to spread the array. 
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log((Array.isArray("Rishabh")))  // false

console.log((Array.from("Rishabh")))  // [ 'R', 'i', 's', 'h', 'a', 'b','h']

// This is an interesting case
console.log(Array.from({name : "Rishabh"})); // []
// This is not able to convert this case


let score1 = 100
let score2 = 200;
let score3 = 300;

// This will return a new set of elemets
console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]

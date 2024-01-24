// Immediately Invoked Function Expressions (IIFE)

// to remove the pollution from the global scope we generally use IIFE

(function chai(){
    // It is a type of named IIFE
    console.log(`DB Connected`);
})(); // This semicolon is compulsory to write between 2 IIFE

// Output will be: DB Connected

// SYNTAX: ()()

// IIFE as an ARROW function

( (name) => {
    console.log(`DB Connected Two ${name}`);
} )('rishabh')  // DB Connected Two rishabh

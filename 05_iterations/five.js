// FOR EACH LOOP

const coding = ["js", "java", "ruby", "python", "cpp"]

coding.forEach( function (val) {
    console.log(val);
} )

/*
js
java
ruby
python
cpp
*/

// ARROW FUNCTION IN FOR EACH LOOP

coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

/*
js 0 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
java 1 [ 'js', 'java', 'ruby', 'python', 'cpp' ]       
ruby 2 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
python 3 [ 'js', 'java', 'ruby', 'python', 'cpp' ]     
cpp 4 [ 'js', 'java', 'ruby', 'python', 'cpp' ]  
*/

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: "js"
    },
    {
        languageName: 'java',
        languageFileName: "java"
    },
    {
        languageName: 'python',
        languageFileName: "py"
    },
]

myCoding.forEach(  (item) => {
    
    console.log(item.languageName);
} ) 

/*
javascript
java
python
*/

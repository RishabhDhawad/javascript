const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

// FOR IN LOOP

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

// FOR IN LOOP ON ARRAYS

const programing = ["js", "rb", "py", "java", "cpp"]

for (const key in programing) {
    console.log(programing[key]);
}

/*
js
rb
py
java
cpp
*/

// FOR IN LOOPS ON MAP

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")

// MAP is not iteratable so it will not work
for (const key in map) {
    console.log(key);
}

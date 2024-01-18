// Dates

let myDate = new Date()
console.log(myDate); // 2024-01-18T14:32:42.334Z
console.log(myDate.toString()); // Thu Jan 18 2024 20:00:00 GMT+0530 (India Standard Time)

console.log(myDate.toISOString);  // [Function: toISOString]  
console.log(myDate.toJSON);  // [Function: toJSON]
console.log(myDate.toLocaleString);  // [Function: toLocaleString]
console.log(myDate.toLocaleTimeString);  // [Function: toLocaleTimeString]

console.log(typeof myDate);  // object

let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2024

let myCreatedDate2 = new Date("2024-01-18")
console.log(myCreatedDate2.toDateString());  // Wed Jan 18 2024

let myCreatedDate3 = new Date("01-18-2024")
console.log(myCreatedDate3.toDateString());  // Thu Jan 18 2024

let myTimeStamp = Date.now()
console.log(myTimeStamp);  // 1705594376858

console.log(myCreatedDate.getTime()); // 1705948200000

console.log(Math.floor(Date.now()/1000)); // 17059482


let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());  // 2024
console.log(newDate.getTime());  // 1705594569951
console.log(newDate.getHours()); // 21

// `${newDate.getDay()} and time is `

newDate.toLocaleString('default', {
    weekday: "long",
})

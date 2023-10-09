const accountId = 144553
let accountEmail = "rishabh@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"  // do not use this type of decleration
let accountState;  // output will be undefined

// accountId = 2 // not allowed

accountEmail = "rd@rd.com"
accountPassword = "121212"
accountCity = "Bengaluru"

console.log(accountId);

/* 
Prefered not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
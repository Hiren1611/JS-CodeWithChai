const  accountId = 2024001
let accountEmail = "hiren@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"  // not prefrable use only let and const for variable declaration
let accountState ;  // if we don't give value when declaring variable it's called undefined 
// accountId = 2  not allowed 

/* 
const variable can't be Changed once Assigned or Declared
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// let => block scope {} currly braces 
// var => no scope  //prefer not to use var because of issue in block scope and functional scope

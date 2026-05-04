const accountId = 144553
let accountEmail = "shivani@example.com"
var accountPassword = "12345"
accountCity = "Jaipur"
//accountId = 2 // This will throw an error because accountId is a constant and cannot be reassigned.
accountEmail = "shivani@outlook.com"
accountPassword = "54321"
accountCity = "Delhi"

let accountState; // This will declare a variable without initializing it, and it will have the value of undefined.
//console.log(accountState) // This will print undefined to the console because accountState has not been assigned a value yet.
/*
Prefer not to use var as it is function-scoped and can lead to unexpected behavior. Instead, use let for variables that may change and const for variables that should not change. 
in this example, accountId is declared as a constant because it should not change, while accountEmail, accountPassword, and accountCity are declared with let because they can be reassigned.
because of issue in block scope and function scope, var can lead to bugs and confusion, especially in larger codebases. Using let and const helps to avoid these issues and makes the code more predictable and easier to debug.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
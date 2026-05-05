/*
let score = "33bc"

console.log(typeof score) //33
console.log(typeof (score)) //string

let value = Number(score)//parseInt(score) //converts string to number
console.log(typeof value) //number
console.log(value) //NaN (Not a Number) because "33bc" cannot be converted to a valid number

let score2 = null
console.log(typeof (score2)) 

let value2 = Number(score2)//parseInt(score2) //converts null to 0
console.log(typeof value2) //number
console.log(value2) //0 because null is converted to 0 when using Number() function


let score2 = undefined
console.log(typeof (score2)) 

let value2 = Number(score2)//parseInt(score2) //converts undefined to NaN
console.log(typeof value2) //number because NaN is considered a number type in JavaScript
console.log(value2) //NaN because undefined cannot be converted to a valid number

//======Conversions========
"33"=> 33
"33abc"=> NaN
null => 0
undefined => NaN
true => 1
false => 0
*/

/*
let isloggedIn = 1
let booleanValue = Boolean(isloggedIn) //converts 1 to true
console.log(typeof booleanValue) //boolean
console.log(booleanValue) //true because 1 is a truthy value in JavaScript
*/

/*
1=> true
0=> false
any non-zero number => true
null, undefined, NaN, 0, '' (empty string) => false
*/

let str = 33
let strValue = String(str) //converts number to string
console.log(typeof strValue) //string
console.log(strValue) //"33" because the number 33 is converted to a string "33"    


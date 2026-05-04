"use strict";//treat all js files as modern js
let name = "Shivani"
let age = 22
let isStudent = true
//number range: -2^53 to 2^53
//bigInt is used to represent numbers larger than 2^53
//decimal numbers are represented using the number type, but they can lead to precision issues
//string representation double quotes or single quotes

//boolean values: true or false
//null represents the intentional absence of any object value 
//null is standalone value that represents the absence of any object value
//undefined represents a variable that has been declared but not assigned a value
//symbol is a unique and immutable primitive value that can be used as the key of an object property
let emptyValue = null

//objects are collections of key-value pairs, where the keys are strings (or symbols) and the values can be of any type
console.log(typeof '234') //string
console.log(typeof age) //number
console.log(typeof isStudent) //boolean
console.log(typeof undefined) //undefined
console.log(typeof null) //object
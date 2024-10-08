let score = "33abc"

//console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // here value of score is 33abc which is not a number but we are trying to convert that value to number
//iska type Number ho jayega but iski value NaN aayegi becoz we are trying to convert a string into number
//let score = "33abc" o/p NaN(Not a Number)
//let score = null o/p 0
//let score = undefined o/p NaN
//let score = true o/p 1 false o/p 0
//but teeno ka type number hoga usme value NaN hogi ya 0 hogi 

let isLoggedIn = "shaistha"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); //o/p true 
/*
1 => true 0=> false
"" => false
"shaistha" => true  
*/

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// =========== Operations ===============

let value = 3
let negVal = -value
// console.log(negVal);
// console.log(2-2);
// console.log(2+2);
// console.log(2*2);
// console.log(2**2); // 2 to the power 2 
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " shaistha"
let str3 = str1 + str2
// console.log(str3);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // o/p 122
// console.log(1 + 2 + "2"); // o/p 32
// console.log(1 + "2" + 2); // o/p 122

console.log(+true); // o/p 1
console.log(+""); // o/p 0
console.log(true + true); // o/p 2

let getCounter = 100
getCounter++
++getCounter
console.log(getCounter);

//link to study 
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


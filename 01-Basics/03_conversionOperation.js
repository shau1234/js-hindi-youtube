let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // here value of score is 33abc which is not a number but we are trying to convert that value to number
//iska type Number ho jayega but iski value NaN aayegi becoz we are trying to convert a string into number
//let score = "33abc" o/p NaN(Not a Number)
//let score = null o/p 0
//let score = undefined o/p NaN
//let score = true o/p 1 false o/p 0
//but teeno ka type number hoga usme value NaN hogi ya 0 hogi 

let isLoggedIn = "shaistha"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //o/p true 
/*
1 => true 0=> false
"" => false
"shaistha" => true  
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


const score = 400
//console.log(score); // o/p 400


const balance = new Number(100)
//console.log(balance); //o/p [Number: 100]

// console.log(balance.toString()); // o/p 400
// console.log(balance.toString().length); // o/p: 3 since the value of balnce is converted to string we can use the methods of strings as well 
// console.log(balance.toFixed(2));// o/p 100.00 Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. Returns a string representing a number in fixed-point notation.

const otherNumber = 7168.8675 
//console.log(otherNumber.toPrecision(3)); //o/p 679
/*
Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
Number od digits in the o/p must be 3 if it is more than that the rest will be in exponent.
otherNumber = 78.8675 
console.log(otherNumber.toPrecision(3)) // o/p 78.9
otherNumber = 1678.8675 
console.log(otherNumber.toPrecision(3)); //o/p 7.17e+3 her the value in decimal is 3 rest all is converted to exponent
*/

const newNymber = 1000000
//console.log(newNymber.toLocaleString('en-IN')); //o/p 10,00,000 but default representation is in US format 1,000,000 


// ============ Maths ==========

// console.log(Math); //o/p Object [Math] {}
// console.log(Math.abs(5)); // o/p 5Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
// console.log(Math.abs(-5)); // o/p 5
// console.log(Math.round(5.8)); // o/p 6 Returns a supplied numeric expression rounded to the nearest integer.
// console.log(Math.ceil(4.2)); // o/p 5 Returns the smallest integer greater than or equal to its numeric argument.
// console.log(Math.floor(4.8)); // o/p 4 Returns the greatest integer less than or equal to its numeric argument.
// console.log(Math.min(4,6,3,5)); // o/p 3
//console.log(Math.max(4,6,3,5)); // o/p 6

console.log(Math.random()); //Returns a pseudorandom number between 0 and 1.
console.log((Math.random()*10) + 1); //+1 is to avoid 0 after decimal and (Math.random()*10) means values will be in range of 0-10
console.log(Math.floor((Math.random()*10) + 1)); // lowest values will be displayed... if value is 0.6879000 due to floor it will convert it to 0 so that is the reason added +1 to get values >=1


const min = 10
const max = 20
// if we want random values b/w 10 and 20
console.log(Math.floor(Math.random() * (max - min +1)) + min ); // (max - min +1) displays values b/w max and min exculduing 0 after decimal and + min indicates values start from min



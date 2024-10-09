"use strict" //treat all JS code as newer version

//alert(3 + 3) // we are using node.js, not browser so can't use alert 

console.log(3 + 
    3) //code readability should be high avoid writting like this
console.log("Shaistha")

let name = "Shaistha"
let age = 24
let isLoggedIn = false

const id = Symbol ('123')
const anotherId = Symbol ('123')
console.log(id === anotherId);  //o/p: false becoz both values are refering to diff objects


/* Primitive DataTypes (call by value) jab bhi aap inko kahin se kahin copy karte hai jo inka org data hai wo reference memory ka nahi diya jata 
wo copy karke aapko diya jata hai alag and usme jo bhi aap changes karte hai wo copy me karte hai 

Number -> 2 to power 53
BigInt if range is more than number
String use ""
Boolean => true/false
null it is a standalone value hai specially type hai ek
undefined -> let state; matlab value assign nahi hai lekin null we can assign eg: let state = null
symbol -> for uniqueness of components/value
*/

// console.log(typeof name );
// console.log(typeof null); // this prints Object as o/p becoz ye ek value hai 
// console.log(typeof undefined); // typeOf undefined is undefined only becoz ye ek type hai JS ka 


/* 
Reference (Non-premitive) types // all the datypes of this returns as object 
Arrays
Objects
Functions
*/

//Arrays
const array = ["Raj", "Rakesh", "Pooja"];
let myobj = {
    name:"shaistha",
    age : 24
}

const myFunction = function(){ // type of this myFunction is a object function 
    console.log("Hello World");
    
}

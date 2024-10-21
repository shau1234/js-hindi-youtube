const name = "Shaistha"

const repoCount = 10

console.log(name + repoCount + " Repositories"); // don't use this way instead use back ticks `` (called string interpretation)as shown below

console.log(`My name is ${name} and my repository count is ${repoCount}`);
//adv of string interpretation is on the go bohat saare operations kar sakte hai jaise ${name.toUpperCase} etc

 //we can declare a string using new key word as well

 const gameName = new String('shaisthass') // It stores the string value is key value pair 
 /*
 0:s  0 -> key s -> value
 1:h
 2:a
 3:i
 4:s
 5:t
 6:h
 7:a
 8:s
 9:s
 */
console.log(gameName.__proto__); // this is the syntax of using prototypes like lenght, concat, toUppercase so on..
console.log(gameName.length);
console.log(gameName[4]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4) //excluding last index i.e 4
//if we give -ve it'll not accept it'll start from 0th index
console.log(newString);

const anotherString = gameName.slice(-8,4) // prints from reverse
console.log(anotherString);

const newStringOne = "    shaistha    "
console.log(newStringOne);
console.log(newStringOne.trim());// removes white spaces from string


const url = "https://shaistha.com/shaistha%20Shariff" 
console.log(url.replace('%20','-')); //replaces %20 with -
console.log(url.includes('shaistha')); //true


const newGameName = "shaistha-ss-fun"
console.log(newGameName.split('-')); //Split a string into substrings using the specified separator and return them as an array.



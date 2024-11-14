// Arrays 
// javaScript arrays are resizable and can contain mix of different data types
// in javascript array-copy operstions create shallow copy rather than deep copy 
// shallow copy-> A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
// deep copy->A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made

const myArr = [0, 1, 3, 7, 6, 8]
const myHeros = ["Caps", "Ironman"]
const myArr2 = new Array(1,2,3,4,6)
//console.log(myArr2[2]); // o/p 3 

//Array methods

myArr.push(9)
myArr.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

//myArr.unshift(2) // o/p: [2, 0, 1, 3, 7, 6, 8] //Inserts new elements at the start of an array, and returns the new length of the array.
myArr.shift() // o/p: [ 0, 1, 3, 7, 6, 8 ] // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.


// console.log(myArr.includes(9)); //Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(myArr.indexOf(88));// o/p:-1 Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArr = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr); //o/p : [ 1, 3, 7, 6, 8 ]
// console.log(newArr); // o/p : 1,3,7,6,8


// slice, splice

console.log("A: "+myArr ); // o/p A: 1,3,7,6,8

const myn1 = myArr.slice(1,3) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(myn1); // o/p : [ 3, 7 ]
console.log("B: "+myArr); // o/p B: 1,3,7,6,8


const myn2 = myArr.splice(1,3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(myn2); //o/p: [ 3, 7, 6 ]
console.log("C: "+myArr); //o/p C: 1,8





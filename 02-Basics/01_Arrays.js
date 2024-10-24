// Arrays 
// javaScript arrays are resizable and can contain mix of different data types
// in javascript array-copy operstions create shallow copy rather than deep copy 
// shallow copy-> A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
// deep copy->A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made

const myArr = [0, 1, 3, 7, 6, 8]
const myHeros = ["Caps", "Ironman"]
const myArr2 = new Array(1,2,3,4,6)
console.log(myArr2[2]); // o/p 3 

//Array methods

myArr.push(9)
myArr.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

myArr.unshift(2) // o/p: [2, 0, 1, 3, 7, 6, 8] //Inserts new elements at the start of an array, and returns the new length of the array.

console.log(myArr);


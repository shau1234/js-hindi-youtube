// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1); //o/p : true
// console.log("2" == 1); // o/p : false

//Avoid comparing null and undefined with others it creates confusion

// console.log(null > 0); // o/p: false here somtimes it converts null into 0 sand sometimes into NaN so it gives false as o/p 
// console.log(null == 0); //false
// console.log(null >= 0); // true 
// console.log(null < 0); // false
// console.log(null <= 0); //true

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === strict checks value and dataType both should be same 

console.log("2" === 2);

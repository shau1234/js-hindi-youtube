// Dates

let myDate =  new Date()
// console.log(myDate); //o/p 2024-10-23T10:07:36.344Z
// console.log(myDate.toString()); //o/p Wed Oct 23 2024 10:12:37 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // o/p Wed Oct 23 2024
// console.log(myDate.toISOString()); //o/p 2024-10-23T10:14:21.918Z
// console.log(myDate.toJSON); // o/p [Function: toJSON]
// console.log(myDate.toLocaleDateString()); // o/p 10/23/2024
// console.log(myDate.toLocaleString()); // o/p 10/23/2024, 10:14:21 AM
// console.log(typeof myDate); // o/p: Object

let myCreatedDate = new Date(2024, 0, 23) // month is started from 0 in js 
console.log(myCreatedDate.toDateString()); // o/p Tue Jan 23 2024

// let myCreatedDate1 = new Date(2024, 0, 23, 5, 9) // month is started from 0 in js //o/p 1/23/2024, 5:09:00 AM
// let myCreatedDate1 = new Date("2024-01-15") //o/p 1/15/2024, 12:00:00 AM
let myCreatedDate1 = new Date("01-18-2024") // o/p 1/18/2024, 12:00:00 AM
console.log(myCreatedDate1.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // o/p 1729679606086 it is in miliseconds
// console.log(myCreatedDate1.getTime()); // o/p 1705536000000 in ms this 2 values can be compared if wanted to check which is fastest
//console.log(Math.floor(Date.now()/1000)); // o/p 1729679950 in seconds

let newDate = new Date()
console.log(newDate);

console.log(newDate.getDay()); // o/p 3 means wednesday 
console.log(newDate.getMonth() + 1); // +1 is added becoz month starts from 0 so if we want current month need to add +1 

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})); // if we want to customize toLocalString() format u can use this format to customize any property






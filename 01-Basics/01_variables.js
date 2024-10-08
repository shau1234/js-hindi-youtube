//Difference between txt file and js file is this only ki javaScript ka jo complier hai jaise Node.js usme inbuilt likha hai syntax ki ye keyword mile to ye karo and so onabort. 
//console.log() mile toh print karo ya var, let ya const mile toh uska value memory me store karo

const accountId = 144553
let accountEmail = "shaistha@google.com"
var accountPassword = "12345" //var is mostly not used becoz isme block scope ka problem tha {} 
//malab if we use same variable name with var keyword somewhere else inside a block scope{} tha existing value will get updated with latest value
accountCity = "Bangalore" // reserves the memory with thw value
let accountState; // this will be printed as undefined

// accountId= 2 // not allowed becoz const variable value can't be changed

accountEmail = "ss@ss.com";
accountPassword = "342345"
accountCity = "Jaipur"

console.log(accountId);
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //to display multiple values in tabular columns

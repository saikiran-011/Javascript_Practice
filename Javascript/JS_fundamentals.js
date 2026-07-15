
let numbers; // Declaration of variable

numbers = 22; // Initialization of variable

console.log(numbers);


let age = 24;

age = 25; // ✅ Allowed

let age = 26; // ❌ Error


var myName;   // Declaration of variable

myName = "Sai Kiran";  // Initialization of variable 

console.log(myName);


var age = 24;

age = 25;   // ✅ Allowed

var age = 26; // ✅ Also allowed



const PI = 3.14; // Const should be declared and initialize in the same line.

console.log(PI); // Const variables cannot be changed. A const variable can be initialized only once. After that, it cannot be assigned a new value.

const age = 24;

age = 25; // ❌ Error

const age;
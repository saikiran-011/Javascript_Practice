

// Scope defines where you are allowed to use a variable.



 // var Keyword

 // ✅ var — function-scoped, allows redeclaration (legacy behavior).

 // Can be redeclared and reassigned in the same scope. (which leads to unexpected errors as code grows)

 // Ignores boundaries 

var myName;   // Declaration of variable

myName = "Sai Kiran";  // Initialization of variable 

console.log(myName);


var age = 24;

age = 25;   // ✅ Allowed

var age = 26; // ✅ Also allowed





 // let Keyword

 // ✅ let — block-scoped, no redeclaration, allows reassignment.

 // No redeclaration in the same scope, but we can reassign the value in the same scope


let numbers; // Declaration of variable

numbers = 22; // Initialization of variable

console.log(numbers);


let age = 24;

age = 25; // ✅ Allowed

let age = 26; // ❌ Error






  // const keyword

  // ✅ const — block-scoped, no redeclaration, no reassignment, and must be initialized.

  // Both redeclaration and reassigning are not allowed.

  // Declaration and value assigning should be on same line and it can never be updated.

const PI = 3.14; // Const should be declared and initialize in the same line.

console.log(PI); // Const variables cannot be changed. A const variable can be initialized only once. After that, it cannot be assigned a new value.

const age = 24;

age = 25; // ❌ Error

const age;

/* 

Variables 

A variable is a named location that allows a program to store, retrieve, and update information while it is running. Variables make programs dynamic, reusable, readable, and easier to maintain.

*/


/* 

Why Variables ?

-> For improving reusability, 
-> To ease the maintenance
-> To improve readability
*/ 


/* 

Naming conventions for variables 

(Naming Convention != Naming Rules)  

Convention = A convention is an agreed coding style followed by developers to make code consistent, readable, and maintainable. Breaking a convention usually won't stop the program from running, but it makes the code harder for humans to read. (Done between humans nothing to do with machines)
--> Who defines it? → Developers / Community / Team
--> Who enforces it? → Humans (through code reviews, team standards, linters)
--> Who benefits? → Developers


Rule  = A rule is a restriction defined by the programming language. If you break it, the program will produce an error or fail to work correctly. 
--> Who defines it? → JavaScript
--> Who enforces it? → JavaScript Engine
--> Who checks it? → Computer


Rules are for the computer. Conventions are for humans.


1. Why do naming conventions exist? 
-- They make code easy for humans to read and understand.

2. What Makes a Variable Name Good? 
-- A good variable name clearly tells the reader what information it stores.

3. What are JavaScript naming rules?

--->3.1 --- Variable names can contain
            Letters (a-z, A-Z)
            Digits (0-9)
            Underscore (_)
            Dollar sign ($)

    3.2 --- Cannot start with a number

    3.3 --- Can start with
            A letter(a-z) (A-z)
            (_)Underscore
            ($)Dollar sign

    3.4 --- No spaces

    3.5 --- No special characters

    3.6 --- Reserved keywords cannot be used

    3.7 --- JavaScript is case-sensitive

4. What are Variable Naming Conventions for JavaScript?

--->4.1 --- Use camelCase for Variables

    4.2 --- Use Meaningful Names

    4.3 --- Avoid Single-Letter Variable Names

    4.4 --- Boolean Variables Should Sound Like Questions

    4.5 --- Use Nouns for Variables

    4.6 --- Use Plural Names for Arrays

    4.7 --- Don't Add the Data Type to the Name

    4.8 --- Keep Names Short but Descriptive

    4.9 --- Use Consistent Naming

    4.10 -- Name Variables by Their Purpose
*/




// Scope defines where you are allowed to use a variable.





 // var Keyword

 // ✅ var — function-scoped, allows redeclaration (legacy behavior).

 // Can be redeclared and reassigned in the same scope. (which leads to unexpected errors as code grows)

 // Ignores boundaries and accessible before declaration.



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

/* Variables 

A variable is a named location that allows a program to store, retrieve, and update information while it is running. Variables make programs dynamic, reusable, readable, and easier to maintain.
*/


/* Why Variables ?

-> For improving reusability, 
-> To ease the maintenance
-> To improve readability
*/ 


/* Naming conventions for variables 

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


1.Why do naming conventions exist? 
- They make code easy for humans to read and understand.

2.What Makes a Variable Name Good? 
- A good variable name clearly tells the reader what information it stores.

3.What are JavaScript naming rules?
-   1.Variable names can contain
        Letters (a-z, A-Z)
        Digits (0-9)
        Underscore (_)
        Dollar sign ($)

    2.Cannot start with a number

    3.Can start with
    A letter(a-z) (A-z)
    (_)Underscore
    ($)Dollar sign

    4.No spaces

    5.No special characters

    6.Reserved keywords cannot be used

    7.JavaScript is case-sensitive

*/


let numbers;

numbers = 22;

console.log(numbers);



var myName;   // Declaration of variable

myName = "Sai Kiran";  // Initialization of variable 

console.log(myName);



const PI = 3.14; // Const should be declared and initialize in the same line.

console.log(PI); // Const variables cannot be changed. A const variable can be initialized only once. After that, it cannot be assigned a new value.


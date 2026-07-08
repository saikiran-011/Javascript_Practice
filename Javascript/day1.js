/* First Code */ 

console.log("Hello Everyone");
console.log("My Name is Sai Kiran Budumuru");

/*
console is a built-in object provided by the runtime (browser/Node)
that allows JavaScript to send output for debugging and inspection. 

--console is a object 
--log is function of the console object (it sends the data to terminal if using Node Js or Browser console if using browser)
*/

console.log(console);

/* 
Output is

Object [console] {
  log: [Function: log],
  info: [Function: info],
  debug: [Function: debug],
  warn: [Function: warn],
  error: [Function: error],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  dirxml: [Function: dirxml],
  groupCollapsed: [Function: groupCollapsed],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  createTask: [Function: createTask]
}
*/ 




/* Variables 

A variable is a named location that allows a program to store, retrieve, and update information while it is running. Variables make programs dynamic, reusable, readable, and easier to maintain.
*/


/* Why Variables ?

-> For improving reusability, 
-> To ease the maintenance
-> To improve readability
*/ 


/* Naming conventions for variables 

1.Why do naming conventions exist? 
- They make code easy for humans to read and understand.

2.What Makes a Variable Name Good? 
- A good variable name clearly tells the reader what information it stores.

3.What are JavaScript naming rules?

*/


let numbers;

numbers = 22;

console.log(numbers);



var myName;   // Declaration of variable

myName = "Sai Kiran";  // Initialization of variable 

console.log(myName);



const PI = 3.14; // Const should be declared and initialize in the same line.

console.log(PI); // Const variables cannot be changed. A const variable can be initialized only once. After that, it cannot be assigned a new value.


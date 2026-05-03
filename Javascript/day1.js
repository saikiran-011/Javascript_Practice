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

A variable is like a container that stores data so you can use it later in your program.
*/


/* Why Variables ?

-> For improving reusability, 
-> To ease the maintenance
-> To improve readability
*/ 


let numbers;

numbers = 22;

console.log(numbers);



var myName;   // Declaration of variable

myName = "Sai Kiran";  // Initialization of variable 

console.log(myName);



const PI = 3.14; // Const should be declared and initialize in the same line.

console.log(PI); // Const variables cannot be changed. we need to reassign a value to it.(We cannot reinitialize the variable.)


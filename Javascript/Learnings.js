

/*    

Programming languages are designed for humans. Machine instructions are designed for computers.
--> Programming languages make it easier for humans to communicate instructions to computers.

Programming languages are designed by humans to solve human problems. Keywords are design choices, not universal truths.
--> Keywords like var, let, if, and function are chosen by language designers. Another language could choose completely different words.

Programming languages evolve because software evolves.
--> New features are usually introduced because developers encounter new problems—not because the old features suddenly became useless.

One of the biggest sources of software bugs is unexpected changes to shared data.
--> Programs become unreliable when data changes unexpectedly.

The problem is rarely that data can change. The real problem is uncontrolled access to that data.
--> Allowing anyone, anywhere, to change it is what causes bugs.

A variable should exist only where it is needed and be visible only where it is needed.
-->This keeps programs:

    Easier to understand
    Easier to maintain
    Less likely to contain bugs

Functions create their own scope. if, for, and while blocks do not create a new scope for var.

Variables with the same name can exist in different scopes without conflicting with each other.
--> This is a fundamental principle in almost every programming language.

When JavaScript needs a variable, it first searches the current scope. If it isn't found, it continues searching in the enclosing (outer) scope until it either finds the variable or reaches the global scope.
--> This is known as Variable lookup.

As software grows, reducing the visibility of variables and preventing accidental redeclaration makes code safer and easier to maintain.

let is used only when creating a variable. Once the variable exists, you update it by assigning a new value without using let again.

When multiple variables have the same name, JavaScript always uses the one in the nearest (current) scope. The outer variable is hidden while the inner one exists.

When JavaScript searches for a variable, it always uses the nearest matching variable. Once it finds one, it stops searching.


*/
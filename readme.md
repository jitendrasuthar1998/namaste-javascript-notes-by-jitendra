#### What is call stack?

A call stack is a mechanism for an intrepreter to keep track of its place in a script that calls multiple functions - what functions is currently being run and what functions are called with that function.

A call stack keeps track of a functions to be executed.
When we call a function, it's pushed onto the top of the stack.
When the fuction execution completes, that time that function is popped off the stack.

```
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);
```

when the javascript engine executes the script, it places the global execution context (denoted by main() or global()) function at the top of the call stack.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2019/12/JavaScript-Call-Stack-main.png"/>

The global execution context completes memory allocation and moves to the execution phase.

The JavaScript engine executes the call to the "average(10,20)" function and creates a function execution context for the average() function and pushes it onto the top of the call stack.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2019/12/JavaScript-Call-Stack-step-2.png"/>

The JavaScript engine starts executing the average() since because the average() function is on the top of the call stack.

The average() function calls add() function. At this point, the JavaScript engine creates another function execution context for the add() function and places it on the top of the call stack.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2019/12/JavaScript-Call-Stack-step-3.png"/>

JavaScript engine executes the add() function and pops it off the call stack:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2019/12/JavaScript-Call-Stack-step-4.png"/>

At this point, the average() function is on the top of the call stack, the JavaScript engine executes and pops it off the call stack.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2019/12/JavaScript-Call-Stack-step-5.png"/>

Now, the call stack is empty so the script stops executing:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2019/12/JavaScript-Call-Stack-empty-stack.png"/>

The following picture illustrates the overall status of the Call Stack in all steps:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2019/12/JavaScript-Call-Stack.png"/>
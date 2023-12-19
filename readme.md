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

#### What is the Scope Chain?

```
function b(){
    c()
    function c(){
        console.log(a);
    }
}

var a = 5;
b();
```

In above example, we are trying to access the variable a in function c, which we haven't defined in function c.

Because of it, javascript compiler searchs for the variable a outside function c.

Function b is the parent function of function c, and the environment of function b outside function c is called lexical environment.

In that lexical environment, javascript compiler searches for the variable a.

And when javascript compiler deoesn't find the variable a, it comes outside of function b also.

and searches for the variable a outside function b.

Outside function b, we have defined variable a, so now javascript compiler grabs the variable a value and prints it to the console.

#### What is Scope?

Scope means where we can access a specific variable or a function in our code.

Scope is directly dependent on the lexical environment.

Whenever a function is invoked, an execution context and lexical environment is created.

Lexical environment is the local memory along with the lexical environment of its parent.

Lexical as a term means hirarchy.

In above code, function c is lexically siting inside a function.


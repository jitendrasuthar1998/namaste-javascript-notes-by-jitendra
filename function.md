#### What is difference between function statement and fuction expression?

1. **Function Declaration (Statement):**

   **Syntax:**

   ```javascript
   function myFunction() {
     // function body
   }
   ```

   **Hoisting:**

   Function declarations are hoisted in JavaScript. This means you can call the function before it appears in the code.

   **Usage:**

   Function declarations are typically used when you want to declare a named function that can be used anywhere in the scope.

   **Example:**

   ```javascript
   sayHello(); // This works even though the function is called before the declaration.

   function sayHello() {
     console.log('Hello!');
   }
   ```

2. **Function Expression:**

   - **Syntax:**

     ```javascript
     const myFunction = function () {
       // function body
     };
     ```

   - **Hoisting:**

     Function expressions are not hoisted in the same way as declarations. If you try to call the function before the expression, you will get an error.

   - **Usage:**

     Function expressions are often used when you want to create an anonymous function or when you want to assign a function to a variable.

   - **Example:**

     ```javascript
     // This would result in an error: sayHello is not a function
     // sayHello();

     const sayHello = function () {
       console.log('Hello!');
     };

     // This works fine:
     sayHello();
     ```

**Summary:**

- The main difference between function declarations and function expressions lies in how they are hoisted and when they can be called.
- Function declarations are hoisted and can be called before the declaration in the code.
- Function expressions are not hoisted in the same way, so attempting to call them before the expression will result in an error.
- Function expressions are often used for anonymous functions or when you want to assign a function to a variable.

#### What is anonymous function?

In JavaScript, an anonymous function is a function that does not have a name. 

Unlike named functions, which are declared using the `function` keyword followed by an identifier, anonymous functions are defined without a specified name.

**Syntax:**

```javascript
// Anonymous function as a function expression
const myFunction = function () {
  // function body
};

// Anonymous function as an IIFE (Immediately Invoked Function Expression)
(function () {
  // function body
})();
```

**Key Points:**

1. **Function Expression:** 

    Anonymous functions are commonly used as function expressions, where they are assigned to a variable or passed as an argument to another function.

   ```javascript
   const add = function (x, y) {
     return x + y;
   };
   ```

2. **IIFE (Immediately Invoked Function Expression):** 

    Anonymous functions are often used in immediately invoked function expressions (IIFE). An IIFE is a function that is defined and executed immediately after it is created.

   ```javascript
   (function () {
     // IIFE body
   })();
   ```

3. **Callback Functions:**

    Anonymous functions are frequently used as callback functions, especially when passing functions as arguments to other functions.

   ```javascript
   setTimeout(function () {
     console.log('This is an anonymous callback function.');
   }, 1000);
   ```

4. **Arrow Functions:** 
    
    With the introduction of arrow functions in ECMAScript 6 (ES6), it's common to see concise anonymous functions using the arrow function syntax.

   ```javascript
   const square = (x) => x * x;
   ```

Anonymous functions are versatile and provide flexibility in certain scenarios where a named function is not necessary. However, they might make code harder to read and debug in cases where functions are complex or need to be reused in multiple places.

#### What is named function expression?

Named function expression is when we assign a function with identifier to a variable.

```javascript
let x = function printValue(){
    console.log('this is named function expression');
}
```

You can't access printValue() function directly, because it is not in the global scope.
It is inside the local scope of the x variable.

#### what is difference between function parameters and arguments in javascript?

In JavaScript, the terms "parameters" and "arguments" refer to different concepts in the context of functions.

1. **Parameters:**
   
- **Definition:** 
   
   Parameters are variables listed in the function declaration. They act as placeholders for the values that will be passed to the function when it is called.
   
- **Location:** 

    Parameters are part of the function signature and are specified within the parentheses following the function name.

   - **Example:**
     
     ```javascript
     function add(a, b) {
       // 'a' and 'b' are parameters
       return a + b;
     }
     ```

2. **Arguments:**

   - **Definition:** 
   
        Arguments are the actual values passed to a function when it is invoked. They correspond to the parameters and provide concrete values for the function to work with.
   
   - **Location:** 
   
        Arguments are the values that appear inside the parentheses when calling a function.
   
   - **Example:**
     
     ```javascript
     const result = add(5, 3);
     // 5 and 3 are arguments
     ```

**Summary:**
- **Parameters** are variables in the function declaration that act as placeholders.

- **Arguments** are the actual values passed to a function when it is called.

- Parameters and arguments are related: parameters define what data a function expects, and arguments provide that data when calling the function.

- The terms are often used interchangeably, but understanding the distinction can be helpful for clarity in communication about code.

In the example above, `a` and `b` in the `add` function are parameters, and when you call `add(5, 3)`, `5` and `3` are the arguments passed to the function. The function then uses these arguments to perform the addition and return the result.

#### What are first class functions?

When functions are treated as value that is passed to other function as argument or return from other function or assigned to a variable or saved a value in an array or object.


In JavaScript, first-class functions refer to the ability of functions to be treated as first-class citizens. This means that functions in JavaScript can be:

1. **Assigned to variables:**
   ```javascript
   const myFunction = function() {
     console.log("Hello, world!");
   };
   ```

2. **Passed as arguments to other functions:**
   ```javascript
   function greet(callback) {
     callback();
   }

   greet(function() {
     console.log("Greetings!");
   });
   ```

3. **Returned from other functions:**
   ```javascript
   function createFunction() {
     return function() {
       console.log("I am a function!");
     };
   }

   const myFunction = createFunction();
   myFunction();
   ```

4. **Stored in data structures:**
   ```javascript
   const functionArray = [
     function() { console.log("Function 1"); },
     function() { console.log("Function 2"); },
     function() { console.log("Function 3"); }
   ];

   functionArray[0](); // Outputs: Function 1
   ```

The concept of first-class functions is a fundamental feature of functional programming languages. In JavaScript, it allows for more flexible and expressive code by enabling functions to be treated as values that can be manipulated, passed around, and composed in various ways.

This capability is particularly powerful when combined with other features like closures and higher-order functions. It enables the creation of more modular and reusable code, as functions can be passed as arguments to other functions, making it easier to write generic and flexible code.
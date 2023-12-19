Variable declared outside of any function is attached to the window object of global scope.

You can access them using window object or this keyword.

#### what is temporal dead zone?

Temporal dead zone is the time since when let variable was hoisted till it is initialized some value. The time between that known as temporal dead zone.

#### How you can avoid temporal dead zone?

Temporal dead zone sometime mess our life as a developer also. It can lead to unexpected errors.

So, the best way to avoid temporal dead zone to always put variables initialization at top level inside your code.

As soon as your javascript engine starts executing JavaScript code, it first encounters initialization of variables. And then start executing your other logics.



#### Are let and const declarations hoisted?

Yes, let and const declarations are hoisted.

#### what is difference between syntax error, reference error and type error?

Reference error occurs when javascript engine tried to find out a variable value in current scope. And if it doesn't found out that variable, that time it throws an ReferenceError.

Example of reference error is :

```
console.log(x);

let a = 10;

var b = 100;
```

When this above code is executed, that time javascript engine throws an error: ReferenceError: x is not defined.

Because we haven't defined and assigned a value to variable x, and we are trying to access variable x value.

```
console.log(a);

let a = 10;

var b = 100;
```

When above code is executed, that time javascript engine throws an error = ReferenceError: Cannot access 'a' before initialization.

Because we have declared variable "a" using let keyword.

We can't access variables that has been declared using let keyword, because they goes into temporal dead zone.

We can only access variables declared using let and const keyword, after we initialized them.

```
let a = 10;
let a = 100;
```

In above code, javascript engine throws an error = SyntaxError: Identifier 'a' has already been declared.

Whenever JavaScript engine sees that we are trying to redeclare a variable that has been declared using let and const keyword, that time it doesn't execute the script. It directly throws an SyntaxError without even running a single line of code.

```
const a;
a = 10;
```

The above code, will throw an error = SyntaxError: Missing initializer in const declaration.

This error is saying that you must have to initialize a variable that has been declared using const keyword in the same line, where you have declared them.

We can't assign value later to those variables that has been declared using const keyword.


```
const b = 1000;
b = 1234;
```

the above code will throw an error = TypeError: Assignment to constant variable.

Because we are trying to reassign a value to const variable, that is not allowed in JavaScript.

#### Use of const keyword

When you want to put a value in a variable, that doesn't change later in code, that time you can use "const" keyword to declare a variable.


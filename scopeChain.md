Scope in JavaScript is directly related to the lexical environment.

```javascript
function printValue() {
  console.log(b);
}

var b = 10;

printValue();
```

If you console.log(b) inside a function "printValue", what will it print?

When the javascript engine reaches the line "console.log(b)" and tries to execute it, then what will javascript do?

The Javascript engine tries to find out whether b exists in the local memory space of the function "printValue" or not.

Local memory space means that the JavaScript engine tries to find out b inside the local memory of the "printValue" function execution context.

In the "printValue" function's local memory space, the javascript engine tries to find out the value of the b variable, but it won't be there.

Because you never declared b inside the "printValue" function.

So, now what will happen?

Will it print undefined?
or will it print "not defined"?
or directly print the value of variable b?

It will directly print the value of variable b.

Because it can somehow access the value of variable b.

```javascript
function printValue() {
  displayValue();
  function displayValue() {
    console.log(b);
  }
}

var b = 10;

printValue();
```

In the above example, the JavaScript engine can also access the value of the b variable, and it prints the value 10 to the console.

Even inside the function, which is inside another function, which is inside global scope, the JavaScript engine can access b.

### Example 3

```javascript
function printValue() {
  var b = 10;
  displayValue();
  function displayValue() {
    console.log(b);
  }
}

printValue();
```

In above example, JavaScript engine can also access the value of b variable, and it prints the value 10 to the console.

### Example 4

```javascript
function printValue() {
  var b = 10;
  displayValue();
  function displayValue() {}
}

printValue();
console.log(b);
```

In example 4, JavaScript engine can't access the value of b variable, so it will print an error: UnCaught ReferenceError: e is not defined.

Because b is not present in the global scope.

It is present in the printValue function execution context.

Scope means where you can access a variable or function.

What is the scope of variable b?

The scope of variable b means where you can access it.

### Lexical environment

```javascript
function printValue() {
  var b = 10;
  displayValue();
  function displayValue() {}
}

printValue();
console.log(b);
```

When you run the above code, a global execution context is created, and it is put at the top of the call stack.



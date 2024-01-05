### undefined

undefined is a speacial keyword which is used as a placeholder while allocation memory for variables that has been declared using var keyword.

### Not defined

Not defined means that the variable has not been declared or allocated memory anywhere in the script.

And you are trying to access that variable, that's why JavaScript compiler throws an ReferenceError: that variable is not defined.

### Loosly typed programming language

JavaScript is loosely typed programming language.

It doesn't attach its variables to any specific kind of data type.

Suppose, you created a variable name and you put string into it.

and later in program, you can put a number or an object or an array or boolean to it.


```javascript
var a = 10;
console.log(a);
a = "hello world";
console.log(a);
```

In above example, i have declared a variable named "a" and assigned a number 10 to it, and later, i have assigned "hello world" string to it.

### Strict typed programming language

In strict typed programming language, you can't assign any other data type to a variable.

If you have created a variable name and assign a string to it, then later anywhere in the script, you can't assign any other data type to it.



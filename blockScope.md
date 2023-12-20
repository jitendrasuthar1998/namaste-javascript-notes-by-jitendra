#### What is a block in javascript?

Block is defined by {} braces.

#### Why we use these braces {}?

A Block is used to combine multiple javascript statements into one statement.
That's why Block is called as Compound Statement.

#### Why we group multiple statements in a block?

We group multiple statements in a block, so that we can use it where javascript expects only one statement.

Suppose you have a normal if statement

```
if(true)
```

If you run above code, that time you will get Uncaught SyntaxError: Unpected end of input.

Because this if expression expects one statement.

So, you can write above code like this:

```
if(true) true;
```

Suppose you want to write multiple statements execute when you if condition is true, you can only do this by grouping statements into one statement.

```
if(true){
    //Compound Statement

    var a = 10;
    console.log(a);
}
```

If you want to execute only one statement after if condition is true, that time you can write that one statement without curly braces like this:

```
let a = 10;
if(a > 5) console.log("A is greater than 5");
```

#### What is the block scope?

What all variables we can access inside a block is called the block scope.

#### Explain the output of below code.

```
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
```

The output of above code will be

```
10
20
30
10
```

Variables declared in a block using var keyword directly hoisted into the global space, that why you can access them inside a block or outside the block, after you have declared them.

Variables declared in a block using let and const keyword hoisted into a separate block space.
You can only access those variables inside that particular block where you have declared them.

That's why output comes like that of above code.

#### What is shadowing?

Shadowing means replacing one variable value to another variable value if they have same name and declared using var keyword.

```
var passingMarks = 33;

{
    var passingMarks = 44;
    console.log(passingMarks);
}

console.log(passingMarks);
```

In above code, we have declared "passingMarks" variable using var keyword in global scope.

And also we have declared "passingMarks" variable using var keyword inside block scope.

If we try to access the value of variable "passingMarks" inside block scope, that time we will get 40.

But if try to access the value of variable "passingMarks" outiside that block scope, that time also we will get 40.

Because the variable "passingMarks" value outside block scope is replaced by the variable "passingMarks" value declared inside block scope.
This is called Shadowing.

#### What is illegal shadowing?

Illegeal shadowing happes when you want to shadow a variable that you have declared using let inside global scope to the variable declared using var keyword inside a block.

```
let a = 10;
{
    var a = 20;
}
```

The above code will throw an error Uncaught SyntaxError: Identifier 'a' has already been declared.
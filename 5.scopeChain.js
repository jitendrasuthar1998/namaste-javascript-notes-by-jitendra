function b(){
    var d = 10;
    c()
    function c(){
        console.log(a);
        console.log(d);
    }
}

var a = 5;
b();
/*
Scope chain is a way of JavaScript compiler to search for a variable in a execution context.

If we try to access a variable in a function, and if we haven't defined that variable inside that function, that time JavaScript compiler searces for that variable in that function's parent function.

If the variable is present in a function's parent function, it will print the variable value.

If that variable doesn't exist inside that function's parent function, that time JavaScript compiler searces for that variable outside that function's parent function.

If the variable is present outside that function's parent function, it will print the variable value..

If that variable isn't present outside that function's parent function, that time JavaScript compiler shows error messages.


*/
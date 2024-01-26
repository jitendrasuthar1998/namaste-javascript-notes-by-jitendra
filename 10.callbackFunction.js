// What is a callback function in javascript?

// Functions are first class citizens in javascript. Means you can pass a function to other function as an argument. The function which is being passed as an argument called as callback function.

// Callback function is a very powerful thing in javascript. It gives us access to the whole async world in a synchronous single threaded language.

// JavaScript is single threaded synchronous language, means it can do one thing at a time in a specific order.

// But due to callback, we can do asynchronous things inside javascript.

function x(y){
    y();
}

x(function y(){
    console.log('this is from function y or callback function');
})

// We call callback function, callback function because that function will be called some time later in our code.

// We give the responsibility of calling the callback function to the function in which we are passing that function.
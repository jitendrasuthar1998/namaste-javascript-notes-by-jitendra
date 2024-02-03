// What is anonymous function?

// What are first class functions?

// What is the difference between function statement vs function expression vs function declaration?

// Function statement

add();
// multiply();

function add(a, b) {
  // a and b are parameters, that acts as a placeholder for the values that will be passed to this add function.
  return a * b;
}

// function expression

let multiply = function (a, b) {
  return a * b;
};

// 1, 2 are arguments that has been passed to the function add.
add(1, 2);

// First class function

// first class function is the ability of the function

// 1. function assigned to a variable

let substraction = function (a, b) {
  return a - b;
};

// 2. function passed to the other function as argument

function mathOperation(callback) {
    callback();
}

mathOperation(function(){
    console.log('hello from callback');
})
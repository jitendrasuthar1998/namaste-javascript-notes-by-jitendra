/* example 1

function printValue(){
    console.log(b);
}

var b = 10;

printValue();

*/

// example 2

// function printValue() {
//   function displayValue() {
//     console.log(b);
//   }
//   displayValue();
// }

// var b = 10;

// printValue();


function printValue() {
  var b = 10;
  function hello(){
    console.log('hello from closure');
  }
  function displayValue() {
    debugger;
    hello();
    console.log(b);
  }
  displayValue();
}



printValue();
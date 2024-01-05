/* example 1

function printValue(){
    console.log(b);
}

var b = 10;

printValue();

*/

// example 2

function printValue() {
  function displayValue() {
    console.log(b);
  }
  displayValue();
}

var b = 10;

printValue();

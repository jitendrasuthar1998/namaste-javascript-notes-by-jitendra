var x = 1;
a();
b();

console.log(x);
console.log(window.x);
console.log(this.x);
/**
 * This function just console the vale of x which is declared inside the function
 **/

function a() {
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}
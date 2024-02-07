// example 1
/* 
function x(){
    var a = 5;

    function y(){
        console.log(a);
    }
    return y;
}

let z = x();

console.log(z);
z();
*/

/* example 2

function x(){
    var a = 5;

    function y(){
        console.log(a);
    }
    a = 5;
    return y;
}

let z = x();

console.log(z);
z();

*/

/*Example 6 

function z(){
    var b = 900;

    function x(){
        var a = 7;

        function y(){
            console.log(a,b);
        }
        a = 100;
        y();
    }
    x();
}

z();

*/




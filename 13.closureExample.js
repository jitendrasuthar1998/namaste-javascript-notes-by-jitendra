/* 
Example 1

function outer(){
    var a = 10;

    function inner(){
        console.log(a);
    }

    return inner;
}

*/

/* 
Example 2

function outer(){


    function inner(){
        console.log(a);
    }
    var a = 10;
    return inner;
}

console.log(outer()());

*/

/*Example 3 

function outer(){
    function inner(){
        console.log(a);
    }
    let a = 10;
    return inner;
}

outer()();
*/

/*Example 4 

function outer(){
    function inner(){
        console.log(a);
    }
    let a = 10;
    return inner;
}

outer()();

*/

/*Example 5 

function outer(b){
    function inner(){
        console.log(a,b);
    }
    let a = 10;
    return inner;
}

outer("helloworld")();

*/

/*Example 6 

function outest(){
    var c = 20;

    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
        let a = 10;
        return inner;
    }
 return outer;    
}

var close = outest()("helloworld");
close();
*/

// let count = 0;

// function incrementCounter(){
//     count++;
// }

// encapsulate count so that it can't be increased or decreased by any other function

/*Example 7 

function counter() {
    let count = 0;

   return function incrementCounter() {
        count++;
        console.log(count);
    }
}

let counter1 = counter();
counter1();
counter1();
counter1();

let counter2 = counter();
*/


function Counter(){
    let count = 0;

    this.displayCountValue = function(){
        console.log(count);
    }

    this.incrementCounter = function(){
        count++;
        console.log(count);
    }

    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}

let counter1 = new Counter();
for(let i=1;i<=10;i++){
    counter1.incrementCounter();
}


/*

Disadvantage of closure

It consume more memory.
The variables are not properly collected by garbage collector or memory used by variable is not getting free even after variables are not being used.

Garbage collector frees memory which is used by variable when they are not being used anywhere in our program.
*/ 
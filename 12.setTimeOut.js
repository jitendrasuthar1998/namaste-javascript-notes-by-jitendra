// example 1

/* 

function x(){
    var a = 5;
    setTimeout(function(){
        console.log(a);
    }, 3000);
    console.log("Namaste Javascript")
}

x();

*/

// print number from 1 to 5 after 1-1 second.

/* 

function x(){
    for(var i = 1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }

    console.log("Namaste Javascript")
}
x();

*/

/* 

function x(){
    for(let i = 1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }

    console.log("Namaste Javascript")
}
x();

*/

function x(){
    for(var i = 1; i<=5; i++){
        function close(t){
            setTimeout(function(){
                console.log(t);
            }, t * 1000);
        }

        close(i)
    }

    console.log("Namaste Javascript")
}
x();

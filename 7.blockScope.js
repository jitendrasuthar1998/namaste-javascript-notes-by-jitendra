let number = 10;

// if expression expects only one statement
if(number > 5) console.log("number is greater than 5");


// if expression expects only one statement, that time i have grouped two statements into one using curly brackets.

// Everything inside curly brackets is called block.
// The space between curly brackets is called block.

if(number > 5){
    console.log("number is greater than 5");
    console.log("The value of number is ", number);
}

// Block scope
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);

// Shadowing

var passingMarks = 33;

{
    var passingMarks = 44;
    console.log(passingMarks);
}
console.log(passingMarks);
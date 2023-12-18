// accessing number before initialising it.
console.log(number); 

console.log(getName);

getName();

var number = 10;

console.log(getName1);

// getName1();

// getName2();

console.log(getName2);

function getName(){
    console.log("Jitendra Suthar");
}

var getName1 = () => {
    console.log("Jitendra Suthar from arrow function")
};

var getName2 = function(){
    console.log("Jitendra suthar function assigned to getName variable");
}



getName1();

getName2();
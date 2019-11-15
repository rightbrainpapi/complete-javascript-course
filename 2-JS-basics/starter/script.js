/////////////////////////////////
///////Variable & Data Types/////
/////////////////////////////////

// var firstName = "John";
// console.log(firstName)

// // strings are ant sequence of characters-- text
// var lastName = "Smith";

// // floating point numbers for decimals and integers
// var age = 28;

// // boolean are simply true or false
// var fullAge = true;
// console.log(fullAge)

// // undefined means no values has been give it yet
// var job; 
// console.log(job)

// job = 'teachers'
// console.log(job);

//////////////////////////////////
//Variable Mutation & Coercion////
//////////////////////////////////
var firstName = "John"
var age =28;


//Type Coercion
console.log(firstName + " "+ age)


var job, isMarried
job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried)


// Variable Mutation - Changing the value of a variable

age = "twenty eight";
job = "driver";

alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried)

var lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName)
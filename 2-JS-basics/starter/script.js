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
// var firstName = "John"
// var age =28;


// //Type Coercion - Process of converting one value type to another
// console.log(firstName + " "+ age)


// var job, isMarried
// job = "teacher";
// isMarried = false;

// console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried)


// // Variable Mutation - Changing the value of a variable
// age = "twenty eight";
// job = "driver";

// // Using Alert
// alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried)

// //Using Promt 
// var lastName = prompt("What is his last name?");
// console.log(firstName + " " + lastName)



//////////////////////////////////
////Basic Javascript Operators////
//////////////////////////////////

// var now, yearJohn, yearMark;
// var now = 2019
// var ageJohn = 29
// var ageMark = 33

// // Math Operators 
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn);
// console.log(yearMark);


// console.log(now + 2)
// console.log(now * 2)
// console.log(now / 10)

// // Logical Operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof Operator
// console.log(typeof johnOlder);
// console.log(typeof "Mark is older than John");
// console.log(typeof ageJohn);
// console.log(typeof x)


//////////////////////////////////////
///Javascript Operators Precedence////
//////////////////////////////////////

// var now = 2019;
// var yearJohn = 1990;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge)

// // Grouping 
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple Assignments
// var x, y;
// x = (3+ 5) * 4-6; // 8 * 4 -6 // 32 -6 // 26
// console.log(x);

// // Assignment Operators work from right to left
// // see resources page on javascript precedent
// var x, y;
// x = y = (3+ 5) * 4-6; // 8 * 4 -6 // 32 -6 // 26
// console.log(x, y);


// //////////////////////
// //////////////////////
// // More Operators ////
// //////////////////////
// //////////////////////

// // x = x * 2

// x *= 2;
// console.log(x)

// //////////////////////
// //Additional Operators
// //////////////////////
// x += 10;
// console.log(x);

// x += 1 // or we can also use x++
// console.log(x);

// x++; //Adds 1 unit to the variable that we are using 
// console.log(x);

// //////////////////////
// // Minus operators
// //////////////////////
// x -= 2;
// console.log(x);


// x -= 1 // or we can also use x++
// console.log(x);

// x--; //Subtracts 1 unit to the variable that we are using
// console.log(x);

////////////////////////////////////
////////////////////////////////////
/////// Coding Challenge #1 ////////
////////////////////////////////////
////////////////////////////////////


// var markHeight, markMass, johnHeight, johnMass

// markHeight = 1.90; //meters
// markMass = 69; //kg

// johnHeight = 1.98; // meters
// johnMass = 80; // Kg


// //var Bmi = mass / height * height = mass 

// var markBmi = markMass / (markHeight * markHeight) ;

// var johnBmi = johnMass / (johnHeight * johnHeight);


// console.log(johnBmi)

// // Asking whether Marks Bmi is higher

// var isMarkBmiHigher = markBmi > johnBmi
// console.log("Is Mark\'s BMI higher than John\'s? " + isMarkBmiHigher);


////////////////////////////////////
////////////////////////////////////
/////// Controll Structures/////////
////////////////////////////////////
////////////////////////////////////


// // if / else statements

// var firstName = "John";
// var civilStatus = "single";

// // if (civilStatus === "married"){
// //     console.log(firstName + " is married!")
// // }else{
// //     console.log(firstName + " will hopefully be married soon :)")
// // }


// var isMarried = true;
// if (isMarried){
//     console.log(firstName + " is married!")
// }else{
//     console.log(firstName + " will hopefully be married soon :)")
// }

// //////////////////////////////
// //////////////////////////////
// //Refactored coding challenge 
// //////////////////////////////
// //////////////////////////////

// var markHeight, markMass, johnHeight, johnMass

// markHeight = 1.90; //meters
// markMass = 60; //kg

// johnHeight = 1.98; // meters
// johnMass = 80; // Kg


// //var Bmi = mass / height * height = mass 

// var markBmi = markMass / (markHeight * markHeight) ;

// var johnBmi = johnMass / (johnHeight * johnHeight);

// if (markBmi > johnBmi){
//     console.log("Mark\'s BMI is heigher than John\'s BMI")
// }else{
//     console.log("John\'s BMI is heigher than Mark\'s BMI")
// }


// Boolean Logic


var firstName = "John";
var age = 16;

if (age < 13){
    console.log(firstName + " is a boy.");
} else if (age >= 13 && age <= 20){
    console.log(firstName + " is a teenager.")
}
else{
    console.log(firstName + " is a man.");
}



/////////////////////////////////
/////////////////////////////////
// Coding Challenge #2
/////////////////////////////////
/////////////////////////////////



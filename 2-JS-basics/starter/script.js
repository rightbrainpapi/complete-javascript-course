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

//////////////////
//////////////////
// Boolean Logic
/////////////////
///////////////////

// var firstName = "John";
// var age = 16;

// if (age < 13){
//     console.log(firstName + " is a boy.");
// } else if (age >= 13 && age <= 20){
//     console.log(firstName + " is a teenager.");
// }
// else if (age >= 20 && age <= 30){
//     console.log(firstName + " is a young man.");
// }
// else{
//     console.log(firstName + " is a man")
// }






////////////////////////////////////////////
////////////////////////////////////////////
// Teranary Operators and Switch Statements
////////////////////////////////////////////
////////////////////////////////////////////

// var firstName = "John";
// var age = 16;



////////////////////////////////////////////
// Teranary Operator 
// Called a terenary statement because there are threee
// parts that interact with the operator
// 1. condition separated by a ?  2. if block separated by : 3. then the else block ended with ;

// age >= 18 ? console.log(firstName + " drinks beer.")
// : console.log(firstName + " drinks juice.");


// var drink = age >= 18 ? "beer" : "juice";

// console.log(firstName + " drinks " + drink + ".")


//The if else statement is the same as writing the teranany statment above.
// if (age>=18){ 
//     var drink = "beer";
// }else{
//     var drink = "juice";
// }





////////////////////////////////////////////
// Switch Statements

// var job = "instructor";
// switch (job){
//     // If job is equal to teacher the program executes this piece of code
//     case "teacher":
//         //we can have multiple case clauses for the same piece of code 
//     case "instructor":
//         console.log(firstName + " teachers kids how to code.");
//         break;
//     // If the job is equal to driver the program executes this piece of code
//     case "driver":
//         console.log(firstName + " drives an uber in Lisbon.");
//         break;
//             // If the job is equal to driver the program executes this piece of code
//     case "designer":
//         console.log(firstName + " designs beautiful websites.");
//         break;
//     //////////////////
//     // If none of the cases apply default to the below 
//     default:
//         console.log(firstName + " does something else.");

// }



// // Refactored exercise from Boolean logic above

// age = 100

// switch(true){
//     case age < 13:
//         console.log(firstName + " is a boy.");
//         break;
//     case age >= 13 && age <= 20:
//         console.log(firstName + " is a teenager.");
//         break;
//     case age >= 20 && age <= 30:
//         console.log(firstName + " is a young man.");
//         break;
//     default: 
//         console.log(firstName + " is a man.");
// }



// falsy values: undefined, null, 0, " ", NaN, 
// truthy values: NOT falsy values

// If you define a variable as 0 it will render undefined
// var height = 23;

// height = 0;
// if (height || height === 0 ){
//     console.log('Variable is defined');
// }else{
//     console.log('Variable has not been defined');
// }


///////////////////////////
// Equality operator ==
// var height = 23;
// // The == takes "23" which is a string and converts it to a number then compares it with the variable height which is a number   
// if (height == "23"){
//     console.log("The == operator does type coercion!");
// }




/////////////////////////////////
/////////////////////////////////
// Coding Challenge #2
/////////////////////////////////
/////////////////////////////////

// Calculate the average schore of two teams and see which team has the highest score.
// Johns team: 89 120 103 
// Mikes team: 116 94 123

// calculating the average


// var johnsTeamAverage = (89 + 120 + 103) / 3;
// var mikesTeamAverage = (116 + 94 + 123) / 3;
// var marysTeamAverage = (97 + 134 + 105) / 3;


// switch(true){
//     case johnsTeamAverage > mikesTeamAverage && johnsTeamAverage > marysTeamAverage:
//         console.log("John\'s team has a higher winning average with " + johnsTeamAverage + " points");
//         break;
//     case johnsTeamAverage < mikesTeamAverage && mikesTeamAverage > marysTeamAverage:
//         console.log("Mike\'s team has a higher winning average with " + mikesTeamAverage + " points");
//         break;
//     case johnsTeamAverage < marysTeamAverage && marysTeamAverage > mikesTeamAverage:
//         console.log("Mary\'s team has a higher winning average with " + marysTeamAverage + " points");
//         break;
//     case johnsTeamAverage === mikesTeamAverage && johnsTeamAverage === marysTeamAverage:
//         console.log("Mary, Mike, and John\'s team have the same winning average with " + marysTeamAverage + " points");
//         break;
//     default:
//         console.log("We can not determine the average.");
// }


/////////////////////////////////
/////////////////////////////////
// Functions
/////////////////////////////////
/////////////////////////////////


// function calculateAge(birthYear){
// return 2019 - birthYear;
// }
// var ageMike = calculateAge(1980);
// var ageJane = calculateAge(1999);
// var ageJohn = calculateAge(1990);

// console.log(ageJohn, ageMike, ageJane );

// // Calculate the retirement date using the age info

// function yearsUntilRetirement(year, firstName){
// // var age = calculateAge(year);
//     var retirement = 75 - year

//     if (retirement > 0 ){
//         return firstName + " can retire in " + (75 - year) + " years.";
//     }
//     else{
//        return  firstName + " has retired " + Math.abs(retirement) + " years ago.";
//     }



   

// }

// var retireMike = yearsUntilRetirement(ageMike, "Mike")

// console.log("/////////")
// console.log( retireMike)



//////////////
//////////////
// Another way to solve the same problem
//////////////
//////////////
// function calculateAge(birthYear){
//     return 2019 - birthYear;
//     }
//     var ageMike = calculateAge(1980);
//     var ageJane = calculateAge(1999);
//     var ageJohn = calculateAge(1990);
    
//     console.log(ageJohn, ageMike, ageJane );
    
    
    
//     function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 75 - age
//     console.log(firstName + " retires in " + retirement + " years.")
    
//     }
    
//     var retireMike = yearsUntilRetirement(1980, "Mike")


/////////////////////////////////
/////////////////////////////////
// Functions Expressions
/////////////////////////////////
/////////////////////////////////


// Function Declaration --> Do not produce immediate results
// function whatDoYouDo(job, firstName){
//     // Some Script
// }

// // Function Expression --> Does produce an  immediate results
// var whatDoYouDo = function(job, firstName){
//     // Some Script

//     switch (job){
//         case "teacher":
//             return firstName + " teaches kids how to code."
//         case "driver":
//             return firstName + " drives uber in lisbon."

//         case "designer":
//             return firstName + " designes beautiful websites."
//         default:
//             return firstName + " does something else."
//     }
// }

// console.log(whatDoYouDo("teacher", "John"));// Function Expression --> Does produce an  immediate results
// console.log(whatDoYouDo("driver", "Jane"));
// console.log(whatDoYouDo("retired", "Mark"));
// console.log(whatDoYouDo("designer", "Mark"));

// // Initialize New Array
// var names = ["John", "Mark", "Jane"];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// // Mutate Arry Data
// names[names.length] = "Mary";
// console.log(names);

// // Different Data Types
// var john = ["John", "Smith", 1990, "teacher", false];

// // .push -->Add element to end
// john.push("blue");
// console.log(john)


// // .unshift -->Add element to beginning
// john.unshift("Mr.")
// console.log(john)


// // .pop --> remove element from the end
// john.pop()
// console.log(john)


// // .shift --> remove element from the end
// john.shift()
// console.log(john)

// // .indexOf --> returns the index of where the element exist
// //useful for testing whether an element is in the array
// console.log(john.indexOf(1990));

// // Using a teranary wit index of to determin if john is a designer
// var isDesigner = john.indexOf('designer') === -1 ? "John is Not a designer": "John is a Designer"

// console.log(isDesigner);


//////////////////////////////////////
//////////////////////////////////////
// Coding Challenge #3: Tip Calculator
//////////////////////////////////////
//////////////////////////////////////

// John has 3 restaurant bills 12, 48, and 268

// John likes to tip 
// 20% when the bill is less than 50
// 15% when the bill is equal to 50 but less than 200
// 10% when the bill is equal to 200 or more



////////////////////////////
// First Solution
////////////////////////////

var bill = [124, 48, 268]
var afterTip = []


// Function Declaration --> Do not produce immediate results
function tipCalculator(bill){

    if (bill < 50) {
       var tipAmount = (bill * 0.2);
       afterTip.push(bill + tipAmount)
        console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
    }
    
    else if (bill >= 50 && bill < 200 ){
        var tipAmount = (bill * 0.15);
        afterTip.push(bill + tipAmount)
        console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
    }
    else if (bill >= 200){
        var tipAmount = (bill * 0.1);
        afterTip.push(bill + tipAmount)
        console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
    }
    else{
        console.log("the budget is to large")
    }
    
}
tipCalculator(bill[0])
tipCalculator(bill[1])
tipCalculator(bill[2])



console.log("////////////");
console.log("Old TIP CALCULATOR")
console.log("////////////")
console.log(bill)
console.log(afterTip)


////////////////////////////
// Refactored Solution
////////////////////////////
var bill = [124, 48, 268]
var afterTip = []

function newTipCalculator(bill){
    var percentage;
    if(bill < 50){
        percentage = .2;
    } else if (bill >= 50 && bill <200){
        percentage = .15;
    } else if (bill >= 200){
        percentage = .1;
    }
    else{
        console.log("the budget is to large")
    }
    var tipAmount = (percentage * bill);
    afterTip.push(bill + tipAmount);
    console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);

}


console.log("////////////");
console.log("NEW TIP CALCULATOR")
console.log("////////////")

newTipCalculator(bill[0])
newTipCalculator(bill[1])
newTipCalculator(bill[2])

console.log(bill)
console.log(afterTip)

/////////////////////////////////
/////////////////////////////////
///////Variable & Data Types/////
/////////////////////////////////
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
//////////////////////////////////
//Variable Mutation & Coercion////
//////////////////////////////////
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
//////////////////////////////////
////Basic Javascript Operators////
//////////////////////////////////
/////////////////////////////////

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
//////////////////////////////////////
///Javascript Operators Precedence////
//////////////////////////////////////
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











/////////////////////////////////
/////////////////////////////////
// Boolean Logic
/////////////////////////////////
/////////////////////////////////

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


/////////////////////////////////
/////////////////////////////////
// Teranary Operator 
/////////////////////////////////
/////////////////////////////////
// Called a terenary statement because there are threee
// parts that interact with the operator
// 1. condition separated by a ?  2. if block separated by : 3. then the else block ended with ;
/////////////////////////////////
/////////////////////////////////

// var firstName = "John";
// var age = 16;

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





/////////////////////////////////
/////////////////////////////////
// Switch Statements
/////////////////////////////////
/////////////////////////////////

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



/////////////////////////////////
/////////////////////////////////
// Refactored Solution
/////////////////////////////////
/////////////////////////////////

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






///////////////////////////////
///////////////////////////////
////////JavaScript Arrays//////
///////////////////////////////
///////////////////////////////
// Order matters in an array
///////////////////////////////



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


// var bill = [124, 48, 268]
// var afterTip = []


// // Function Declaration --> Do not produce immediate results
// function tipCalculator(bill){

//     if (bill < 50) {
//        var tipAmount = (bill * 0.2);
//        afterTip.push(bill + tipAmount)
//         console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
//     }
    
//     else if (bill >= 50 && bill < 200 ){
//         var tipAmount = (bill * 0.15);
//         afterTip.push(bill + tipAmount)
//         console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
//     }
//     else if (bill >= 200){
//         var tipAmount = (bill * 0.1);
//         afterTip.push(bill + tipAmount)
//         console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
//     }
//     else{
//         console.log("the budget is to large")
//     }
    
// }
// tipCalculator(bill[0])
// tipCalculator(bill[1])
// tipCalculator(bill[2])



// console.log("////////////");
// console.log("Old TIP CALCULATOR")
// console.log("////////////")
// console.log(bill)
// console.log(afterTip)


// ////////////////////////////
// // Refactored Solution
// ////////////////////////////


// var bill = [124, 48, 268]
// var afterTip = []

// function newTipCalculator(bill){
//     var percentage;
//     if(bill < 50){
//         percentage = .2;
//     } else if (bill >= 50 && bill <200){
//         percentage = .15;
//     } else if (bill >= 200){
//         percentage = .1;
//     }
//     else{
//         console.log("the budget is to large")
//     }
//     var tipAmount = (percentage * bill);
//     afterTip.push(bill + tipAmount);
//     console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);

// }


// console.log("////////////");
// console.log("NEW TIP CALCULATOR")
// console.log("////////////")

// newTipCalculator(bill[0])
// newTipCalculator(bill[1])
// newTipCalculator(bill[2])

// console.log(bill)
// console.log(afterTip)






///////////////////////////////////////////
///////////////////////////////////////////
// Beginning: JavaScript Objects & Properties
////////////////////////////////////////////
///////////////////////////////////////////
// Order does not matter in an object
///////////////////////////////////////////




///////////////////////////////////////////////////
// Initializing the Object using the object literal
///////////////////////////////////////////////////
// Which is the curly braches
///////////////////////////////////////////////////
// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ["Jane", "Mark", "Bob", "Emily"],
//     job: "teacher",
//     isMarried: false

// };

// console.log(john);

// // Accessing a element from an object
// console.log(john.firstName);
// // Accessing an element from an object
// console.log(john["lastName"])

// // Yet another way
// var x = "birthYear"
// console.log(john[x])
// // When using this method notic that the 
// // variable x still contains the string birthYear
// console.log(x)


//////////////////////////////////
// Mutating the JavaScript Object
//////////////////////////////////
// Change new key value pairs
//////////////////////////////////

// john.job = "designer"
// john["isMarried"] = true;
// console.log(john)



//////////////////////////////////////
// Initiating in New JAvaScript Object
//////////////////////////////////////
// Initializing the object with the new Object Syntax
/////////////////////////////////////////
// which is the new keyword
///////////////////////////////////////////

// var jane = new Object();
// jane.firstName = "Jane";
// jane.birthYear = 1969;
// jane.lastName = "Smith";

// console.log(jane)


///////////////////////////////////////
///////////////////////////////////////
// End: JavaScript Objects & Properties
///////////////////////////////////////
///////////////////////////////////////








/////////////////////////////////////////////
/////////////////////////////////////////////
// Beginning: JavaScript Objects & Methods
/////////////////////////////////////////////
/////////////////////////////////////////////
// Object methods are functions that are 
// attached to an object
/////////////////////////////////////////////
// Objects have special this keywords that point to it's self
/////////////////////////////////////////////



// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1992,
//     family: ["Jane", "Mark", "Bob", "Emily"],
//     job: "teacher",
//     isMarried: false,
//     // Here is the Object method
//     calcAge: function(){
//         //This keyword refers to the object that we are currently in which is John.
//         // Below: creating a new key value pair
//         // setting it to the sum of 2018 - john.birthYear
//         this.age = 2018 - this.birthYear;
//     }
    
// };


// john.calcAge()

// console.log(john.calcAge());

// // Calculating the Age then creating 
// // then calculating a new Key Value pair 
// // to store in the john object
// var age = john.calcAge();
// john.age = age

// // Alternative way to do the same thing.
// // john.age = john.calcAge();

// console.log(john)



///////////////////////////////////////
///////////////////////////////////////
// End: JavaScript Objects & Methods
///////////////////////////////////////
///////////////////////////////////////








//////////////////////////////////////
//////////////////////////////////////
// Coding Challenge #4: 
//////////////////////////////////////
//////////////////////////////////////



// Create 2 Objects 1 for John 1 for mark
// In each object include the following keys: full name, mas, and height
// include a method that calculates the bmi then returns it.
// finally calculate who has the greater bmi


// var john = {
//     fullName: "John Smith",
//     mass: 92, //kg
//     height: 1.95,
//     calcBMI: function(){
//         this.Bmi =  this.mass / (this.height * this.height );
//         return this.Bmi
//     }
// }

// var mark = {
//     fullName: "Mark Greene",
//     mass: 78, //kg
//     height: 1.69,
//     calcBMI: function(){
//         this.Bmi =  this.mass / (this.height * this.height );
//         return this.Bmi
//     }
// }

// // Function Expression --> Does produce an  immediate results
// var whoseBmiIsHigher = function(){
//     // Some Script
//     if (mark.calcBMI() > john.calcBMI() && mark.calcBMI() != john.calcBMI()){
//         return(mark.fullName + "'s BMI is Higher than Mark\'s. " + mark.fullName  + "'s Bmi is " + Math.round(10 * mark.Bmi) / 10  )
//     } 
    
//     else if (mark.calcBMI() < john.calcBMI() && mark.calcBMI() != john.calcBMI()) {
//         return(john.fullName + "'s BMI is Higher than Mark\'s. " + john.fullName  + "'s Bmi is " + Math.round(10 * john.Bmi) / 10  )
//     }
//     else{
//         return("They have the same BMI.")
//     }
// }


// console.log(whoseBmiIsHigher())





/////////////////////////////////////////////
/////////////////////////////////////////////
// Beginning: JavaScript Loops & Iterations
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
// Allows you to automate repetative tasks
/////////////////////////////////////////////





/////////////////////////////////////////////
// If Loop setup 
/////////////////////////////////////////////
/////////////////////////////////////////////
// if (starting point; condition; iteration) { // some script}
////////////////////////////////////////////////////////////////

// initial starting poiint, 
// then the condition that is evaluated to see if the next loop should be run.
// for (var i = 0; i <= 10; i++ ){
//     console.log(i)
// }

// i = 0, 0 < 10 is true, log i to console, i ++
// i = 1, 1 < 10 is true, log i to console, i ++
// i = 2, 2 < 10 is true, log i to console, i ++
// ...
// i = 9, 9 < 10 is true, log i to console, i ++
// i = 10, 10 < 10 is FALSE, exit the loop!





// var john = ["John", "Smith", 1990, "designer", false];

// Iterating through an array to console.log each element
// for (var i = 0; i < john.length; i++ ){
//     console.log(john[i])
// }



/////////////////////////////////////////////
// While Loop setup 
/////////////////////////////////////////////
/////////////////////////////////////////////
// while (condition){ // some script}
/////////////////////////////////////////////

// var john = ["John", "Smith", 1990, "designer", false];

// var i = 0;
// while(i < john.length){
//     console.log(john[i])
//  i++
// }


////////////////////////////////////
// continue and the break statements
////////////////////////////////////


// // Continue statement
// var john = ["John", "Smith", 1990, "designer", false];

// //Iterating through an array to console.log each element
// for (var i = 0; i < john.length; i++ ){
//     if (typeof john[i] !== "string"){
//         console.log("We are in the if statement Block")
//         console.log(john[i] + " is not a \"String\" so we will continue (or skip) to the next iteration")
//         continue; // break exits the loop as soon as the condition of the instances are met
//         // no script can be run after this point.

//     } 
//     // console.log("We are outside of the if statement")
//     console.log(john[i]);
// }



// // Break statement
// var john = ["John", "Smith", 1990, "designer", false];
// for (var i = 0; i < john.length; i++ ){
//     if (typeof john[i] !== "string"){
//         console.log("We are in the if statement Block")
//         console.log(john[i] + " is not a \"String\" so we will break out of the FOR loop")
//         break; // break exits the loop as soon as the condition of the instances are met
     
//     } 
//     // console.log("We are outside of the if statement")
//     console.log(john[i]);
// }




// Looping backwards
// I've iterated through the array in revers
// var john = ["John", "Smith", 1990, "designer", false];

// for (var i = john.length - 1; i < john.length && i >= 0; i--){
// // console.log(i)
//   console.log( "index " + i + " is " +  john[i])

// }


// refactored solution of the same code from above
// var john = ["John", "Smith", 1990, "designer", false];

// for (var i = john.length - 1; i >= 0; i--){
// // console.log(i)
//   console.log( "index " + i + " is " +  john[i])

// }



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Coding Challenge #5: Tip Calculator using objects as loop
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// John has 5 restaurant [124, 48, 268, 180, 42]

// [] John likes to tip 
// [] 20% when the bill is less than 50
// [] 15% when the bill is equal to 50 but less than 200
// [] 10% when the bill is equal to 200 or more


// [x] create an object with the array of bills 
// [x] Add a method to iterates over the bill and calculate the tipAmount 
// [x] store that tipAmount in an array
// [x] then calculate the bills * tipAmount = afterTipAmount 
// [x] the calculator should return a new arrayc ontaining the tips
// [x] the calculator should also return an array containing  the afterTipAmount
// [x] the the same for marks family using different rules
// [] create a function that calcultes the average tip for earch family


// get the sum of a families bill
// divide that sum by the lenght of the array - 1
// check to see if it is higher than the other families


// for (var i = 0; i < x; i++){

// }







var johnRestaurants =  {
    bills: [],
    calcTip: function(){

        
        // created new Key value pairs
        this.allTips = [];
        this.afterTips = [];

        // iterate over each element in this.bills
        for (var i = 0; i < this.bills.length; i++){
            // console.log(this.bills[i])
                var bill = this.bills[i]

            if (bill < 50) {
                var tipAmount = (bill * 0.2);
                this.allTips.push(Math.round(10 * tipAmount) / 10)
                this.afterTips.push(bill + tipAmount)
                // console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
            }
            else if (bill >= 50 && bill < 200 ){
                var tipAmount = (bill * 0.15);
                this.allTips.push(Math.round(10 * tipAmount) / 10);
                this.afterTips.push(bill + tipAmount)
                // console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
            }
            else if (bill >= 200){
                var tipAmount = (bill * 0.1);
                this.allTips.push(Math.round(10 * tipAmount) / 10)
                this.afterTips.push(bill + tipAmount)
                // console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
            }
            else {
            //    console.log("the budget is to large")
            }
        }
        // console.log("Here are all of the tip amounts: " + this.allTips);
        // console.log("Here are all of the after tip amounts: " + this.afterTips);

        // console.log(this.allTips);
        console.log(this.afterTips);
    }

}

//


var markRestaurants =  {
    bills: [],
    calcTip: function(){

        
        // created new Key value pairs
        this.allTips = [];
        this.afterTips = [];

        // iterate over each element in this.bills
        for (var i = 0; i < this.bills.length; i++){
            // console.log(bill)
            var bill = this.bills[i]

            if (bill < 100) {
                var tipAmount = (bill * 0.20);
                this.allTips.push(Math.round(10 * tipAmount) / 10)
                this.afterTips.push(bill + tipAmount)
                // console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
            }
            else if (bill >= 100 && bill < 300 ){
                var tipAmount = (bill * 0.10);
                this.allTips.push(Math.round(10 * tipAmount) / 10);
                this.afterTips.push(bill + tipAmount)
                // console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
            }
            else if (bill >= 300){
                var tipAmount = (bill * 0.25);
                this.allTips.push(Math.round(10 * tipAmount) / 10)
                this.afterTips.push(bill + tipAmount)
                // console.log("The bill was $" + bill + " and the tip was $" + Math.round(10 * tipAmount) / 10);
            }
            else {
            //    console.log("the budget is to large")
            }
        }
        // console.log("Here are all of the tip amounts: " + this.allTips);
        // console.log("Here are all of the after tip amounts: " + this.afterTips);

        // console.log(this.allTips);
        console.log(this.afterTips);
    }

}


johnRestaurants.bills.push( 124, 48, 268, 180, 42)
johnRestaurants.calcTip()


markRestaurants.bills.push(77, 375, 110, 45)
markRestaurants.calcTip()



// This currently calulates the total price.
// To calculate & compare the tip amounts 
// Change .afterTips to .allTips

var marksBills = markRestaurants.afterTips // <--- -Here 
var johnsBills = johnRestaurants.afterTips // <--- -Here

var calAverage = function(marksBills, johnsBills){
    
    var markSum = 0;
    var johnSum = 0;

    // iterate through array 1
    // for each element add it to the element after it
    // take the sum and compare it with the sum of element 2

    for (var i = 0; i < marksBills.length ; i++) {
        markSum += marksBills[i];
    }

    for (var i = 0; i < johnsBills.length ; i++) {
        johnSum += johnsBills[i];
    }

    

    markAverage = Math.round(10 * (markSum / marksBills.length)) / 10
    johnAverage = Math.round(10 * (johnSum / johnsBills.length)) / 10

    console.log(markSum);
    console.log(johnSum);
    whichBillIsGreater = markAverage > johnAverage ? console.log("Mark\'s bill is $" + markAverage + ". Which is greater than John\'s. $" + johnAverage) : console.log("John\'s bill is $" + johnAverage + ". Which is greater than Mark\'s $" + mamarkAveragerkSum);
}


calAverage(marksBills, johnsBills)




// 
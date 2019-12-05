// Funtion Constructors


// var john = {
//     name: 'John',
//     yearOfBirth: 1998,
//     job: "teacher",
// };


// var Person = function (name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth);
// }


// // This is called extenciation
// // We are creating a new object
// var john = new Person('John', 1990, "teacher");



// var jane = new Person ("Jane", 1989, "designer");



// var mark = new Person ("Mark", 1991, "driver");

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

////////////////////////////
////////////////////////////
/////// Object.create //////
////////////////////////////
////////////////////////////

// var personProto = {
//     calculateAge: function(){
//         console.log(2016 - this.yearOfBirth);
//     }
// }
// // One way to create an instance of personProto
// var john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1990;
// john.jb = 'teacher';

// // Second way to create an instance of personProto
// var jane = Object.create(personProto, 
//     {
//         name: {value: "Jane"},
//         yearOfBirth: {value: 1969},
//         job: {value: 'designer'}

//     })


////////////////////////////
////////////////////////////
/// Primitives & Objects ///
////////////////////////////
////////////////////////////

// Primitives
// var a = 23;
// var b = a;
// a = 43;
// console.log(a);
// console.log(b);



// // Objects
// var obj1 = {
//     name: "john",
//     age: 26,
// };

// var obj2 = obj1

// obj1.age = 31;

// console.log(obj1.age)

// // Object 2 is pointing to the exact same object.
// console.log(obj2.age)


// Functions
// var age = 27;
// var obj = {
//     name: "Jonas",
//     city: "Lisbon",
// }

// function change (a, b){
//     a = 30;
//     b.city = "san Fran"
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);


// because A is a primative we wont be able to change it from inside of a function
// we are able to change the object. 
// Also, we are passing in the refrence of the object through the function not the object itself.


////////////////////////////
////////////////////////////
/// Primitives & Objects ///
////////////////////////////
////////////////////////////

// var years = [1990, 1998, 1989, 1988, 1983, 2015];


// // generic function that loops over an array
// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++)
//     {
//         // some script
//         // push whatever the fn function returns into a new array
//         arrRes.push(fn(arr[i]));

//     }
//     return arrRes
// }

// // This is a callback function
// function calculateAge(el){
//     return 2016 - el;
// }


// function isFullAge(el){
//     return el >= 18;
// }

// function maxHeartRate(el){
//     if (el >= 18 && el <= 81 ){

//     return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }

// }


// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate)

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

/////////////////////////////////////////////
/////////////// Main takeaway ///////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
//You can pass a function around just as you can passa a variable 
/////////////////////////////////////////////




/////////////////////////////////////////////
/////////////////////////////////////////////
/////////// First Class Funtions ////////////
/////////////////////////////////////////////
/////////////////////////////////////////////


// Create a funtion that creates different
// based on the various jobs.

// function interviewQuestion(job){
//     // if else statements
//         if (job === "designer"){
//             // this is an anonoumous function
//             return function(name){
//                 console.log(name + ", can you please explain what a UX designer is?")
//             }
//         }
//         else if(job === "teacher"){
//             // this is another anonoumous function
//             return function (name){
//                 console.log(name + ", what subject do you teach?")
//             }
//         }
//         else {
//             // this is another anonoumous function
//             return function (name){
//                 console.log("Hello" + name + ". What is your occupation.")
//             }
//         }
//     }

//     // Because I am passing in teacher the fuction above will always return the
//     // the function withn the else if statment
//     var teacherQuestion = interviewQuestion ("teacher");

//     // now that i have the function within the elseif statment
//     // I am going to pass in the name John to have the anonoumous function 
//     // ask the question.
//     teacherQuestion("John");


//     // Same as the steps above
//     var designerQuestion = interviewQuestion("designer")
//     designerQuestion("Joyce");

//     interviewQuestion("teacher")("Huemaen");


    //////////////////////////////////
    //////////////////////////////////
    ///////// Key Take Away///////////
    //////////////////////////////////
    // Anonomous function could be used 
    // within a larger function
    //////////////////////////////////


    // ///////////////////////////////////
    // // IFE lecture
    // // IFE are functions that hide the value within it.
    // ///////////////////////////////////


    // (function (){
    //     var score = Math.random() * 10;
    //     console.log(score >= 3);
    // })();

    // // console.log(score);

    // // We are creating a scope that is 
    // //safely hidden from the outside scope
    // (function (goodluck){
    //     var score = Math.random() * 10;
    //     console.log(score >= 5 - goodluck);
    // })(5);

    //////////////////////////////////
    //////////////////////////////////
    ///////// Key Take Away///////////
    //////////////////////////////////
    // Using an ife allows us to maintain
    // data privacy.
    //////////////////////////////////



    ////////////////////////////////////
    ////////////////////////////////////
    /////// Closure Lecture////
    ////////////////////////////////////

    // function retirement(retirementAge){
    //     var a = " years left until retirement.";
    //     // This is a anonoumous function
    //     // anonoumous function that returns the a function 
    //     // appropriate for the year of birth.
    //     return function(yearOfBirth){
    //         var age = 2016 - yearOfBirth;
    //         console.log((retirementAge - age) + a);
    //     }
    // }

    // var retirementUS = retirement (66);
    // retirementUS(1990);
    // // retirement(66)(1990);


    // var retirementGermany = retirement(65);
    // retirementGermany(1990);

    // var retirementIceland = retirement(67);
    // retirementIceland(1990);

    // var retirementGhana = retirement(55);
    // retirementGhana(1990);


    //////////////////////////////////
    //////////////////////////////////
    ///////// Key Take Away///////////
    //////////////////////////////////
    //////////////////////////////////
    // An inner function has always the access to 
    // the variables and the parameters of its outer 
    // function, even after the outer function has 
    // returned.
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////


    // function interviewQuestion(job){
    //     var t = ", can you please explain what a UX designer is?";
    //     var d = ", what subject do you teach?";

    //     // This is a anonoumous function
    //     // anonoumous function that returns one funtion 
    //     // appropriate for a given job. 
    //     return function(name){
    //         if (job === "designer"){
    //             console.log(name + t)
    //         } else if (job === "teacher"){
    //             console.log(name + d)
    //         }else{
    //             console.log("Hello" + name + ". What is your occupation.")
    //         }
    //     }
    // }

    // // This is a function. (Based on the function above the simply utilizes
    // // the teacher condition of the above anonomous function.)
    // var teacherQuestion = interviewQuestion("teacher");

    // // calling the newly created function
    // teacherQuestion("John");







    ////////////////////////////////////
    ////////////////////////////////////
    ///////  Bind, Call, & Apply    ////
    ////////////////////////////////////
    // Call: allows the programmer to borrow methods from another object
    // Bind


    // var john = {
    //     name: "John",
    //     age: 26,
    //     job: "teacher",
    //     presentation: function(style, timeOfDay){
    //         if (style === "formal"){
    //             console.log("Good " + timeOfDay + 
    //             " ladies and gentlemen! I am " + this.name + ". And, I\'m a "  + this.age + 
    //             " year old " +
    //             this.job + "." + " Have a nice " + timeOfDay + ".");
    //         }else if (style === "friendly"){
    //             console.log("Hey what\'s up?" + 
    //             " I\'m " + this.name + "." + " And, I\'m a "  + this.age + 
    //             " year old " +
    //             this.job + "." + " Have a nice " + timeOfDay + ".");
    //         }
    //     }
    // }

    // john.presentation("friendly", "morning");

    // var emily = {
    //     name: "Emily",
    //     age: 35,
    //     job: "teacher",
    // }

    // Using call to borrow the method from the john object
    // john.presentation.call(emily, "friendly", "afternoon")

    ////////////////////////////////////////
    //////////// Apply Method //////////////
    ////////////////////////////////////////
    // This will not work right now because the method is not expecting an array.
    // john.presentation.apply(Emily, ["freindly", "afternoon"])


    ////////////////////////////////////////
    //////////// Bind Method //////////////
    ///////////////////////////////////////
    // Bind is similar except it doesnt immediately call the function
    // Bind generates a copy of the function
    // Allowing us the ability to store it somewhere. 
    ///////////////////////////////////////

    // var johnFriendly = john.presentation.bind(john, "friendly")
    // johnFriendly("morning");
    // johnFriendly("afternoon");
    // johnFriendly("evening");


    // var emilyFriendly = john.presentation.bind(emily, "friendly")
    // emilyFriendly("morning");
    // emilyFriendly("afternoon");
    // emilyFriendly("evening");
/////////////////////////////////////////////////////////////////////

  


     var listOfQuestions = {
        q1: "What city do you live in?",
        q2: "Is javaScipt the coolest programming language",
        q3: "Are you a quitter",

     }


    function myQuestion(quest, arrayOfAnswers, Correct){

            return function(){
                // console log ask
                // console.logall of the wrong answers

                // if q1 is selected at random

                if (quest === "q1"){
                    console.log(listOfQuestions.q1);
                }
                else if (quest === "q2"){
                    console.log(listOfQuestions.q2);
                }
                else {
                    console.log(listOfQuestions.q3);
                }

                // also returning the array of answers
                for (var i = 0; i < arrayOfAnswers.length; i++)
                {
                    console.log( i + ": " + arrayOfAnswers[i])
                
                } 
                
                // Build an alert box that takes 
                var userInput = prompt("Please select the correct answer. (Simplye type the number in the input field")
                
                if (Correct == userInput){
                    console.log("You are correct.")
                }else{
                    console.log("You are incorrect.")
                }
        }

    }



    // var locationQuest = myQuestion("q1", ["NYC", "LA", "STX"], 0);
    // locationQuest();

    // var javaSciptQuest = myQuestion("q2", ["No", "Yes"], 1);
    // javaSciptQuest();

    var personalQuest = myQuestion("q3", ["No", "Yes"], 0);
    personalQuest();

    // I need to build a function that randomly 
    // selects and executes one of the questions.

    



///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// Lecture: Hoisting
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// Each executitopn context has an object that stores 
// lots of information even before the function is executed
///////////////////////////////////////


// Execution context in details
///////////////////////////////////////////
// There are 2 Phases: Creation & Execution
///////////////////////////////////////////

// Creation Phase
// Execution context:
//  - Variable Object
//  - Scope Chain
//  - "This" variable


// Execution Phase
//  - The code of the function that generated the current execution
//  - (the called function) is run line by line 







// due to hoisting
// we are able to call a function that is 
// defined later in the script.
// because in the creation phoas of the execuation context/the global 
// context the function calculateAge is stored
// in the variable object 


//////////////////////////////////////////
//// Hoisting with functions only work 
//// with function declarations.
//////////////////////////////////////////

// calculateAge(1965) 
// // example of function declaration
// function calculateAge(year){
//     console.log(2016-year)
// }

///////////////////////////////////////////
//////////////////////////////////////////




//////////////////////////////////////////
//// Hoisting will not work with a 
//// function expression.
//////////////////////////////////////////


// retirement(1990)  // < -- this needs to come after the function expression
// example of a function expression
////////////////////////////////////////

// var retirement = function(year){
//     console.log(65 - (2016 - year));
// }



///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////


///////////////////////////////////
// Hoisting: Variables
///////////////////////////////////


// In creation Phase
// Variables are scanned/detected and set to undefined
/////////////////////////////////////////////////////
// Therefore the first time the program goes oever it 
// it sees a var age and sets it to undefined then
// then the second time it goes over it
// it resets the var age to 23 


// console.log(age);
// var age = 23;
// console.log(age);



// function foo(){
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);




/////////////////////////////////////////////////////
//////////////Biggest Take Away//////////////////////
////////////////////////////////////////////////////
//// Because of hoisting you can call a function
//// before it is defined in your code.
/////////////////////////////////////////////////////










///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// Lecture: Scoping
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////



// Scoping answers the question "where can we access a certain variable"
// Each new function creates a scope: the space/environment, in which the
// the variable it defines are acessible
///////////////////////////////////////////
// The only way we have for writing a new scope is through writing a new 
// function
///////////////////////////////////////////
// Lexical scopping is what javaScript uses
// lexical scope has to do with the position
// lexical scoping is a function that is witin another function
// when this is the case the child function has access to the scope 
// of the outer function/parent function
///////////////////////////////////////////


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     // The second function could access the third function because the 
//     // third function is nested within the first scope
//     function second() { 
//         var c = 'Hey!';
//         third()
//     }
// }

// The third function does not have access to the second function 
// or its variables because the third function is in the global scpe
// while the second function is nested within the first scope
// function third() { 
//     var d = 'John';
//     console.log(a + b + c + d); // <--- can only access variables a and d.
// }









/////////////////////////////////////////////////////////////////////////////
//////////////Biggest Take Away//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Execution Stack: The order in which functions are called
// Scope Chain: Order in which functions are written lexically(are positioned)
/////////////////////////////////////////////////////////////////////////////










///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// Lecture: The this keyword
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// Where does the This Keyword point to?
//      - Regular function call: It points the the global object
//      - Method Call: It points to the object tht is calling the mothod
//        ***The this keyword is not assigned a value until a function it is defined is actually called



///////////////////////////////////////////////////
// This will console log the window object. 
// because the window object is the default object.
///////////////////////////////////////////////////
console.log(this)




///////////////////////////////////////////////////
// This will console log the window object. 
// because regular functions are attached to the
// window object. So the this keyword will point to
// the window object.
///////////////////////////////////////////////////
calculateAge(1985)
function calculateAge(year){
    console.log(2016 - year);
    console.log(this); // <-- refers to the window object
}


///////////////////////////////////////////////////
//////////////Object Exmple
///////////////////////////////////////////////////
// This will console log the John object. 
// because methods are attached to the objects the method  
// reside in. Therefore the this keyword will point to
// the John object.
///////////////////////////////////////////////////


var john = {
    name: "john",
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this)
        console.log(2016 - this.yearOfBirth);


        // function innerFunction(){
        //     console.log(this) // <-- this refers to the window object becuse it is a regular function 
        // }
        // innerFunction();
    }
}

john.calculateAge()


var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

////////////////////////////////////
// Method borrowing
////////////////////////////////////
mike.calculateAge = john.calculateAge
mike.calculateAge(); // <-- This proves that the this keyword is only assigned a value when the object called the method
// It is made apparent because when the object is mike it console.logs mike and when it is john it consol.logs john



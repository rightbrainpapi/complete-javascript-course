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

var years = [1990, 1998, 1989, 1988, 1983, 2015];


// generic function that loops over an array
function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++)
    {
        // some script
        arrRes.push(fn(arr[i]));

    }
    return arrRes
}

// This is a callback function
function calculateAge(el){
    return 2016 - el;
}


function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81 ){

    return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate)

console.log(ages);
console.log(fullAges);
console.log(rates);
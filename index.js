console.log("Hello Js");

/* Data type:
undefined, null = nothing , boolean = true of false, string, symbol, number, and object
*/

var a;
var b = 2;
console.log(a);
a = 7;
b = a;
console.log(a)

//Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//finding remainder
var remainder;
remainder = 11 % 3;
console.log(remainder);

//Compond Assigment with Augmented Addition
var a = 3;
var b = 17;
var c = 12;
a = a + 12;
b = 9 + b;
c = c +7;
a += 12;    //same result
b += 9;
c += 12;

//Compound Assignment with Augmentde Subtraction
var a = 3;
var b = 9;
var c = 3;
a = a - 6;
b = b - 15;
c = c - 1;
a -= 6;    //same result
b -= 15;
c -= 1;

/*
Compound Assignment with Augmentde Multiplication = *=
Compound Assignment with Augmentde Division = /=
*/

//Escaping Literal Quotes in Strings
var myStr = " I am a \"double quoted\" string inside \"double quotes\" ";
console.log(myStr);

//Quoting Strings with Single Quotes
var myStr = ' <a href="https://www.example.com" target="_blank">Link</a>';
console.log(myStr);

/*
Code    OUTPUT
\'      single quote
\""     double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
 */
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

//find length of String
var lastNameLength = 0;
var lastName = "lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

//Breacket Notation to find First Character in String
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

//Find Notation to Find last Character in String
var lastName ="Lovelace"
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

//Nested Array
var myArrray = [["Bulls",23], ["white Sox", 45]];
console.log(myArrray);

//Modify Array Data with Indexes
var myArrray = [18,64,99];
myArrray[1] = 45;
console.log(myArrray);

//Access Multi-Dimensional Arrays With Indexes
var myArrray = [[1,2,3],[4,5,6],[7,8,9], [[10,11,12],13,14]];
var myData = myArrray[2][1]; //[3][0][1] = 11
console.log(myData);

//push()
var myArrray = [["john", 23], ['cat', 2]];
myArrray.push(["dog", 3]);
console.log(myArrray);
var myData = myArrray[2][0];    //find dog
console.log(myData);

//pop()
var myArrray = [["john", 23], ["cat", 2],];
var removedFromMyArray = myArrray.pop();
console.log(removedFromMyArray);

//shift()
var myArrray = [["john", 23], ["dog", 3], ["cat", 33]];
var removedFromMyArray = myArrray.shift();
console.log(removedFromMyArray);

//Write Resuable code With Functions
function resuableFunction() {
    console.log("Hi World");
}
resuableFunction();

//Passing Values to Function with Arguments
function myFunctionWithArgs(a, b) {
    console.log(a - b);
}
myFunctionWithArgs(10, 5);

//Globle Scope and Functions
var myGlobal = 10;

function fun1() {
    oopsBlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsBlobal != "undefined") {
        output += "myGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//Global vs local socpe in function
var outerwear = "T-Shirt";
function myOutfit() {
    var outerwear = "sweater";

    return outerwear;
}
console.log(myOutfit());
console.log(outerwear);

//Understanding Underfined Value Returned from a Function
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

//Assigned with a Returned Value
var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(10);
console.log(processed);

//Stand in Line
function nextInline(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Use Conditional Logic with If Statements
function trueOrFalse(wasThatTure) {
    if (wasThatTure) {
        return "Yes, it's true";
    }
        return "No, it's false";
}
console.log(trueOrFalse(true));

//Comaprison with the equality Operator 
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

//Comparison with the Strict Equality Operator
function  testStrict(val) {
    if (val === 10) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));
/**
 3 == 3
 3 === '3'
 */

 //Comparisons with the Logical And Operator 
 function  testGreaterThan(val) {
    if (val === 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));
/**
>=      greater than or equal
<=      less than or equal
*/

//Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if (val <= 50 && val >=15) {
        return "yes";
    }
    return "No";
}
testLogicalAnd(10);
/**
&&      AND
||      OR
 */

//Else Statements
function  testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
console.log(testElse(6));

//Else If Statement
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 5";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

//If Else Statements
function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 5";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(3));

//Switch Statement
/**
function abc() {
    var answer = "";
    switch() {
        case 1:
            answer = "";
            break;
        case 2:
            answer = "";
            break;
        case 3:
            answer = "";
            break;
    }
    return answer;
}
 */

//Build JS Objects
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

//Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
 var hatValue = testObj.hat;
 var shirtValue = testObj.shirt;

 //Accessing Object Properties with Breacket Notation
 var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
 var hatValue = testObj["an entree"];
 var shirtValue = testObj['the drink'];

 //Add new Properties to Objects
 var myObjt = {
    "name": "Happy Coder",
    "legs": 2,
    "brother": 1,
    "friends": ["freeCodeCamp Campers"]
 };

 myObjt['sister'] = "Alice";
 console.log(myObjt);

 //Delete Properties to Object
 var myObjt = {
    "name": "Happy Coder",
    "legs": 2,
    "brother": 1,
    "friends": ["freeCodeCamp Campers"]
 };
 delete myObjt.brother;

//Generate Random Fractions
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());  //between 0 and 1, but it could not be o and 1

//Generate Random whole Numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20)
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

/**
parseInt()      //convert str to int
 */


//Ternary Operator
//  condition ? statement-if-true : statement-if-false;
function checkEqual(a, b) {
    return a === b ? true : false;
    return a === b;
}
checkEqual(1,2);

//Multiple Ternary Operator
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(-10));

//Different between var an let
var catName = "Q";      //test with let
var quote;              //test with let

var catName = "B"
function catTakl() {
    "use strick";

    catName = "O";
    quote = catName + " says Meow!";
}
catTakl();

//another var vs let
function checkSocpe() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block sope";
        console.log("Block scope i is: ", i);
    }
    console.log("function socpe is is: " + i);
    return i;
}
checkSocpe();

//Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

//Prevent Object Mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14,
    };
    Object.freeze(MATH_CONSTANTS);  //never changes
    try {
        MATH_CONSTANTS.PI = 99;  
    } catch(e) {
        console.log(e);
    }
    
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

//Use Arrow Function to Write Concise Anonymous Functions
var magic = function() {
    return new Date();
};
console.log(magic);
var magic = () => {
    return new Date();
};
console.log(magic);
var magic = () =>new Date();
console.log(magic);

//Rest Operator 
const sum1 = (function(){
    return function sum1(...args) {
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum1(1,2,3,4,));

//Use Destructuring Assignment with the Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => ({ name,age, gender });
console.log(createPerson("Alice", 22, "male"));

//Use class Syntax to Define a Constructor Function
function makeCalss() {
    class Vegatable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegatable;
};
const Vegatable = makeCalss();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//Understand the Differences Between import and require
import { capitalizeString } from "./string_function";
const cap = capitalizeString("hello!");
console.log(cap);

//Use * to Import Everthing from a File
import * as capitalixeString from "captalixe_strings";
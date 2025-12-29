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
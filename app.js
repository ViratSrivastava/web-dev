// is used for comments
/*
comments for paragraphs
*/
console.log("hello world");
// console.log is a function that logs a message to the console

// datatypes: undefiend, null, boolean, string, synmbol, number and object
// var is used to declare a variable

var number = 10; 
// declaring a variable
console.log(number);
// console.log(number) is used to log the value of the variable number to the console
var number = 19;
console.log(number);
// variables can be reassigned

let dob = 11/10/2002;
console.log(dob);
// let is used to declare a variable

const pi = 3.14;
console.log(pi);
// const is used to declare a variable that cannot be reassigned

var a;
    console.log(a);
    // a is undefined
    a = 5;
    console.log(a);
    // a is 5

var b = 2;
    console.log(b);
    // b is 2
    b = a;
    console.log(b);
    // b is 5

//initailizing using Assignment operator

var a = 9;
var b = 10;
var c = "This my variable assigment";

a = a + 2;
b = b + 4;
c = c + "and I'm using Assignment operator";
console.log(a);
console.log(b);
console.log(c); 

// Variables are case Sensitive
var Name = "Virat Srivastava";
var name = "Virat";

// Operators
var sum;
console.log(sum);

sum = name + Name;
console.log(sum);

//var sub = name - Name;
//console.log(subtract); these dont work;

sub = 10 - 10;
console.log(sub);
sum = 10 + 10;
console.log(sum);

var product = 8*89;
console.log(product);

var product = 8*name;
console.log(product); //NaN
// Operators: +, -, *, /, %, ++, --, +=, -=, *=, /=

var divide = 66/33;
console.log(divide);

//Increment Operator
sum++;
console.log(sum);
//Decrement Operator
sub--;
console.log(sub);

// Decimal are represented as Floats or Floating Point Number
var decimal = 0.59;
console.log(decimal);

var divDec = 0.5/1.0;
console.log(divDec);
// Division of Decimals

var mulDec = 0.5*1.2;
console.log(mulDec);
//Multiplication of Decimals

sum =  1 + 1.1;
console.log(sum);
//int + decimal

var remainder;
remainder = 11%2;
console.log(remainder)

// Compund assignment shortcut of assignments - Augmented operations
var a = 10;
a += 5; //same as a = a+5;
console.log(a); 
a -= 10; //same as a = a-10;
console.log(a);
a *=5; //same as a = a*5;
console.log(a);
a /=5;
console.log(a);

//Declaration of Strings
var Name = "virat srivastava";
var Uni = "VIT Bhopal";
console.log(Name +" "+ Uni);

//Use of Escape charatter in Strings
var str = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(str);
//var str = "I am a "double quoted" string inside "double quotes""; will produce an error
var str = 'I am a "double quoted" string inside \"double quotes\"';
console.log(str);
//Single qoute ' is an alternative against using \ recurrently.

var str = `I am a \"double quoted\" string inside \"double quotes\""'''`;
console.log(str);
// Use of ` at start and at end is a method to use both '' and "" in a string as character

//we can use Augemntation operations with Strings
var str = "Hello ";
str += "Virat";
console.log(str);

Name += Uni;
console.log(Name)

Namelen = Name.length;
console.log(Namelen);
//length of a string


//Bracket Notation is used to find a character in a string a specific position
var char = Name[0];
console.log(char);
char = Name[Namelen]; //undeifned --- index start from 0
console.log(char);
char = Name[Namelen-1]; //l
console.log(char);

// A Whole String can be modified but not a specific character index
Name[0] = "h";
console.log(Name);
Name = "Virat Srivastava";
console.log(Name);

 
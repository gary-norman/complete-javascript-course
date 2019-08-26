/**********************
* Variables and data types


var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var agr = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
*/

/*****************************
* Variable mutation and type coercion


var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried; 
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his  last name?');
console.log(firstName + ' ' + lastName);

*/

/*******************************
* Basic operators


var now, yearJohn, yearMark
now =  2019;
ageJohn = 28;
ageMark = 33;

console.log(yearJohn);
//Math operators
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*********************************
* Operator precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge); 

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26, y = 26, x = y (26)
console.log(x, y);

//More operators

x *= 2; // x = x * 2
console.log(x);
x += 10; // x = x + 10
console.log(x);
x++; // x += 1 ==> x = x + 1
console.log(x);

*/

/*************************
* Coding challenge 1
*/

var heightMark, massMark, heightJohn, massJohn, bmiMark, bmiJohn;
heightJohn = 1.85;
heightMark = 1.77;
massJohn = 80;
massMark = 92;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

var markHigherJohn = bmiMark > bmiJohn;

console.log('Is mark\'s BMI higher than John\'s?' + ' ' + markHigherJohn);
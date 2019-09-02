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


var heightMark, massMark, heightJohn, massJohn, bmiMark, bmiJohn;
heightJohn = 1.85;
heightMark = 1.77;
massJohn = 80;
massMark = 92;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

var markHigherJohn = bmiMark > bmiJohn;

console.log('Is mark\'s BMI higher than John\'s?' + ' ' + markHigherJohn);
/*

/*************************** 
 * If / else staements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

var heightMark, massMark, heightJohn, massJohn, bmiMark, bmiJohn;
heightJohn = 1.85;
heightMark = 1.77;
massJohn = 80;
massMark = 92;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/************************************
 * Boolean logic
*/
/*

 var firstName = 'John';
 var age = 20;

 if (age < 13) { 
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) { // betqween 13 and 20
    console.log(firstName + ' is a teenager.')
 } else if (age >= 20 && age < 30){
     console.log(firstName + ' is a young man.')
 } else {
     console.log(firstName + ' is a man.');
 }
  */

  /********************************
   * The ternary operator and Switch statements
   */

   /*
   var firstName = 'John';
   var age = 16;

   //ternary operator
   age >= 18 ? console.log(firstName + ' drinks beer.')
   : console.log(firstName + ' drinks juice.')

   var drink = age >= 18 ? 'beer' : 'juice';
   console.log(drink);

   //if (age >= 18) {
   //    var drink = 'beer';
   //} else {
   //    var drink = 'juice';
   //}

//switch statement
var job = 'instructor';
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids.');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber.');
        break;
    case 'driver':
        console.log(firstName + ' designs websites.');
        break;
    default:
        console.log(firstName + ' does something else.')
}



  var firstName = 'John';
  var age = 10;
  
  switch (true){
      case age < 13:
        console.log(firstName + ' is a boy.');
        break;
        case age >= 13 && age < 20:
            console.log(firstName + ' is a teenager.');
            break;
        case age >= 20 && age < 30:
            console.log(firstName + ' is a young man.');
            break;
        default:
            console.log(firstName + ' is a man.');
  }
  */
 
  /**************************
   * Truth and Falsy values and equity operators
   
// Falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy

var height;
height = 23;

if (height || height === 0) { // because otherwise 0 would be falsy, returning not defined
    console.log('variable is defined');
}   else {
    console.log('variable has NOT been defined');
}
//EQUALITY OPERATOR
if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

/***************************************
 * CODING CHALLENGE 2
 

 var john1, john2, john3, johnAverage, mike1, mike2, mike3, mikeAverage, mary1, mary2, mary3, maryAverage;
 john1 = 90;
 john2 = 120;
 john3 = 132;
johnAverage = (john1 + john2 + john3)/3;
 mike1 = 90;
 mike2 = 120;
 mike3 = 131;
mikeAverage = (mike1 + mike2 + mike3)/3;
mary1 = 90;
mary2 = 120;
mary3 = 130;
maryAverage = (mary1 + mary2 + mary3)/3;
console.log(johnAverage, maryAverage, mikeAverage)
/*
if (johnAverage > mikeAverage) {
    console.log('John\'s team is the winner with an average score of ' + johnAverage);
} else if (johnAverage < mikeAverage) {
    console.log('Mike\'s team is the winner with an average score of ' + mikeAverage);
} else {
    console.log('Both teams are tied at ' + mikeAverage);
}


if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log('John\'s team is the winner with an average score of ' + johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log('Mike\'s team is the winner with an average score of ' + mikeAverage);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log('Mary\'s team is the winner with an average score of ' + maryAverage);
} else if (maryAverage > johnAverage && maryAverage === mikeAverage) {
    console.log('Mary and Mike\'s teams are tied on ' + maryAverage);
} else if (mikeAverage > maryAverage && johnAverage === mikeAverage) {
    console.log('John and Mike\'s teams are tied on ' + johnAverage);
} else if (maryAverage > mikeAverage && johnAverage === maryAverage) {
    console.log('John and Mary\'s teams are tied on ' + johnAverage);
} else {
    console.log('All teams are tied at ' + mikeAverage);
}
*/

/****************************************
 * Functions
 

 function calculateAge(birthYear) {
     return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageJane, ageMike);

 function yearsUntilRetirement(year, firstName) {
     var age = calculateAge(year);
     var retirement = 65 - age;
     if(retirement > 0) {
     console.log(firstName + ' retires in ' + retirement + ' years.');
     } else {
         console.log(firstName + ' has already retired.')
     }
    }

    yearsUntilRetirement(1990, 'John');
    yearsUntilRetirement(1948, 'Mike');
    yearsUntilRetirement(1969, 'Jane');

    */

    
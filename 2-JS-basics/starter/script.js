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

    /******************************
     * Function Statements and Expressions
     
//function declaration
//function whatDoYouDo(job, firstName) {}
     //function expression
  var whatDoYouDo = function(job, firstName) {
        switch(job) {
            case 'teacher': return firstName + ' teaches kids how to code.'; 
            //return means we don't require a break.    
            case 'driver': return firstName + ' drives an Uber.';
            
            case 'designer': return firstName + ' designs beautiful websites.';

            default: return firstName + ' does something else.';
        }
  }

  console.log(whatDoYouDo('teacher', 'John'));
  console.log(whatDoYouDo('designer', 'Mary'));
  console.log(whatDoYouDo('driver', 'Mike'));
  */

  /***************************
   * Arrays
   

// Initialize new array
   var names = ['John', 'Mark', 'Jane']; //usually used
   var years = new Array(1990, 1969, 1948); //hardly used

console.log(names[2]);
console.log(names.length);

// Mutate array data.
names[1] = 'Ben';
names[names.length] = 'Mary'; //adds to the end of the array due to zero numbering
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990,'designer', false];

john.push('blue'); // adds to the end
john.unshift('Mr'); // adds to the start

console.log(john);

john.pop();
john.pop(); // removes from the end
john.shift(); // removes from the start
console.log(john);

console.log(john.indexOf(1990)); // returns the position of element (1990)

john[3] = 'teacher';
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/************************
 * Coding challenge 3
 


 var tipCalculator = function(bill) {
     var percentage;
     if (bill < 50) {
         percentage = .2;
     } else if (bill >= 50 && bill <= 200) {
         percentage = .15;
     } else {
         percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var billTips = [bills[0] + tips[0],
            bills[1] + tips[1],
            bills[2] + tips[2]];
console.log(tips, billTips);
 */

 /*****************************
  * Objects and properties
  

// create Object Literal
  var john = {
      firstName: 'John',
      lastName: 'Smith',
      birthYear: 1990,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false
  };

  // retrieve data
  console.log(john.firstName);
  console.log(john['lastName']);
  var x = 'birthYear';
  console.log(john[x]);

  // mutate data
  john.job = 'designer';
  john['isMarried'] = true;
  console.log(john);
    // new Object syntax
  var jane = new Object();
  jane.name = 'Jane';
  jane.birthYear = 1969;
  jane['lastName'] = 'Smith';

  console.log(jane);
*/

/*************************
 * Objects and Methods
 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    //this
    // calcAge: function(birthYear) { 
    //    return 2019 - john.birthYear;
    // can be replaced using this.keyword

    calcAge: function() {
        // we can even put it into the object
       // return 2019 - this.birthYear;
       // like this
       this.age = 2018 - this.birthYear;
    }
};

//calcAge MUST be called first
john.calcAge();
console.log(john);
*/

/*****************************
 * Coding challenge 4
 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 90,
    height: 1.9,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi; //we must return this so we can use the values in the console.log below
    }
}

var mike = {
    firstName: 'Mike',
    lastName: 'Jones',
    mass: 120,
    height: 1.85,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
// this can also be combined
// john.calcBmi();
// mike.calcBmi();

//if (john.bmi > mike.bmi) {
// thus
if (john.calcBmi() > mike.calcBmi()) {
    console.log(john.firstName + ' ' + john.lastName + '\'s BMI is ' + john.bmi + '.');
} else if (mike.calcBmi() > john.calcBmi()) {
    console.log(mike.firstName + ' ' + mike.lastName + '\'s BMI is ' + mike.bmi + '.');
} else {
    console.log(john.firstName + ' ' + john.lastName + '\'s BMI is equal to ' + mike.firstName + ' ' + mike.lastName + '\'s BMI at ' + john.bmi + '.');
}
*/

/***************************
 * Loops and iteration
 */
/*
 // for loop
 console.log('*** for loop ***');
// for (var i = 0; i < 10; i++) {
//    console.log(i);
// } 

var john = ['John', 'Smith', 1990,'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// while loop
console.log('*** while loop ***');
var i= 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements

var john = ['John', 'Smith', 1990,'designer', false];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}


//looping backwards
console.log('challenge');

for (var i = john.length-1; i >= //john.length-john.length
    0; i--) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

*/

/***********************
 * Coding challenge 5



 var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for ( var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200)   {
                percentage = .15;
            } else {
                percentage = .1;
            } 

            // Add resuilt to arrays

            this.tips[i] = bill*percentage;
            this.finalValues[i] = bill + bill * percentage;
        }

    }
}

var mark = {
    fullName: 'Mark Twain',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for ( var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300)   {
                percentage = .1;
            } else {
                percentage = .25;
            } 

            // Add resuilt to arrays

            this.tips[i] = bill*percentage;
            this.finalValues[i] = bill + bill * percentage;
        }

    }
}

john.calcTips();
mark.calcTips();
console.log(john, mark);

//----------------------------------
// my solution
//
function averageTipsJohn() {
    var totalTipsJohn = 0;
    for (var x = 0; x < john.tips.length; x++) {
     totalTipsJohn = totalTipsJohn + john.tips[x];
    }
    totalTipsJohn = (totalTipsJohn/john.tips.length);
       return totalTipsJohn;
}

function averageTipsMark() {
    var totalTipsMark = 0;
    for (var y = 0; y < mark.tips.length; y++) {
     totalTipsMark = totalTipsMark + mark.tips[y];
    }
    totalTipsMark = (totalTipsMark/mark.tips.length);
       return totalTipsMark;
}
if (averageTipsJohn() > averageTipsMark()) {
    console.log(john.fullName + '\'s family tipped more than ' + mark.fullName + '\'s')
} else if (averageTipsMark() > averageTipsJohn()) {
    console.log(mark.fullName + '\'s family tipped more than ' + john.fullName + '\'s')
} else {
    console.log('Both families tipped the same.')
}

//-----------------------------------
//udemy solution
//
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// do the calculations
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family tipped more than ' + mark.fullName + '\'s, with an average of $' + john.average + '.');
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family tipped more than ' + john.fullName + '\'s, with an average of $' + mark.average + '.');
} else {
    console.log('Both families tipped the same, with an average of $' + john.average + '.');
}
 */

/******************************
 * END OF SECTION 2
 */

 
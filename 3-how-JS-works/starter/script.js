///////////////////////////////////////
// Lecture: Hoisting

/*
calculateAge(1965); // works as its a function declaration

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1990); does not work as it's a function expression

var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age); // undefined as variables are declared undefined until called
var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age); // foo variable of age
}
foo();
console.log(age); // global variable of age
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()             //can access function 3 because it's in the scope
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d); //cannot access first() and second() variables
}

*/


///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);   // this still references the window object
}
*/
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // this references the john object
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
};

//john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
    calculateAge: john.calculateAge

};

// method borrowing
//mike.calculateAge = john.calculateAge;
//mike.calculateAge();
console.log(`${mike.name} is ${mike.calculateAge()}`);





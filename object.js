// Array holds a list of information:
// There may be many data items (strings, numbers, booleans, objects)
// Each stored in  a different element of the array

// An Object contains the related PROPERTIES of a single data element:
// One data element but has attributes

// CAR EXAMPLE:

// ARRAY would hold:
// [year of the car(int), the make of the  car(str), the model of the car(str), identifying number(int)]

// OBJECT allow us to define all of those properties all in the same container
//Method is a function that belongs to or rather is defined inside of an object
/*
//Object Literal Syntax
let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() 
    {
        return 5000;
    },
    printDescription: function()
    {
        console.log(this.make + ' ' + this.model);
    }
};


car.printDescription();
console.log(car.year);
*/

// Don't do:
// console.log(car['year']);
// console.log(car[1]);

/*
var anotherCar = {};                // Creates an empty object
anotherCar.whatever = 'bob';        // Creates an property called whatever and defines it's value
console.log(anotherCar.whatever);   // It does work


var a = {
    myProperty: { b: 'hi' }
};
console.log(a.myProperty.b);
*/
/*
// Object graph
var c = {
    myProperty: [
        { d: 'this' },
        { e: 'can' },
        { f: 'get' },
        { h: 'crazy' }
    ]
};
console.log(c.myProperty[0].d);
*/

let carLot = [
    { year: 2017, make: 'Toyota', model: '4Runner' },
    { year: 2015, make: 'BMW', model: '528i' },
    { year: 1982, make: 'Buick', model: 'Skylark' }
];
console.log(carLot[0].year);


let contacts = {
    customers: [
        { firstName: 'Bob', lastName: 'Tabor', phoneNumbers: ['(123) 456-7890', '(123) 567-8901' ] },
        { firstName: 'Richard', lastName: 'Boughton', phoneNumbers: ['(123) 555-7894', '(123) 555-8903' ] },
    ],
    employees: [
        { firstName: 'Steve', lastName: 'Jaworski', phoneNumbers: ['(321) 490-5440', '(123) 567-8901' ] },
        { firstName: 'Conrad', lastName: 'Smith', phoneNumbers: ['(123) 430-7430' ] },
        { firstName: 'Grant', lastName: 'Boughton', phoneNumbers: ['(321) 656-5420', '(123) 567-8901' ] },
    ]
};

// contacts object
// 2 properties: called customers and employess
// each with an array of objects
// which has properties: firstName, lastName, phoneNumbers
// phonesNumbers as an array of phone numbers
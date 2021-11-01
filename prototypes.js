// JS does have classes but it's puporse is mostly to 
// help developers to make the leap from any other languages. 
// In JS objects are the focus. C#, C++ and in java
// classes are te focus

// In OOP languages you create a class hierarchy, where one 
// class inherits from another class. So when creating a
// child class theres nothing linking the (main) class to the
// child class.

// Using prototype you can create a new object that will
// inherite the properties of another (main) object.
// By doing so, the new object will always be linked to
// the (main) object. In other word, the (main) object
// acts as a prototype for the new object and the new
// object is essentially chained to the (main) object.

// Kylie Simpson (JS authors) calls this "style" of object-based 
// prototypal inheritance oloo (object linking to other objects)

// Prototype chain:

let originalCar = {
    make: "bmw",
    model: "745li",
    year: 2010
};

let newCar = Object.create(originalCar);

/* console.log(newCar.make);
newCar.make = 'audi';
console.log(newCar.make); */

// newCar doesn't have a 'whatever' property so we 
// look back to originalCar(Prototype) which doesn't 
// have it either. The originalCar prototype is 'object',
// and it does not have a 'whatever' property too. And it's
// (object) prototype is undefined so undefined is returned.
console.log(newCar.whatever);


/* console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors')); */


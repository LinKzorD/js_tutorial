/* let car = {
    make: "bmw",
    model: "745li",
    year: 2010
}; */

// In JS the 'new' keyword in front of any function, 
// is what makes it a constructor call (not the function itself)

// So it creates a new empty object and it will pass it
// as the 'this' to that function call we made

/* function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('bmw', '745li', 2010);

console.log(myCar); */

// The uppercase first letter convention signifies that
// our intent is that this function should be called 
// using the 'new' keyword

function MyFunction() {
    console.log('I am a simple function');
}

let myFunction = new MyFunction();

console.log(typeof myFunction);

// Can't really do anything with this particular object
// ... it's certainly NOT a function reference anymore
// myFunction();            // can't do that

// the only thing we can do with what's return from
// is we can attach properties and methods to the empty object
// which s the point of the 'new' keyword


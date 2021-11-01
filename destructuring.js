// Destructuring is a new technique in PS
// for unpacking values from arrays into individual variables
// or other array elements of a different array
// can also be used to unpack properties from objects

let a, b, c, d, e;

let names = ['david' , 'eddie', 'alex', 'michael', 'sammy'];

/* [a, b, c, e, d] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); */

/* let other;

[a, b, ...others] = names;

console.log(a);
console.log(b);
console.log(others); */

let year, model;

({year, model} = {
    make: "bmw",
    model: "745li",
    year: 2010,
    value: 5000
});

console.log(year);
console.log(model);
/* let hi = () =>  { console.log('howdy') };
hi(); */

/* let hi = (name) => { console.log(`howdy ${name}`) };
hi('bob'); */

/* let add = (a, b) => { return a + b };
console.log(add(2, 1)); */

/* let names = ['david', 'eddie', 'alex', 'michael'];
names.map( (name) => { console.log(`howdy ${name}`) }  ); */

// map is a method defined on the array built-in native object
// it allows you to iterate through each element of an array

/* let names = ['david', 'eddie', 'alex', 'michael'];
let i = 0;
names.map( (name) => { i++; console.log(`howdy ${name} ${i}`); }  ); */

let names = ['david', 'eddie', 'alex', 'michael'];
var transformed = names.map( (name) => { return `howdy ${name}!`});
console.log(transformed);


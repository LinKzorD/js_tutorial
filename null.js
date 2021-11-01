// null represents a variable that points to nothing
// but an object reference was expected

/* let a;
console.log(a);
console.log(typeof a); */

let pattern = /xyz/;
let value = 'This is just a test.';
let result = value.match(pattern);
console.log(result);
// console.log(typeof result);

if (result === null) {
    console.log('no match was found');
}

// Primitive data type null is not zero, undefined
// and not an empty string.
// It means that you have a variable where an
// object reference was expected but it's not
// set to any object reference.


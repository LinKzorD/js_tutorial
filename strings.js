let first = 'Knowledge is power but enthusiasm pulls the switch';
let second = 'Do or do not. There is no try.';
let third = '4,8,15,16,23,42';

// You can call methods on string literals
// console.log('bob loves you'.toUpperCase());

// .split is used to create an array of values
// and received tyhe (',') which signifies like
// take that element between the ',' and add it to
// an element of a new array

/* let mySplit = third.split(',');
console.log(mySplit); */

// .slice receieves the staring index and ending index
// and pulls out that one piece of the string.

/* let mySlice = first.slice(13, 18);
console.log(mySlice); */

// .substr receieves the staring index and the number
// of positons(length / 5 index) that we will pull out
// from that one piece of the string.

/* let mySubstr = first.substr(13, 5);
console.log(mySubstr); */

// .endsWith Returns true or false if a string ends with ''.
// .startsWith Returns true or false if a string starts with ''.
// .includes Returns true or false if a string starts includes ''.

/* let myEndsWith = second.endsWith('try.');
console.log(myEndsWith);

let myStartsWith = second.startsWith('Do');
console.log(myStartsWith);

let myInclude = second.includes('There');
console.log(myInclude); */

// .repeat will repeat n times the string.

/* let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat); */

// .trim cleans up a string
// In this case will clean up the spaces.
let myTrim = '     bloated      ';
console.log(myTrim.length);
console.log(myTrim.trim().length);


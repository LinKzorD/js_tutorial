// numbers, string and boolean are known as "primitive types"
// These primitive types that have corresponding "built-ins" or
// "natives" that are functions that return objects with a bunch
// of methods that are added to them by JS

// Under the hood JS compiler will coerce your primitive string (in this case)
// into an obejct that's returned from a native string function with all
// kinds of string type functionality included

/* let myString = new String('howdy');
// console.log(myString);
console.log(myString.toString());

console.log(typeof myString); */

/*
// List of built-ins natives:
String()
Number()
Boolean()
Object()
Function()
Symbol()
*/

/*
// Built-ins natives that do not have primitive versions:
Array()
RegExp()
*/

/*
Date()
Error()
*/

/* let myPrimitive = 'THIS IS CRAZY';
console.log(typeof myPrimitive);
myPrimitive = myPrimitive.toLocaleLowerCase();
console.log(typeof myPrimitive);
console.log(myPrimitive); */

let myNumber = new Number(7);
console.log(typeof myNumber);
let myPrimitive = myNumber.valueOf();
console.log(typeof myPrimitive);

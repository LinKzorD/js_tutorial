// In JS if you try to add a string to a numeric, JS "coerce"/"concince" the numeric value to become a string
// So in this case, where a = 7 and b = '6', it presents the result 76 as string 

let a = 7;
let b = '6';
b = parseInt(b, 10);
let c = a + b;
console.log('Answer: ' + c);

let d = parseInt('bob', 10);    //NaN - Not a Number
let e = isNaN(d);               //Evaluating if d is NaN - returns true if NaN
console.log(d);
console.log(e);

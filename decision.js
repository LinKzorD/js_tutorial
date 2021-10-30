/*
var count = 3;

if(count == 4)
{
    console.log('Count is 4');
}
else if(count > 4)
{
    console.log('Count is greater than 4');
}
else
{
    console.log('Count is less than 4');
}

let hero = 'Batman';
switch (hero.toLowerCase())
{
    case 'superman':
        console.log('super strength');
        console.log('x-ray vision');
        break;
    case 'batman':
        console.log('intelligence');
        console.log('fighting skills');
        break;
    default:
        console.log('member of JLA');
}
*/

// Ternary operator
// let result = (a == b) ? 'equal' : ' inequal'; 
// Does a = b (a == b)
// ? --- if true
// return 'equal'
// : --- if not true
// return 'inequal'

// == comparing by coercing 1 to become string
// === does not coerce, respects the data type

let a = 1, b = '1';
// let result = (a === b) ? 'equal' : 'inequal'; 
let result = (a !== b) ? 'not equal' : 'equal'; 
console.log(result); 
     
// console.log((a == b) ? 'equal' : 'inequal');
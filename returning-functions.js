// This is wrong: DONT DO IT!
/*
var myVariable = 'I am at the global scope';

var myFunction = function()
{
    console.log('me too!');
}
*/

function one()
{
    return 'one';
}

// let value = one();
// console.log(value);
// console.log(one());

// let value = one;
// console.log(typeof value);      // To return the datatype
// console.log(typeof one);
// console.log(value());


// string
// number
// boolean
// undefined
// function

/*
function two()
{
    //return function() { console.log('two'); }   -   Function Expression
    return function()
    {
        console.log('two');
    }
}

let myFunction = two();
myFunction();
*/

function three()
{
    return function()
    {
        return 'three';
    }
}

console.log(three()());
/*
function sayHello()
{
    console.log('--------------');
    console.log('hello!');
    console.log('--------------');
}

// sayHello()

let a = sayHello;       // a acts as a pointer to the function - doesn't need the () - only when invoked
a();                    // Being invoked so it's using the ()
a();
a();


function sayHello(name)
{
    console.log('--------------');
    console.log('hello ' + name + '!');
    console.log('--------------');
}

sayHello('bob');
sayHello('beth');
sayHello('Kiara');
*/

function calculateTax(amount)
{
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(100);
console.log(tax);
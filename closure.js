// Closure allows you to associate some data with a function and use
// the function with that data already kind of baked into it from that point on
// Taking a function and maryying to some data throught an input parameter an
// input argument and then they live happily ever after in their own variable

// The say hello method has finished executing and it returns a function
// but in the environment in which the method originally ran it preserved that
// so that whatever value we passed in it preserved inside the return function
// the environment or in this case just the name input parameter remains available

// whenever returning a function from a function, we also glue the variable that 
// were defined outside of the return fucntion including (in this case) our input parameters

/*
function sayHello(name)
{
    return function() 
    {
        console.log('howdy ' + name);
    }
}

let bob = sayHello('bob');
let conrad = sayHello('conrad');
let grant = sayHello('grant');

bob();
conrad();
grant();
*/

/* function outer()
{
    let ovni = 'Thats an alien';

    function inner()
    {
        console.log(ovni);
    }
    return inner;
}

function flying()
{
    const whatIsThat = outer();
    whatIsThat();
}

flying(); */


function getNome(callback) {
    // Codigo de chamada a API

    // Return do valor da chamada da API
    return callback("Pedro");
}

getNome(function(nome){
    console.log(nome);
});
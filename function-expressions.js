/*
setTimeout(function() { console.log('I waited 2 seconds'); }, 2000);


let counter = 0;
function timeout()
{
    setTimeout(function() 
    { 
        console.log('hi '+ counter++);
        timeout();                      // Recursion
    }, 2000);
}

timeout();
*/

// To immediately invoke a function you need to wrapp a function inside () 
// and place another () at the end, which "signals" invoking

(function()
{
    console.log('Immeditely Invoked Function Expression');
})();
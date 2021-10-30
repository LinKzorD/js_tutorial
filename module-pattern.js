// IIFE - Immediately Invoked Function Expression
// IIFE to create a Function, which will return an object
// and that object will have defined functions and variables that
// will then be scoped to one variable
// This way variables and fucntions will be essentially private (encapsulation)
// They will be unavailable outsite of the public variables and 
// the public functions we will return

// Technic called "module pattern"
// Another variation is the "reavealing module parttern"

var counter = (function() 
{
    // private stuff
    // this will not be accessible outside the calling the counter.Smt
    let count = 0;

    function print(message)
    {
        console.log(message + '---' + count);
    }

    //return and object
    return {
        // value: count,
        get: function() { return count; },

        set: function(value) { count = value; },

        increment: function()        
        {
            count+=1;
            print('After increment: ');
        },

        reset: function()        
        {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }
})();

//console.log(counter.count);

counter.increment();
counter.increment();
counter.increment();

// Accidentally created a closure
// console.log(counter.value);

counter.set(7);
console.log(counter.get());

counter.reset();
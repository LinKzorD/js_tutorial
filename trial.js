var trial = (function() {
    let counter = 0;

    function print(message)
    {
        console.log(message + '---' + counter);
    }

    return {

        get: function() { return counter; },

        set: function(value) { counter = value; },

        increment: function() 
        {
            counter += 1;
            print('After increment: ');
        },

        reset: function()
        {
            print('Before reset: ');
            counter = 0;
            print('After reset: ');
        } 


    }
})();



trial.set(7);
trial.increment();
trial.increment();
trial.increment();
trial.reset();
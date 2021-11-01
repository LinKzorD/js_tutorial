// Regular expressions allow you to create a pattern
// to determine if a given string macthes that
// pattern that you created - like zip codes and phone numbers
// also known as REGEX

let pattern = /xyz/;
// console.log(pattern);
// console.log(typeof pattern);

let value = 'This is xyz a test.';

// Check if the pattern exists in 'value':
// console.log(pattern.test(value));

// Replace the pattern with string 'just':
// console.log(value.replace(pattern, 'just'));

// It returns information about where it was found, as an array
// Example: [ 'xyz', index: 8, input: 'This is xyz a test.', groups: undefined ]
// It shows the pattern that it is looking for
// the index where it was found
// the input where it was present

console.log(value.match(pattern));

// It allows you to modify it (the array)
// grab that object and work with it individually

var match = value.match(pattern);
console.log(match.index);

let names = ['david', 'eddie', 'alex', 'michael'];
let others = ['sammy', 'gary', 'wolfgang', 'mark'];

let lost = [4, 8, 15, 16, 23, 42];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 24, 55];

// concat combines 2 arrays together

var combined = lost.concat(fibonacci);
// console.log(combine);

// console.log(fibonacci.join('~'));

// push, pop

// .shift will retake one item off the front side of  
// the array and return it, while removing it from the
// array. (an inverted pop - instead of last removes first)
// console.log(lost.shift());
// console.log(lost);

// .unshift adds instead of removing to the beggining of the array

// lost.unshift(1, 2, 3, 4);
// console.log(lost);

/* console.log(names);
console.log(names.reverse());
console.log(names.sort());
 */

// console.log(others.indexOf('mark'));

// console.log(combined);
// console.log(combined.lastIndexOf(1));

// map

var filtered = combined.filter((x) => { if (x <= 15) return x; });
// console.log(filtered);

// .forEach will go through each element of an array

// names.forEach((name) => console.log(`howdy ${name}`));

// .every checks if EVERY value inside an array match
// a certain condition 
// console.log(filtered.every((num) => num < 10));
// console.log(filtered.every((num) => num < 16));

// .some checks if SOME value inside an array 
// match a certain condition
// console.log(fibonacci.some((num) => num > 50));
// console.log(fibonacci.some((num) => num > 100));




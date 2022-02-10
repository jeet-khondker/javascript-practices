let isFriday = true;

console.log(isFriday);
console.log(Boolean(isFriday));

let stock = '35';
console.log(Boolean(stock)); // Return true because there is a value exist

let idontknow = ''; // Empty String
console.log(Boolean(idontknow)); // Return false as there is NO value exist

let space = ' ';
console.log(Boolean(space)); // Return true because there is a space

/* 
Exercise
Find out which is truthy or falsey
*/
let example1 = null;
let example2 = undefined;
let example3 = NaN; // NaN - Not A Number
let example4;
let example5 = 0;
let example6 = 1;

console.log(Boolean(example1)); // Return false
console.log(Boolean(example2)); // Return false
console.log(Boolean(example3)); // Return false
console.log(Boolean(example4)); // Return false
console.log(Boolean(example5)); // Return false
console.log(Boolean(example6)); // Return true
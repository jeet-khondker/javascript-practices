let name = "Jeet";

// Pad Start - padStart(total length, "value/data to enter first")
// If the total length is less than the original, the no value/data will be added at first
console.log(name.padStart(10, "S"));

// Pad End - padEnd(total length, "value/data to enter last/at the end")
// If the total length is less than the original, the no value/data will be added at last
console.log(name.padEnd(10, "S"));

/* Challenge */
let example = 'YouTube.com/JeetKhondker';

console.log(example.padStart(100));
console.log(example.padStart(100).length);

console.log(example.padEnd(1));
console.log(example.padEnd(1).length);


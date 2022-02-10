// Sets remove the duplicates

const numberSet = new Set([1, 1, 1, 1, 2, 2, 2, 2, 2]);

numberSet.add(5);
console.log(numberSet);

numberSet.add(5).add(17);

console.log(numberSet.delete(5)); // True because 5 exists
console.log(numberSet.delete(100)); // False because 100 does not exists

console.log(numberSet.has(2)); // True because 2 exists

console.log(numberSet);
console.log(numberSet.size);

numberSet.clear(); // Clear the Sets
console.log(numberSet.size);
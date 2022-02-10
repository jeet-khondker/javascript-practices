let fruits = ["Apples", "Bananas", "Oranges", "Watermelon"];
let vegetables = ["Asparagus", "Tomatoes", "Broccoli"]

// Joining 2 arrays
let groceries = fruits.concat(vegetables)
console.log(groceries)

console.log("Sorted: ", groceries.sort())

console.log(groceries.slice(1, 4))
console.log(groceries.reverse())

// Displaying the length of the array 'fruits'
console.log(fruits.length);

console.log(fruits[0]); // Return Apples
console.log(fruits[1]); // Return Bananas
console.log(fruits[2]); // Return Oranges
console.log(fruits[3]); // // Return Watermelon
console.log(fruits[4]); // Return undefined

fruits.push("Avocado"); // Adding elements at the end of the array
console.log(fruits);
console.log(fruits[4]); // Return Avocado instead of undefined

fruits.push("Kiwi", "Lemon", "Melon", "Grapes", "Malta");
console.log(fruits);

fruits.pop(); // Removing the last value of the array which is 'Malta'
console.log(fruits);

// Overwriting an index value of the array
fruits[6] = "Guava";
console.log(fruits);

// For each item in array: forEach
fruits.forEach((fruit) => {
    console.log(fruit);
});

/* 
Exercise - Manage Inventory

/*
    1. Your company is launching 3 new products: toilet paper, bottled water, and sanitizer. Store them in a list.
    2. Turns out there was a mistake and toilet paper was actually paper towels. Make the appropriate update.
    3. Sanitizer sells out. Remove it from the list.
    4. Business is so good the company launches a new product: Bleach. Add it to the list.
    
    Note: After creating the initial array do not just create a brand new array. Modify it accordingly.
*/

// 1. Your company is launching 3 new products: toilet paper, bottled water, and sanitizer. Store them in a list.
const products = ["Toilet Paper", "Bottled Water", "Sanitizer"];

// Turns out there was a mistake and toilet paper was actually paper towels. Make the appropriate update.
products[0] = "Paper Towels";

// 3. Sanitizer sells out. Remove it from the list.
products.pop()

// 4. Business is so good the company launches a new product: Bleach. Add it to the list.
products.push("Bleach");

console.log(products);

// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

const favouriteSongs = [];

// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
favouriteSongs.push("Luk Chup Jaana", "Pakka Ghughu Maal", "Haan Mein Jitni Martaba");

// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
console.log(favouriteSongs[favouriteSongs.length - 1]);

// 3. Invoke the pop method on your created array. What values do you have left in the array? 
favouriteSongs.pop();
console.log(favouriteSongs);

/*
Map Function of Arrays
*/
const temperatures = [
    { 
        degrees: 69, 
        isRecordTemp: false 
    },
    { 
        degrees: 82, 
        isRecordTemp: true 
    },
    { 
        degrees: 73, 
        isRecordTemp: false 
    },
    { 
        degrees: 64, 
        isRecordTemp: false 
    }
];

console.log(temperatures);

/*
const updatedTemperatures = temperatures.map(temperature => 

        // Adding a new attribute to all elements
        // temperature.isRecordTemp = true;
    
        // Based on a specific condition, a new attribute with it's value is added
        // If the condition is not met, the original attributes of the array is returned
        // Ternary
        // ... (Spread Operator): Previous element of the array
        temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
    )
*/

/*
forEach()
*/
/* 
updatedTemperatures.forEach(temperature => {
    if (temperature.isHigh) {
        console.log(`Temperature ${ temperature.degrees } was a record high last week!`);
    }
})
*/

        
temperatures
    .map(temperature => 

    // Adding a new attribute to all elements
    // temperature.isRecordTemp = true;

    // Based on a specific condition, a new attribute with it's value is added
    // If the condition is not met, the original attributes of the array is returned
    // Ternary
    // ... (Spread Operator): Previous element of the array
    temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
    )
    /*
    forEach()
    */
    .forEach(temperature => {
        if (temperature.isHigh) {
            console.log(`Temperature ${ temperature.degrees } was a record high last week!`);
        }
    });

// console.log(updatedTemperatures);

// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
];

// Use reduce() to sum the weights of all the cars
const totalWeight = cars.reduce((accumulator, car) => {
    return accumulator + car.weight;
}, 0); // accumulator value starting from 0

console.log("Total weights of cars: ", totalWeight);

// Use reduce to sum the weights of only the electric cars 
const totalWeightForElectricCars = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight;
    } else {
        return accumulator;
    }
}, 0); // accumulator value starting from 0

console.log("Total weights of electric cars: ", totalWeightForElectricCars);

// Destructuring Arrays
let [firstName, middleName, lastName] = ["Jeet", "ZH", "Khondker"];

console.log(`${ firstName } ${ middleName } ${ lastName }`);

let newFruits = new Array("Apples", "Bananas", "Oranges", "Watermelons", "Pineapples", "Grapes")
console.log(newFruits[2])

console.log("To String: ", newFruits.toString())
console.log(newFruits.join(' | '))
console.log(newFruits.pop(), newFruits) // Pop: removes the last item from an array

newFruits.shift() // Shift: removes the first item from an array
console.log(newFruits)

newFruits.unshift("Kiwi") // Unshift: add the first item in an array
console.log(newFruits)

// Sorting Numbers Array
let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2]

// Ascending Order
let sortedNumbersAscending = someNumbers.sort(function(number1, number2) {
    return number1 - number2
})

console.log(sortedNumbersAscending)

// Descending Order
let sortedNumbersDescending = someNumbers.sort(function(number1, number2) {
    return number2 - number1
})

console.log(sortedNumbersDescending)


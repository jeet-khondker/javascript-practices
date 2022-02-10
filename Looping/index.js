let total = 0;
let numberArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// For Loop
for (let i = 0; i < numberArray.length; i++) {
    total += numberArray[i];
}

console.log("Total: " + total);

for (const number of numberArray) {
    total += number;
}

console.log("Total Sum: " + total);

// Challenge: Total Price

/*
 1. Give our customer their total price. 
 2. Add the price of the items together with a sales tax of 8%.
 3. Log the price. 
*/

const cartItems = [
    {
        quantity: 1, 
        price: 5
    },
    {
        quantity: 3,
        price: 4
    },
    {
        quantity: 10,
        price: 1
    }
];

let totalPrice = 0;

// 2. Add the price of the items together with a sales tax of 8%.
/* 
for (let item = 0; item < cartItems.length; item++) {
    totalPrice += cartItems[item].price * cartItems[item].quantity;
}
*/

// 2. Add the price of the items together with a sales tax of 8%.
for (const item of cartItems) {
    totalPrice += item.price * item.quantity;
}

// 2. Add the price of the items together with a sales tax of 8%.
// totalPrice = totalPrice * 1.08
totalPrice *= 1.08;

// 1. Give our customer their total price.
// 3. Log the price.
console.log("Total Price: " + totalPrice);

// While Loop
let count = 0;

// While Loop
// May or may not run
while (false) {
    count++;

    if (count >= 20) {
        break;
    }
}

console.log("Count: " + count);

// Do While Loop
// Will be executed at least once
let counting = 0;

do {
    counting++;

    if (counting >= 20){
        break;
    }

} while (false)

console.log("Counting to: " + counting);

// Challenge: Analytics

/*
 1. Track our user's activity.
 2. While the total updates is under 10 updates keep logging the update count.
 3. After we reach our threshold say, 'No longer tracking the user'.
 4. Change the logic to a do while with it updating just a single time. 
*/

let totalUpdates = 10;

// 4. Change the logic to a do while with it updating just a single time. 
do {
    totalUpdates++;
    console.log("Total Updates: ", totalUpdates);
} while (totalUpdates < 10);

// 3. After we reach our threshold say, 'No longer tracking the user'.
console.log("No longer tracking the user.");

// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sydney" }
]

for (const student of students) {
    console.log(`${ student.name } lives in ${ student.city }`);
}
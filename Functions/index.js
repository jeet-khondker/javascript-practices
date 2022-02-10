// Function: Add
/*
function add(number1, number2) {
    return number1 + number2;
}
*/
// Arrow Function of Add
const add = (number1, number2) => number1 + number2;

console.log(add(10, 20));

// Challenge: Checkout

/*
 1. Go through the full checkout process.
 2. Use getUserCredentials provided that returns the first name, last name and concats with email.  
 3. Write a function called getPreTaxTotal that take in our cartItems and returns the total without tax.
 4. Pass the preTaxTotal value to a getTaxedTotal function that returns the value with tax.
 5. Log each value from the 3 functions out. 
*/

// 2. Use getUserCredentials provided that returns the first name, last name and concats with email.
/*
function getUserCredentials(firstName, lastName, email) {
    return firstName + " " + lastName + " | " + email;
}
*/
// Arrow Function of getUserCredential
const getUserCredentials = (firstName, lastName, email) => `${ firstName } ${ lastName } | ${ email }`;

const userCredentials = getUserCredentials("Jeet", "Khondker", "jeetzhkhondker@gmail.com");

// 3. Write a function called getPreTaxTotal that take in our cartItems and returns the total without tax.
/*
function getPreTaxTotal(cartItems) {

    let totalPriceWithoutTax = 0;

    for (let item of cartItems) {
        totalPriceWithoutTax += item.quantity * item.price;
    }

    return totalPriceWithoutTax;
}
*/
// Arrow Function of getPreTaxTotal
const getPreTaxTotal = (cartItems) => {
    let totalPriceWithoutTax = 0;

    for (let item of cartItems) {
        totalPriceWithoutTax += item.quantity * item.price;
    }

    return totalPriceWithoutTax;
}

// 4. Pass the preTaxTotal value to a getTaxedTotal function that returns the value with tax.
/*
function getTaxedTotal(totalPriceWithoutTax) {
    let totalPriceWithTax = 0;

    totalPriceWithTax = totalPriceWithoutTax * 1.08;

    return totalPriceWithTax;
}
*/
// Arrow Function of getTaxedTotal
const getTaxedTotal = (totalPriceWithoutTax) => {
    let totalPriceWithTax = 0;
    return totalPriceWithTax = totalPriceWithoutTax * 1.08;
}

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

const preTaxTotal = getPreTaxTotal(cartItems);

const finalTaxedTotal = getTaxedTotal(preTaxTotal);

// 5. Log each value from the 3 functions out.
console.log(userCredentials);
console.log("Pre-Tax Total Price: ", preTaxTotal);
console.log("Total Price with Tax of 8%: ", finalTaxedTotal);

// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Function: countDown
/*
function countDown(startingNumber, step) {
    let countFromNumber = startingNumber + step;
    // Closure Function: decrement()
    return function decrement() {
        countFromNumber -= step;
        return countFromNumber;
    }
}
*/
// Arrow Function
const countDown = (startingNumber, step) => {
    let countFromNumber = startingNumber + step;
    return () => countFromNumber -= step;
}

const countingDown = countDown(11, 1);

for (let item = 0; item < 10; item++) {
    console.log(countingDown());
}

// Function: Splitting Bill
/*
function splitBill(amount, peopleNumber) {
    return `Each person needs to pay ${ amount / peopleNumber } dollars.`;
}
*/
// Arrow Function
const splitBill = (amount, peopleNumber) => `Each person needs to pay ${ amount / peopleNumber } dollars.`;

console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
console.log(splitBill(10, 5));

/* --------------- */
/* ARROW FUNCTIONS */
/* --------------- */

// Function Declaration
function breakfastMenu() {
    return "I am going to scrambled eggs for breakfast";
}

// Arrow Function
// In case of multiple parameters, brackets are required
const breakfastMenuArrowFunction = (task, foodItem) => `I am going to ${ task } ${ foodItem } for breakfast`;

console.log(breakfastMenuArrowFunction("scrambled", "eggs"));

// Anonymous Function (No Name Function)
const lunchMenu = function() {
    return "I am going to eat pizza for lunch";
}

// Arrow Function
// In case of multiple parameters, brackets are required
const lunchMenuArrowFunction = (food, drinks) => `I am going to eat ${ food } and drink ${ drinks } for lunch`;

console.log(lunchMenuArrowFunction("pizza", "cocacola"));

// Arrow Function
// In case of one parameter, brackets are NOT required
const dinnerMenu = food => `I am going to eat a ${ food } for dinner`;

console.log(dinnerMenu("chicken salad"));

/* ----------------- */
/* DEFAULT PARAMETER */
/* ----------------- */

const leadSinger = (artist = "Someone") => {
    console.log(`${ artist } is the lead singer of the Cold Play`);
}

leadSinger(); // Will print default parameter
leadSinger("Chris Martin");

/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

const buyItem = (food = "something") => {
    console.log(`I'm going to buy ${ food } from the grocery shop`);
}


buyItem();
buyItem("milk");
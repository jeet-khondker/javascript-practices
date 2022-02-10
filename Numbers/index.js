let price = 100;

price = 100.59;

console.log(price);
console.log(typeof price); // number

// Getting only Integer values
console.log(parseInt(price));

// Keeping the floating values
console.log(parseFloat(price));

// Having 5 decimal places floating point number
console.log(price.toFixed(5));

// Having 1 decimal place floating point number and basically rounding (ceiling up) the number
console.log(price.toFixed(1));

// String Converted to Integer
let phoneNumber = "9122559";
console.log(parseInt(phoneNumber));

// Challenge: Checkout Order Details

/*
 1. Create 3 variables to store an item price. For the last price 2 items were ordered (multiplication).
 2. Tell the user what the total price is before discount.
 3. Inform the user what the average price of items is before discount.
 4. Inform them the final price after saving 5 dollars with promo code 'I Got 5 On It'.
*/

//  1. Create 3 variables to store an item price. For the last price 2 items were ordered (multiplication).
const price1 = 5;
const price2 = 10;
const price3 = 15;

const totalPrice = price1 + price2 + (price3 * 2);

// 2. Tell the user what the total price is before discount.
console.log("Total Price before Discount: " + totalPrice);

// 3. Inform the user what the average price of items is before discount.
const averagePrice = totalPrice / 3;
console.log("Average Price before Discount: " + averagePrice);

// 4. Inform them the final price after saving 5 dollars with promo code 'I Got 5 On It'.
const finalPrice = totalPrice - 5;
console.log("I Got 5 On It and now the final price is: " + finalPrice);

let example1 = 10; // number
let example2 = "10"; // string

console.log(typeof example1);
console.log(typeof example2);
console.log(example1 != example2); // value not equal
console.log(example1 !== example2); // type not equal
console.log(example1 == example2); // Value Check only
console.log(example1 === example2); // Value & Data Type Check

// Challenge: Best Promo Code

/*
 1. Our business wants to make sure we give our users the best promo codes available for two categories.
 2. Create two promo codes in variables and compare to find out if the first one is a better value for the dollars off category. 
*/
const promoCode1 = 100;
const promoCode2 = 200;

console.log("Is Promo Code 1 a better deal?: ", promoCode1 > promoCode2);

// Challenge: Upsell Quantity

/*
 1. Our business wants to upsell items in a user's cart. 
 2. Ask the user if they would like to add one more item (with the variable provided). Update the quantity variable if they do.
 3. Log the current quantity.
*/
const customerAnswer = Math.random() >= 0.5;
console.log("Customer says: " + customerAnswer);

let quantity = 2;

if (customerAnswer) {
    quantity++; // quamntity = quantity + 1
}

console.log("Quantity: " + quantity);
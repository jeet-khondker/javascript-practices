/* Example 1 */

let contacts = ["Mary", "Joel", "Danny"];

// A new copy of contacts array is made and saved in personalFriends array
let personalFriends = [ "David", ...contacts, "Lily" ];

contacts.push("John");

console.log(contacts);

console.log(personalFriends);

/* Example 2 */

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
};

let employee = {
    id: "EMP001",

    // Copy of the 'person' object in 'employee' object
    ...person,

    salary: 50000,
    position: "Software Developer"
}

console.log(employee);

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, 
    but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, 
    and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [ ...shoppingList, "bread", "chicken", "fish", "beef", "mutton" ];

console.log(shoppingList);

console.log(shoppingBasket);
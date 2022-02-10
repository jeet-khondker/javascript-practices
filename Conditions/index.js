let programmingLanguage = "";

if (programmingLanguage === "JavaScript" || false === true) {
    console.log("JavaScript is a wonderful programming language.");
} else if (programmingLanguage === "Python") {
    console.log("Python is a wonderful programming language.");
} else {
    console.log("There is no wonderful programming language.");
}

// Challenge 1: User Age

/*
 1. Our business wants to keep track of what age range a user falls into.
 2. If they are 12 or younger log 'child'.
 3. If not a child but the user's age is under 20 log 'teenager'.
 4. If neither log 'adult'.
*/
const age = 24;

// 2. If they are 12 or younger log 'child'.
if (age <= 12) {
    console.log("Child");
// 3. If not a child but the user's age is under 20 log 'teenager'.
} else if (age > 12 && age < 20) {
    console.log("Teenager");
// 4. If neither log 'adult'.
} else {
    console.log("Adult");
}

// Challenge 2: Practice and or Operators

/*
    1. Look at the examples below and see if you can guess the 
*/

console.log(10 === 10 && 5 < 4);
// Output: False

console.log(10 === 10 || 5 < 4);
// Output: True

console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5);
// Output: True

// Switch Case Statement
let studentGrade = 'A';

switch(studentGrade) {
    case 'A':
        console.log("Excellent Result!");
        break;
    case 'B':
        console.log("Very Good Result");
        break;
    case 'C':
        console.log("Good Result");
        break;
    case 'D':
        console.log("Good Result");
        break;
    case 'F':
        console.log("Failed");
        break;
    default:
        console.log("Not a grade either.");
}

// Challenge: Customer Upgrade

/*
 1. Our business wants to convince users to upgrade their accounts.
 2. Check a user's account type (switch) of 'shopper', 'super shopper', & 'guest'.
 3. If a user is a 'guest' ask them if they want to upgrade to a 'shopper'.
 4. If a user is a 'shopper' ask if they want to upgrade to a 'super shopper'
 5. If a user is a 'super shopper' tell them they are the best!
 6. If we don't know user's status they are a guest.
*/

const userType = "Shopper";

// 2. Check a user's account type (switch) of 'shopper', 'super shopper', & 'guest'.
switch(userType) {

    // 4. If a user is a 'shopper' ask if they want to upgrade to a 'super shopper'
    case "Shopper":
        console.log("Do you want to upgrade to a super shopper?: ");
        break;

    // 5. If a user is a 'super shopper' tell them they are the best!
    case "Super Shopper":
        console.log("You are the best!");
        break;

    // 3. If a user is a 'guest' ask them if they want to upgrade to a 'shopper'.
    // 6. If we don't know user's status they are a guest.
    default:
        console.log("Do you want to upgrade to a shopper?: ");
        break;

}

const response = "jzhk";
const isEmailVerified = true;

/*
let username;

if (response) {
    if (isEmailVerified) {
        username = response;
    }
} else {
    username = "guest";
}

console.log(`Welcome ${username}`);
*/

// Ternary
// const username = response && isEmailVerified ? response : "guest";

// console.log(`Welcome ${username}`);

// Short-Circuiting
const username = isEmailVerified && response || "guest";

console.log(`Welcome ${ username }`);


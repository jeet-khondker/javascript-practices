// ${}
// Way of representing variables inside string
let programmingLanguage = "JavaScript";
let otherPhrases = "I am learning";

console.log(`                   ${ otherPhrases } ${ programmingLanguage }`);
console.log("Size: " + `                   ${ otherPhrases } ${ programmingLanguage }`.length);
console.log("After removing extra spaces, Size is: " + `                   ${ otherPhrases } ${ programmingLanguage }`.trim().length);

// Changing all characters to UPPERCASE
console.log(`${ otherPhrases } ${ programmingLanguage }`.toUpperCase());

// Changing all characters to lowercase
console.log(`${ otherPhrases } ${ programmingLanguage }`.toLowerCase());

// Splitting all strings separated by ' ' (a space) and store it in an array data type
console.log(`${ otherPhrases } ${ programmingLanguage }`.split(' '));

// Splitting all strings on every character and store it in an array data type
console.log(`${ otherPhrases } ${ programmingLanguage }`.split(''));

let phoneNumber = '080-2132-6533';

// Splitting string on '-' and store it in an array data type
console.log(phoneNumber.split('-'));

console.log("Subscriber Code: " + phoneNumber.split('-')[0]);
console.log("Area Code: " + phoneNumber.split('-')[1]);
console.log("Number Identifier: " + phoneNumber.split('-')[2]);
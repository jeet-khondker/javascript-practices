/*
Topic: Variables
Let, Const, Var
*/

/*
----------------------------------
Var
----------------------------------
Initial Assignment of a Variable.
*/

var username = "jzhk";
console.log(username);

/*
----------------------------------
Let
----------------------------------
Initial Assignment of a Variable.
Value can change later
*/

// Initial Assignment of Variable
let firstName = "Zawab"

// Re-Assignment of Variable
firstName = "Jeet"

let lastName = "Khondker"
let fullName = firstName + ' ' + lastName;

let age = 34;

let isEmployed = false
isEmployed = true

console.log("Name: " + fullName);
console.log("Age: " + age);
console.log("Is Employed?: " + isEmployed);

/*
----------------------------------
Const
----------------------------------
Variable that is constant and never going to change its value

Use Case Scenario: An APP (Software Product) was built
*/
const buildDate = "October 21, 2020";

// ERROR: TypeError: Assignment to constant variable.
// buildDate = "October 22, 1987"; 

/*
When we don't know when will be the released date of the software product, 
'let' is used.
*/
let releasedDate;

console.log("Product Release Date: " + releasedDate); // undefined, because it is not defined

// Now we know our product release date, so re-assigned later
releasedDate = "November 15, 2020";

console.log("Product Build Date: " + buildDate);
console.log("Product Release Date: " + releasedDate);

// Use Case Scenario: Today is my wife's birthday
const name = "Israt Swarna";

let years_age = 22;
years_age = years_age + 1;

console.log("My wife " + name + " is turning " + years_age + " this year.");

message = "Welcome To JavaScript";
console.log(message);

console.log(window);
console.log(window.message);

// Zahid Brother's Program 👇

for (i = 1; i <= 10; i++) {
	var sum = 0
	sum += i
}

console.log("Sum is", sum)

var result = 0
for (i = 1; i <= 10; i++) {
	result += i
}

console.log("Result is", result)

let fruit = "apple"
console.log(fruit.slice(2))

let personInformation_csv = "Jeet Khondker, Israt Swarna, Sanjida Shema, Dipu, Esita Sarmi"
console.log(personInformation_csv.split(',')) // Split By a Comma(,)
console.log(personInformation_csv.split('')) // Split by each character

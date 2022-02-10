const person = {
    firstName: "Jeet",
    lastName: "Khondker",
    age: 34,
    isEmployed: true,
    address: {
        country: "Japan",
        prefecture: "Tokyo",
        city: "Kodaira",
    },
    hobbies: ["Photography", "Vlogging", "Programming/Coding", "Teaching Computer Programming"],
};

console.log(person.firstName + ' ' + person.lastName + 
" aged " + person.age + " years of age has an employment status of " + person.isEmployed);

console.log(person.firstName + ' ' + person.lastName + " lives in " + 
person.address.city + ", " + person.address.prefecture + ", " + person.address.country + '.');

console.log(person.hobbies.length + " Hobbies of " + person.firstName + ' ' + person.lastName + " are: " + 
person.hobbies[0] + ", " + person.hobbies[1] + ", " + person.hobbies[2] + ", " + person.hobbies[3] + '.');

// Overwriting the person's age
person.age = 35;
console.log(person.age);

// Displaying all keys/properties of the Object
console.log(Object.keys(person));

// Displaying all values of the Object
console.log(Object.values(person));

// Checking if a particular property exist or not
console.log(person.hasOwnProperty("firstName")); // Return true because 'firstName' exist in the Object 'person'
console.log(person.hasOwnProperty("middleName")); // Return false because 'middleName' does not exist in the Object 'person'

/* Challenge - User Profile Form
    1. Your organization needs the user's personal information to ship the inventory to. Create an object to store the data in.
    2. Store a user's first and last name.
    3. Store a user's address. City and state will be enough. Have this as a nested object. (Interface Segregation Principle)
    4. The business wants to give more personalized ads and wants to collect information about the user's hobbies. Create a list of hobbies.
    5. Are they a gold member? Store a boolean with this value.
*/

// 1. Your organization needs the user's personal information to ship the inventory to. Create an object to store the data in.
const user_personal_information = {

    // 2. Store a user's first and last name.
    firstName: "Jeet",
    lastName: "Khondker",

    // 3. Store a user's address. City and state will be enough. Have this as a nested object. (Interface Segregation Principle)
    address: {
        city: "Kodaira",
        state: "Tokyo",
    },

    // 4. The business wants to give more personalized ads and wants to collect information about the user's hobbies. Create a list of hobbies.
    hobbies: ["Photography", "Vlogging", "Programming/Coding", "Teaching Computer Programming"],

    // 5. Are they a gold member? Store a boolean with this value.
    isGoldMember: false,

};

console.log(user_personal_information);

// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
const bar = "Tokyo Bar";
const cafe = "Jonathan's Cafe";
const restaurant = "Chillis Restaurant";

// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
const favouritePlaces = {

    // 3. If you're not already using the object property shorthand, refactor your code to do so
    bar,
    cafe,
    restaurant,

    // 4. Create a method on the object - greeting() -  that logs out a message to the console
    greeting() {
        console.log("Welcome");
    }
}

// 5. Invoke the greeting() method and also log out your favourite restaurant to the console
favouritePlaces.greeting();
console.log(`My favorite restaurant is ${ favouritePlaces.restaurant }`);

const color = "black";
const hexCode = "#000";

const colors = {
    blue: "#f00",
    orange: "#f60",
    white: "#fff",
    yellow: "#ff0",
    "yellow Color": "#ff0",
    car: "toyota",
    [color]: hexCode
};

console.log(colors);

// Adding a new element in the object
colors.red = "#ffo";

// Updating an existing element in the object
colors.red = "#ff0";

console.log(colors);

// Getting the value of the key in the object
/*
function getColor(key) {
    return colors[key];
}
*/

// Arrow Function of getColor
const getColor = (key) => colors[key];

const colorBlue = getColor("blue");
const colorBlack = getColor("black");

console.log(colorBlue);
console.log(colorBlack);

// Deleting an existing element from the Object
delete colors["yellow Color"];
console.log(colors);

delete colors.car;
console.log(colors);

// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked 
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}

// 1. Destructure the places to drink (coffee and beer) from recommendations
const { beer, coffee } = recommendations;
console.log(`Places to drink: ${ beer } and ${ coffee }`);

// 2. Destructure the places to listen to music
const { music: { traditional, jazz } } = recommendations;
console.log(`Places to listen to music: ${ traditional } and ${ jazz }`);

/* 
function getMusicVenues({ music: { traditional, jazz } }) {
    return `${ traditional } and ${ jazz }`
}
*/

// Arrow function og getMusicVenues
const getMusicVenues = ({ music: { traditional, jazz } }) => `${ traditional } and ${ jazz }`;

const musicVenues = getMusicVenues(recommendations);

console.log(musicVenues);

/*
Map
*/

// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};

// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
const favouritePlaceMapped = new Map([
    ["music", "jazz"],
    ["name", "Paris House"],

    // 2. Add a boolean property 'visited', to indicate places that you've been to it
    ["visited", true],

    // // 3. Add an integer property 'averageBill' with how much you spend there on average
    ["averageBill", 100]
]);

console.log(favouritePlaceMapped);

// 4. Fetch one of the properties using the get() method
console.log(favouritePlaceMapped.get("visited"));
console.log(favouritePlaceMapped.get("averageBill"));


// Destructuring Object (Challenge)

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

// Destructuring Student Object
const { name, age, projects: { diceGame } } = student;

console.log(`${ name }, age ${ age }, created ${ diceGame }`);


function createAddress(prefecture, city) {

    // Object Literals
    const newAddress = { prefecture, city };
    console.log(`${ city }, ${ prefecture }`);
}

createAddress("東京", "小平");

// Object Literal Challenge
function addressMaker(address) {

    const { city, state, country } = address;

    const newAddress = {
        city,
        state,
        country: 'United States'
    };

    console.log(`${ newAddress.city }, ${ newAddress.state }, ${ newAddress.country }`);
    
}

addressMaker({city: 'Austin', state: 'Texas'});

let employee = {
    firstName : '',
    lastName : '',
    getFullName : function(firstName, lastName) {
        
        return this.firstName + ' ' + this.lastName
    }
}

var firstName = prompt("Enter Your First Name:")
var lastName = prompt("Enter Your Last Name:")

employee.firstName = firstName
employee.lastName = lastName

var result = employee.getFullName(firstName, lastName)
console.log(result)

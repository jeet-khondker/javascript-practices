// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[])
function Book(id, title, author, themes = []) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}

// 2. Add ids, titles and authors for your two favourite books. 
const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
const book2 = new Book(2, "The Trial", "Franz Kafka");

console.log(`${ book1.id } | ${ book1.title } by ${ book1.author }`);
console.log(`${ book2.id } | ${ book2.title } by ${ book2.author }`);

// 3. Use the prototype keyword to add a theme property to the  books.
Book.prototype.addTheme = function(newTheme) {
    this.themes = [...this.themes, newTheme];
}

// 4. Add at least one theme to each of your books.
book1.addTheme("Fantasy");
book2.addTheme("Corruption");

console.log(`${ book1.id } | ${ book1.title } by ${ book1.author } (${ book1.themes })`);
console.log(`${ book2.id } | ${ book2.title } by ${ book2.author } (${ book2.themes })`);

// Procedural Programming
// Properties/Variables and Funtions/Methods are not coupled
/*
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

console.log("Salary is: ", getWage(baseSalary, overtime, rate));
*/

// OOP Concept
// employee : Object
/*
const employee = {
    name: {
        firstName: "Jeet",
        lastName: "Khondker"
    },
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    },
    getFullName: function() {
        return this.name.firstName + " " + this.name.lastName;
    }
};

const employee1Salary = employee.getWage();
const employeeFullName = employee.getFullName();
console.log(`Salary of employee ${ employeeFullName } is ${ employee1Salary }`);
*/

/* ************************* */
/* PAYROLL MANAGEMENT SYSTEM */
/* ************************* */

// Factory Function of getting Salary
function getWage(baseSalary, overtime, rate) {
    return {
        baseSalary,
        overtime,
        rate,
        calculateWage: function() {
            return this.baseSalary + (this.overtime * this.rate);
        }
    };
}

// Factory Function of getting Full Name
function getFullName(firstName, lastName) {
    return {
        name: {
            firstName,
            lastName
        },
        createFullName: function() {
            return this.name.firstName + " " + this.name.lastName;
        }
    };
}

// const employee1Salary = getWage(30_000, 10, 20).calculateWage();
// const employee1FullName = getFullName("Jeet", "Khondker").createFullName();

// console.log(`Salary of employee ${ employee1FullName } is ${ employee1Salary }`);

// Constructor Function : Employee Full Name
function GetEmployeeFullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getEmployeeFullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

const employeeName = new GetEmployeeFullName("Jeet", "Khondker");
const employeeFullName = employeeName.getEmployeeFullName();

// console.log(employeeFullName);

// Constructor Function : Employee Get Wage
function CalculateEmployeeSalary(baseSalary, overtime, rate) {
    this.baseSalary = baseSalary;
    this.overtime = overtime;
    this.rate = rate;

    this.calculateEmployeeSalary = function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}

const employeeSalary = new CalculateEmployeeSalary(30_000, 10, 20);
const employeeFinalSalary = employeeSalary.calculateEmployeeSalary();

// console.log(employeeFinalSalary);

console.log(`Salary of employee ${ employeeFullName } is ${ employeeFinalSalary }`);

// Example 2

// Factory Function
function createCircle(radius) {
    return {
        radius,
        calculateArea: function() {
            console.log("Cirlce Area from Factory Function: ", (22 / 7) * radius ^ 2);
        }
    };
}

const circle = createCircle(5);
circle.calculateArea();

// Construction Function
function Circle(radius) {
    this.radius = radius;
    this.calculateArea = function() {
        console.log("Cirlce Area from Constructor Function: ", (22 / 7) * radius ^ 2);
    }
}

const anotherCircle = new Circle(5);
anotherCircle.calculateArea();

import { Employee, KPMGEmployee } from "./employee.js";

let message = '';

let employee = new Employee("Jeet", "Software Development", 3_00_000, "November 1, 2020");

console.log(`${ employee.name } who joined in ${ employee.dateJoined } working in ${ employee.department } getting ${ employee.salary } every month.`);

employee.work();
console.log(Employee.canTalk());

let kpmgEmployee = new KPMGEmployee("Jeet", "Software Development", 3_00_000, "November 1, 2020", true);

if (kpmgEmployee.workFromHome) {
    message = "WFH";
} else {
    message = "WFO";
}

console.log(`${ kpmgEmployee.name } who joined in ${ kpmgEmployee.dateJoined } working in ${ kpmgEmployee.department } getting ${ kpmgEmployee.salary } every month. (${ message })`);
kpmgEmployee.work();

console.log(KPMGEmployee.canTalk());
console.log(kpmgEmployee.metaData);

/* CHALLENGE */
class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    getPlayerInfo() {
        console.log(`${ this.name } was born in ${ this.country }`);
    }
}

class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }

    displayPlayerBio() {
        console.log(`${ this.name } is ${ this.age } years old and knows how to play Tennis`);
    }
}

const messi = new Player("Messi", "Argentina");
messi.getPlayerInfo();

let nadal = new TennisPlayer("Rafael Nadal", "Spain", 34);
nadal.getPlayerInfo();
nadal.displayPlayerBio();


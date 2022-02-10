export class Employee {
    constructor(name, department, salary, dateJoined) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.dateJoined = dateJoined;
    }

    work() {
        console.log("Working");
    }

    get metaData() {
        return `EMPLOYEE INFORMATION
---------------------------------------
    Name: ${ this.name },
    Department: ${ this.department },
    Salary: ${ this.salary },
    Date Joined: ${ this.dateJoined }`;
    }

    static canTalk() {
        return "I can talk.";
    }
}

export class KPMGEmployee extends Employee {
    constructor(name, department, salary, dateJoined, workFromHome) {
        super(name, department, salary, dateJoined);
        this.workFromHome = workFromHome;
    }

    work() {
        console.log("I am a KPMG Worker");
    }
}
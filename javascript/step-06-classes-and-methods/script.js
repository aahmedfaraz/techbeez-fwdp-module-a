class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }

    getCurrentAge() {
        return new Date().getFullYear() - this.birthYear;
    }
}

const person1 = new Person("Ahmed", 2000);
console.log("name:",person1.name)
console.log("year:",person1.birthYear)
console.log("age:",person1.getCurrentAge())
person1.birthYear = 1998;
console.log("year:",person1.birthYear)
console.log("age:",person1.getCurrentAge())

const person2 = new Person("Faraz", 1990);
console.log("name:",person2.name)
console.log("year:",person2.birthYear)
console.log("age:",person2.getCurrentAge())

// name: Ahmed
// year: 2000
// age: 22
// year: 1998
// age: 24
// name: Faraz
// year: 1990
// age: 32

class Employee extends Person {
    constructor(name, birthYear, salary) {
        super(name, birthYear);
        this.salary = salary;
    }

    getFullSalary() {
        return this.salary + (this.salary * 0.2 );
    }
}

const emp1 = new Employee('Bob', 2001, 1000);
console.log("name : ", emp1.name);
console.log("year : ", emp1.birthYear);
console.log("salary : ", emp1.salary);
console.log("age : ", emp1.getCurrentAge());
console.log("Full salary : ", emp1.getFullSalary());

// name :  Bob
// year :  2001
// salary :  1000
// age :  21
// Full salary :  1200
// complete this js code
// first I Create a constructor function called Person 
// that takes two arguments: name and age.
function Person(name, age) {
	 this.name = name;
  this.age = age;
}
// Method added to the Person prototype
Person.prototype.greet = function() {
consloe.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}
	


// function Employee(name, age, jobTitle) {
// 	jobGreet(){
// 		console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}.`)
// 	}
// }
// Employee constructor that inherits from Person
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor to set name and age properties
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Method added to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Usage
const person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John, I am 30 years old.

const employee1 = new Employee("Alice", 25, "Software Engineer");
employee1.greet(); // Output: Hello, my name is Alice, I am 25 years old.
employee1.jobGreet(); // Output: Hello, my name is Alice, I am 25 years old, and my job title is Software Engineer.







// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

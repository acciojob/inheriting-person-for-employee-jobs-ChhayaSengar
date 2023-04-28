function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is Alice and I am 25 years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is Bob, I am 30 years old, and my job title is Manager.`);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;








"use strict";

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person("jonas", 1991);
// console.log(jonas);

// //prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bmw = new Car("BMW", 120);
bmw.accelerate();

"use strict";
/* eslint-env es6 */

// Basic
var DEFAULT_DOB = new Date(1970, 1, 1);

const EMPLOYEE_DATA = [
  {name: 'Brodie Elkington', dob: new Date(1950, 9, 25)},
  {name: 'Levi Hampton'},
  {name: 'Sonia Pilkington', dob: new Date(1967, 4, 2)}
];

// Function
function getYearsDifference(startDate, endDate) {
  let dateDiff = endDate.getFullYear() - startDate.getFullYear();
  let m = endDate.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && endDate.getDate() < startDate.getDate())) {
    dateDiff--;
  }
  return dateDiff;
}

// Class Declaration
class Person {
  constructor(name, dob = DEFAULT_DOB) {
    this.name = name;
    this.dob = dob;
  }

  getAge() {
    return getYearsDifference(this.dob, Date.now());
  }
}

// Class Inheritance
class Employee extends Person {
  constructor(name, dob, employeeNo) {
    super(name, dob);
    this.employeeNo = employeeNo;
    this.notes = [];
  }

  addNotes(noteDate, [...notes]) {
    notes.forEach((note) => {
      this.notes.push({time: Date.now(), data: noteData});
    });
  }

  getNotes(afterDate) {
    return this.notes.filter((note) => note.date > afterDate);
  }
}

// Class Instantiation
let employees = EMPLOYEE_DATA.map(({name, dob}) => {
  console.log(`Adding Employee: ${name}`);
  return new Employee(name, dob, (Math.random() * 9999) + 1);
});

console.log(employees);
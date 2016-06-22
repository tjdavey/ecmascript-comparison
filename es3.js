"use strict";
/* eslint-env es3 */

// Basic
var DEFAULT_DOB = new Date(1970, 1, 1);

var EMPLOYEE_DATA = [
  {name: 'Brodie Elkington', dob: new Date(1950, 9, 25)},
  {name: 'Levi Hampton'},
  {name: 'Sonia Pilkington', dob: new Date(1967, 4, 2)}
];

// Function
function getYearsDifference(startDate, endDate) {
  var dateDiff = endDate.getFullYear() - startDate.getFullYear();
  var m = endDate.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && endDate.getDate() < startDate.getDate())) {
    dateDiff--;
  }
  return dateDiff;
}

// Class Declaration
function Person(name, dob) {
  this.name = name;
  this.dob = (dob !== undefined) ? dob : DEFAULT_DOB;
}

Person.prototype.getAge = function() {
  return getYearsDifference(this.dob, new Date());
};

// Class Inheritance
function Employee(name, dob, employeeNo) {
  this.employeeNo = employeeNo;
  this.notes = [];
  Person.call(this, name, dob);
}

Employee.prototype.addNotes = function(noteDate) {
  var notes = Array.prototype.slice.call(arguments, 1);
  for (var noteIndex in notes) {
    var noteData = notes[noteIndex];
    this.notes.push({time: new Date(), data: noteData});
  }
};

Employee.prototype.getNotes = function(afterDate) {
  var selectedNotes = [];
  for (var noteIndex in this.notes) {
    var note = this.notes[noteIndex];
    if (note.date > afterDate) {
      selectedNotes.push(note.data);
    }
    return selectedNotes;
  }
};

Employee.prototype = new Person();
Employee.prototype.constructor = Employee;

// Class Instantiation
var employees = [];
for (var employeeIndex in EMPLOYEE_DATA) {
  var indEmployeeData = EMPLOYEE_DATA[employeeIndex];
  console.log('Adding Employee: ' + indEmployeeData.name);
  employees.push(new Employee(indEmployeeData.name, indEmployeeData.dob, (Math.random() * 9999) + 1));
}

console.log(employees);
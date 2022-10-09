

const Employee = require("./employee");

// Engineer extends employee properties and methods

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // super is a reference to the parent class employee.
    // super is calling the properties from the Employee 'Super Class"
    // similar to the `this` key word
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
} // "Employee" role overridden to return "Engineer"

module.exports = Engineer;


//* Meet The Future Halfway 
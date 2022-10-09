const Employee = require("./employee");

// Manager extends the Employee Class

class Manager extends Employee {
  constructor(name, id, email, phoneNumber) {
    super(name, id, email);
    this.phoneNumber = phoneNumber;
  }
  getOfficeNumber() {
    return this.phoneNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

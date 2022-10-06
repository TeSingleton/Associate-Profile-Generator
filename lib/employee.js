// created Overall Employee Class
class Employee {
  // employee Constructor
  constructor(name, id, email) {
    //   constructor properties
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //   constructor method of getName
  getName() {
    return this.name;
  }
  // constructor method of getID
  getID() {
    return this.id;
  }
  // constructor method of getEmail
  getEmail() {
    return this.email;
  }
  // constructor method of getRole
  getRole() {
    // returns `employee`
    return "Employee";
  }
}

module.exports = Employee;

// created Overall Employee Class
class Employee {
    // employee Constructor
  constructor(name, id, email) {
    //   constructor properties 
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

// returns `employee`
module.exports = Employee;

/*In addition to Employee's properties and methods, Intern will also have:
school
getSchool()
getRole() // Overridden to return 'Intern'
*/

const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, school);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() { 
    return "Intern"; //Overridden to return 'Intern'
  }
}

module.exports=Intern;
// require inquirer
const inquirer = require("inquirer");
// file system
const fs = require("fs");
// jest for testing
const jest = require("jest");
//  Employee Class and extensions
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// require questions to be used with inquirer
const managerQuestions = require("./lib/managerQuestions");
const engineerQuestions = require("./lib/engineerQuestions");
const internQuestions = require("./lib/internQuestions");

//menu items
const menuItems = require("./lib/menuItems");
const templateHTML = require("./src/generateTeamHTML");
// Create an empty array List to store employee objects
const employees = [];
// gather Manager data
// using asynch function , build a Manager object
async function getManagerInfo() {
  try {
    const answers = await inquirer.prompt(managerQuestions);

    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.phoneNumber
    );
    console.log(answers);
    employees.push(manager);
    menu();
  } catch (error) {
    console.log(error);
  }
}

async function menu() {
  try {
    const answers = await inquirer.prompt(menuItems);
    if (answers.next === "Engineer") {
      getEngineerInfo();
    } else if (answers.next === "Intern") {
      getInternInfo();
    } else if (answers.next === "Done") {
      console.log(employees);
      // generate the HTML and write it to a file
      fs.writeFile("./dist/employees.HTML", templateHTML(employees), (err) =>
        err ? console.error(err) : console.log("Employee HTML is ready to view")
      );
    }
  } catch (error) {
    console.log(error);
  }
}

//Gather Engineer data
async function getEngineerInfo() {
  try {
    const answers = await inquirer
      // inquirer .prompt()
      .prompt(engineerQuestions);
    // Then build a Engineer object
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    console.log(answers);
    employees.push(engineer);
    //Ask for "which team member they want to add next" or "are they done?"
    menu();
  } catch (error) {
    console.log(error);
  }
}

//Gather Intern data
async function getInternInfo() {
  try {
    const answers = await inquirer
      // inquirer .prompt()
      .prompt(internQuestions);
    // Then build a Intern object
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    console.log(answers);
    employees.push(intern);
    //Ask for "which team member they want to add next" or "are they done?"
    menu();
  } catch (error) {
    console.log(error);
  }
}

getManagerInfo();

// *Dont Play for Perfect, Just Play
// *If you do Right, You'll do Better.

// require inquirer
const inquirer = require("inquirer");
// file system
const fs = require("fs");
// jest for testing
const jest = require("jest");
//  Employee Class and extensions
const Employee = require("./lib/employee")
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
// require questions to be used with inquirer
const managerQuestions = require('./lib/managerQuestions')
const engineerQuestions = require('./lib/engineerQuestions')
const internQuestions = require('./lib/internQuestions')
// todo insertHTML template here when complete 
// Create an empty array List to store employee objects
const employees  = [];
// gather Manager data
// using asynch function , build a Manager object
async function getManagerInfo(){
    try{
        
        const answers = await inquirer
        
        .prompt (managerQuestions)

        const manager = new Manager(answers.name,answers.id,answers.email,answers.phoneNumber)
        console.log(answers)
        employees.push(manager)
        menu();
    }
    catch (error){
        console.log(error);
    }
}

async function menu(){
    try {
        const answers = await inquirer
        .prompt([])
    }
}




//Gather Engineer data

// inquirer .prompt()

// Then build a Engineer object

//Gather Intern data

// inquirer .prompt()

// Then build a Intern object

//Ask for "which team member they want to add next" or "are they done?"

// inquirer .prompt()

//    Then deciding which function then call

// generate the HTML and write it to a file

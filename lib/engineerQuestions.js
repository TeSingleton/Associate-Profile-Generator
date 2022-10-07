const engineer = [
    {
      type: "input",
      name: "name",
      message: "Input Engineers Name",
      validate: (inputName) => {
        if (inputName === " " || inputName.length === 0) {
          console.log("Please Input Managers Name");
          return true;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter Manager ID number",
      validate: (inputID) => {
        if (inputID === "") {
          console.log("Please enter the manager's ID number");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter Manager's Email",
      validate: (inputEmail) => {
        if (inputEmail === " ") {
          console.log("Please enter manager email");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter Manager's Office Number",
      validate: (officeNumber) => {
        if (officeNumber === " " || officeNumber.length === 0) {
          console.log("Enter the Manager's Number, please");
          return false;
        }
        return true;
      },
    },
  ];
  
  module.exports = managerQuestions;
  
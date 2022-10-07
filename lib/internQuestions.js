const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "Input intern's Name",
      validate: (inputName) => {
        if (inputName === " " || inputName.length === 0) {
          console.log("Please Input intern's Name");
          return true;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter intern ID number",
      validate: (inputID) => {
        if (inputID === "") {
          console.log("Please enter the intern's ID number");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter intern's Email",
      validate: (inputEmail) => {
        if (inputEmail === " ") {
          console.log("Please enter intern email");
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter intern's Office Number",
      validate: (officeNumber) => {
        if (officeNumber === " " || officeNumber.length === 0) {
          console.log("Enter the intern's Number, please");
          return false;
        }
        return true;
      },
    },
  ];
  
  module.exports = internQuestions;
  
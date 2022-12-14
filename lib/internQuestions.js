const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Input intern's Name",
    validate: (inputName) => {
      if (inputName === " " || inputName.length === 0) {
        return "Please Input Managers Name";
      }
      return true;
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
    name: "school",
    message: "Enter Interns School",
    validate: (inputSchool) => {
      if (inputSchool === " " || inputSchool.length === 0) {
        console.log("Enter the intern's School, please");
        return false;
      }
      return true;
    },
  },
];

module.exports = internQuestions;

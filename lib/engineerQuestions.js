const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Input Engineers Name",
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
    message: "Enter Engineers ID number",
    validate: (inputID) => {
      if (inputID === "") {
        console.log("Please enter the Engineers's ID number");
        return false;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter Engineers's Email",
    validate: (inputEmail) => {
      if (inputEmail === " ") {
        console.log("Please enter Engineers's email");
        return false;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "github",
    message: "Please insert Engineers github profile name",
    validate: (inputGithub) => {
      if (inputGithub === " " || inputGithub.length === 0) {
        console.log("Please insert Engineers github profile name");
        return false;
      }
      return true;
    },
  },
];

module.exports = engineerQuestions;

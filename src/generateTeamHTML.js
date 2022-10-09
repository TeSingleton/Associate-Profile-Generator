var teamCardsArray = [];

function templateHTML(employees) {
  renderTeamCards(employees);

  teamCardsArray = teamCardsArray.join(" ");
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
        />
        <link rel="stylesheet" href="./style.css" />
    
        <title>Employee Profiles</title>
      </head>
      <body>
        <center>
          <header id="header" class="notification is-primary">
            Employee Profiles
          </header>
        </center>
        <!-- todo css and complete html -->
        <main>
        ${teamCardsArray}
        </main>
          <center>
      <footer id="footer" class="notification is-primary"> </footer>
    </center>
    </body>
  </html>`;
  // use template literal to generate team member profiles
  // create a function to get employees array
  // create an array variable
  // create template literal for the employees to be appended to
}

function renderTitle(employees) {
  //  if employees.getRole === Manager
  // return  phone number
  if (employees.getRole() === "Manager") {
    return `Office Number: <a href= "tel:${employees.getOfficeNumber()}" >${employees.getOfficeNumber()}</a>`;
  } //if employee.getRole === Engineer
  // return github
  else if (employees.getRole() === "Engineer") {
    return `GitHub <a href="https://github.com/${employees.getGithub()}" target="_blank" >${employees.getGithub()}</a>`;
  } // if employee,getRole === intern
  // return school
  else if (employees.getRole() === "Intern") {
    return `School:${employees.getSchool()}`;
  }
}

function renderTeamCards(employees) {
  // loop through the employees array.length
  // initialize a variable with a template literal
  // then push
  for (let i = 0; i < employees.length; i++) {
    let employeeInfo = `  <div class="card_container">
        <div class="flip-card"><u>
         ${
           employees[i].name
         }</u>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>${employees[i].getRole()}</u>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="../assets/placeholder_images/cool-anonymous-profile-pictures-15.webp"
                alt="placeholder"
                style="width: 300px; height: 200px"
              />
            </div>
            <div class="flip-card-back">
              <p>ID#: ${employees[i].id}</p>
              <p>Email:<a href="mailto:${employees[i].email}">${
      employees[i].email
    }</a></p>
              <p>${renderTitle(employees[i])}</p>
              
            </div>
          </div>
        </div>`;

    teamCardsArray.push(employeeInfo);
  }
  return;
}

module.exports = templateHTML;

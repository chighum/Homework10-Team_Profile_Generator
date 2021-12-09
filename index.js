const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the team manager's employee ID?",
    name: "managerID",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "managerOffice",
  },
];
const newEmployee = [
  {
    type: "list",
    message: "Would you like to add an employee to the team?",
    name: "addEmployee",
    choices: ["Yes", "No"],
  },
];

const employeeType = [
  {
    type: "list",
    message: "What type of employee do you want to add?",
    name: "engineerIntern",
    choices: ["Engineer", "Intern"],
  },
];

const engineer = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is the engineer's employee ID",
    name: "engineerID",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "engineerGithub",
  },
];

const intern = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the intern's employee ID",
    name: "internID",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Where does the intern go to school?",
    name: "internSchool",
  },
];

inquirer.prompt(questions).then((response) => {
  newbie();
  // if (response.addEmployee)
  // fs.writeFile(
  //   "index.html",
  //   `<!DOCTYPE html>
  //   <html lang="en-US">
  //   <head>
  //     <meta charset="UTF-8">
  //     <title>Team Roster</title>
  //   </head>
  //   <body>
  //     <header>
  //       <h1>Generated by node.js</h1>
  //     </header>
  //     <main>
  //       <h2>${response.name}</h2>
  //       <h2>${response.location}</h2>
  //       <h2>${response.bio}</h2>
  //       <h2>${response.linkedin}</h2>
  //       <h2>Email: <a href="mailto:${response.email}">${response.email}</a></h2>
  //       <h2>Github: <a href="https://github.com/${response.github}">${response.github}</a></h2>
  //     </main>
  //   </body>
  //   `,
  //   (err) => (err ? console.error(err) : console.log("Commit logged!"))
  // );
});

function newbie() {
  inquirer.prompt(newEmployee).then((res) => {
    console.log(res.addEmployee);
    res.addEmployee === "Yes"
      ? inquirer.prompt(employeeType).then((response) => {
          response.engineerIntern === "Engineer"
            ? inquirer.prompt(engineer)
            : inquirer.prompt(intern);
        })
      : console.log("Team Profile Generated!");
  });
}

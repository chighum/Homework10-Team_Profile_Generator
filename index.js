const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const createTemplate = require("./src/template.js");

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

let employees = [];

inquirer.prompt(questions).then((response) => {
  let manager = new Manager(
    response.managerName,
    response.managerID,
    response.managerEmail,
    response.managerOffice
  );
  employees.push(manager);
  newbie();
});

function newbie() {
  inquirer.prompt(newEmployee).then((res) => {
    res.addEmployee === "Yes"
      ? inquirer.prompt(employeeType).then((response) => {
          response.engineerIntern === "Engineer"
            ? engineerQuestions()
            : internQuestions();
        })
      : fs.writeFile("index.html", createTemplate(employees), (err) =>
          err ? console.error(err) : console.log("Team Profile Generated!")
        );
  });
}

function engineerQuestions() {
  inquirer.prompt(engineer).then((engineerResponse) => {
    let newEngineer = new Engineer(
      engineerResponse.engineerName,
      engineerResponse.engineerID,
      engineerResponse.engineerEmail,
      engineerResponse.engineerGithub
    );
    employees.push(newEngineer);
    newbie();
  });
}

function internQuestions() {
  inquirer.prompt(intern).then((internResponse) => {
    let newIntern = new Intern(
      internResponse.internName,
      internResponse.internID,
      internResponse.internEmail,
      internResponse.internSchool
    );
    employees.push(newIntern);
    newbie();
  });
}

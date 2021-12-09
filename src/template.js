const fs = require("fs");
const Manager = require("../lib/manager.js");
const Engineer = require("../lib/engineer.js");
const Intern = require("../lib/intern.js");

function createTemplate(employees) {
  return `<!DOCTYPE html>
    <html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./dist/style.css" />
        <title>Team Roster</title>
    </head>
    <body class="container">
        <h1 class="row justify-content-center">Team Profile</h1>
      <div class ="row justify-content-center">
      ${createCards(employees)}  
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
    </body>
    `;
}

function createCards(employees) {
  let employeeCards = ``;
  for (let i = 0; i < employees.length; i++) {
    employeeCards += `
    <div class="col-3 text-center card">
        <h2 class="uppercase">${employees[i].getName()}</h2>
        <h3 class="uppercase">${employees[i].getRole()}</h3>
        <h4>Employee ID: ${employees[i].getID()}</h4>
        <h4>Email: <a href="mailto:${employees[i].getEmail()}">
        ${employees[i].getEmail()}</a></h4>`;
    if (employees[i].getRole() === "Manager") {
      employeeCards += `<h4>Office Number: ${employees[
        i
      ].getOffice()}</h4></div>`;
    } else if (employees[i].getRole() === "Engineer") {
      employeeCards += `<h4>Github: <a href="https://github.com/${employees[
        i
      ].getGithub()}">${employees[i].getGithub()}</a></h4></div>`;
    } else if (employees[i].getRole() === "Intern") {
      employeeCards += `<h4 class="uppercase">School: ${employees[
        i
      ].getSchool()}</h4></div>`;
    }
  }
  return employeeCards;
}

module.exports = createTemplate;

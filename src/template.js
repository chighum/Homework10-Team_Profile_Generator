const fs = require("fs");
const Manager = require("../lib/manager.js");
const Engineer = require("../lib/engineer.js");
const Intern = require("../lib/intern.js");

function createTemplate(employees) {
  return `<!DOCTYPE html>
    <html lang="en-US">
    <head>
      <meta charset="UTF-8">
      <title>Team Roster</title>
    </head>
    <body>
      <header>
        <h1>Generated by node.js</h1>
      </header>
      <main>
      ${createCards(employees)}
        
        
        
        
      </main>
    </body>
    `;
}

function createCards(employees) {
  let employeeCards = ``;
  for (let i = 0; i < employees.length; i++) {
    employeeCards += `<h2>${employees[i].getName()}</h2>
    <h3>${employees[i].getRole()}</h3>
    <h4>Employee ID: ${employees[i].getID()}</h4>
    <h4>Email: <a href="mailto:${employees[i].getEmail()}">${employees[
      i
    ].getEmail()}</a></h4>`;
    if (employees[i].getRole() === "Manager") {
      employeeCards += `<h4>Office Number: ${employees[i].getOffice()}</h4>`;
    } else if (employees[i].getRole() === "Engineer") {
      employeeCards += `<h4>Github: <a href="https://github.com/${employees[
        i
      ].getGithub()}">${employees[i].getGithub()}</a></h4>`;
    } else if (employees[i].getRole() === "Intern") {
      employeeCards += `<h4>School: ${employees[i].getSchool()}</h4>`;
    }
  }
  return employeeCards;
}

module.exports = createTemplate;
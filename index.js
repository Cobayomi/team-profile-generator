import inquirer from "inquirer"
import Manager from './lib/Manager.js'
import Engineer from './lib/Engineer.js'
import Intern from './lib/Intern.js'
import generateHTML from './scr/generateHTML.js'
import chalk from "chalk"
import fs from "fs"

let employees = [];

function startPrompt(){
  inquirer
    .prompt([
      {
        type: "text",
        message: "Enter team manager's name.",
        name: "name",
      },
      {
        type: "text",
        message: "Enter team manager's ID number.",
        name: "id",
      },
      {
        type: "input",
        message: "Enter team manager's email address.",
        name: "email",
      },
      {
        type: "text",
        message: "Enter team manager's office number.",
        name: "office",
      },
    ])

    .then(({ name, id, email, office }) => {
      let employee = new Manager(name, id, email, office);
      employeeArr.push(employee);
      secondPrompt();
    });
}


function secondPrompt() {
  inquirer
    .prompt({
      type: "list",
      message: "Add more team members",
      choices: ["Engineer", "Intern", "Finish"],
      name: "emp",
    })

    .then(({ emp }) => {
      if (emp === "Engineer") {
        engineerPrompt();
      } else if (emp === "Intern") {
        internPrompt();
      } else {
        writePage();
      }
    });
}


function internPrompt() {
  inquirer
    .prompt([
      {
        type: "text",
        message: "Enter intern's name.",
        name: "name",
      },
      {
        type: "text",
        message: "Enter intern's ID number.",
        name: "id",
      },
      {
        type: "text",
        message: "Enter intern's email.",
        name: "email",
      },
      {
        type: "text",
        message: "Enter intern's school.",
        name: "school",
      },
    ])

    .then(({ name, id, email, school }) => {
      let employee = new Intern(name, id, email, school);
      employeeArr.push(employee);
      secondPrompt();
    });
}


function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "text",
        message: "Enter engineer's name.",
        name: "name",
      },
      {
        type: "text",
        message: "Enter engineer's ID number.",
        name: "id",
      },
      {
        type: "text",
        message: "Enter engineer's email",
        name: "email",
      },
      {
        type: "text",
        message: "Enter engineer's Github username.",
        name: "github",
      },
    ])

    .then(({ name, id, email, github }) => {
      let employee = new Engineer(name, id, email, github);
      employeeArr.push(employee);
      secondPrompt();
    });
}


function writePage() {
  const pageHTML = generateHTML(employeeArr);
  fs.writeFile("./dist/index.html", pageHTML, (err) => {
    if (err) throw err;
  });
}

managerPrompt();
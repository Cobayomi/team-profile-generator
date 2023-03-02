const inquirer = require("inquirer");
const fs = require("fs")
const generateHTML = require('./scr/generateHTML.js')

const Engineer = require('./lib/Engineer.js')
const Intern = ('./lib/Intern.js')
const Manager = require('./lib/Manager.js');
const { validateHeaderName } = require("http");

const teamArr = [];

const addManager = () => {
  return (
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is Manager's name?",
          validate: (name) => {
            if (name) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "managerId",
          type: "input",
          message: "What is the manager's ID number?",
          validate: (Id) => {
            if (Id) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "managerEmail",
          type: "input",
          message: "What is the manager's email address?",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "officeNumber",
          type: "text",
          message: "What is the manager's office number?",
          validate: (office) => {
            if (office) {
              return true;
            } else {
              return false;
            }
          },
        },
      ])
      .then(answers) => {
  const manager = new Manager(
    answers.name,
    answers.id,
    answers.id,
    answers.email,
    answers.officeNumber,
  );
  teamArr.push(manager);
  aadEmployee();
}

const addEngineer = () => {
  return (
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is the Enigneer's name?",
          validate: (name) => {
            if (name) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "id",
          type: "input",
          message: "What is your Enigineer's ID number?",
          vaildate: (id) => {
            if (id) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "email",
          type: "input",
          message: "What is your Enigneer's email?",
          vaildate: (email) => {
            if (email) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "Username",
          type: "input",
          message: "What is your Enigneer's Github username",
          vaildate: (userName) => {
            if (userName) {
              return true;
            } else {
              return false;
            }
          },
        },
      ])
      .then((answers) => {
  const enigineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    answers.userName,
  );
  teamArr.push(engineer);
  addEmplpoyee();

  const addIntern = () => {
    return (
      inquirer
        .prompt([
          {
            name: "name",
            type: "input",
            message: "What is your Intern's name?",
            validate: (name) => {
              if (name) {
                return true;
              } else {
                return false;
              }
            },
          },
          {
            name: "id",
            type: "input",
            message: "What is your Intern's Id number?",
            validate: (id) => {
              if (id) {
                return true;
              } else {
                return false;
              }
            },
          },
          {
            name: "email",
            type: "input",
            message: "What is your Intern's email?",
            validate: (email) => {
              if (email) {
                return true;
              } else {
                return false;
              }
            },
          },
          {
            name: "school",
            type: "input",
            message: "What is your Intern's school name?",
            vaildate: (school) => {
              if (school) {
                return true;
              } else {
                return false;
              }
            },
          },
        ])
        .then((answers)) => {
          const intern = new Intern(

          answers.name
        answers.id,
      answers.email,)
      answers.school
    };
    teamArr.push(intern);
    addEmployee();
  })
   );
};

const addEmployee = () => {
  return (
    inquirer
      .prompt([
        {
          name: "employee",
          type: "list",
          message:
          "Confirm the Employee to insert or type done.",
        choices: ["Engineer", "Intern", "I am done with my team."],
        },
      ])
      .then((chose) => {
        switch (chosen.employee) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            startHtml();
        }
      })
  );
};

function startHtml(){
  const dom = generateHTML(teamArr);
  fs.writeFile("index.html", dom, function (err) {
    if (err) throw err;
    console.log("good job");
  });
}

function init() {
  addManager();
}

init();
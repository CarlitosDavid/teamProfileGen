const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const employee = require('./lib/employee');

const fs = require('fs');
const inquirer = require('inquirer');

const addManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the manager?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }
        else {
          console.log('please enter a manager');
          return false; 
        }
      }
    }
  ])
}

const addEmployee = () +> {
  console.log();
};

return inquirer.prompt ([
  {
    type: 'list',
    name: 'role', 
    message: "Choose your employee's role",
    choices: ['Engineer', 'Intern']
  },
  {
    type: 'input', 
    name: 'name', 
    message: "Employee's name?",
    validate: nameInput => {
      if (nameInput) {
        return true; 
      } else {
        console.log ('Require an employees name');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id', 
    message: "enter employee's ID.",
    validate: nameInput => {
    }
  }
])


const writeFile = data => {
  
}
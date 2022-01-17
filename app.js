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
const inquirer = require ("inquirer")
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const internal = require("stream");

function engineerQ(){
    console.log("Hello, please enter the Employee information below. We will start with your manager.")
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your ID Badge #?",
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What school do you attend?',
            name: 'school'
        },
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'No Other Employees'],
            message: 'Would you like to enter another Employee?',
            name: 'anotherEmployee'
        }
    ])
    .then((response) => {
        const internOne = new Engineer (response.name, response.id, response.email, response.school);
        console.log(internOne);
        if (response.anotherEmployee === 'Engineer'){
            engineerQ();
        } else if (response.anotherEmployee === 'Intern'){
            internQ();
        } else {
            return;
        }
    });
}


function engineerQ(){
    console.log("Hello, please enter the Employee information below. We will start with your manager.")
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your ID Badge #?",
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your Github account?',
            name: 'github'
        },
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'No Other Employees'],
            message: 'Would you like to enter another Employee?',
            name: 'anotherEmployee'
        }
    ])
    .then((response) => {
        const engineerOne = new Engineer (response.name, response.id, response.email, response.github);
        console.log(engineerOne);
        if (response.anotherEmployee === 'Engineer'){
            engineerQ();
        } else if (response.anotherEmployee === 'Intern'){
            internQ();
        } else {
            return;
        }
    });
}

function init(){
    console.log("Hello, please enter the Employee information below. We will start with your manager.")
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the name of your Company?",
            name: 'companyName'
        },
        {
            type: 'input',
            message: "What is your name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your ID Badge #?",
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your Office #?',
            name: 'oNumber'
        },
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'No Other Employees'],
            message: 'Would you like to enter another Employee?',
            name: 'anotherEmployee'
        }
    ])
    .then((response) => {
        const filename = `${response.companyName}.html`
        const managerOne = new Manager (response.name, response.id, response.email, response.oNumber);
        console.log(managerOne);
        if (response.anotherEmployee === 'Engineer'){
            engineerQ();
        } else if (response.anotherEmployee === 'Intern'){
            internQ();
        } else {
            return;
        }
    });
}

init();
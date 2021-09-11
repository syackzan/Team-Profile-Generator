const inquirer = require ("inquirer")
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const internal = require("stream");
const writeToFile = require("./dist/writeToFile");



function internQ(manager, engineerA, internA, filename, companyName){
    console.log("Hello, please enter the following Intern Information.")
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
        const intern = new Intern (response.name, response.id, response.email, response.school);
        internA.push(intern);
        if (response.anotherEmployee === 'Engineer'){
            engineerQ(manager, engineerA, internA, filename, companyName);
        } else if (response.anotherEmployee === 'Intern'){
            internQ(manager, engineerA, internA, filename, companyName);
        } else {
            writeToFile(manager, engineerA, internA, filename, companyName);
        }
    });
}


function engineerQ(manager, engineerA, internA, filename, companyName){
    console.log("Hello, please enter the following Engineer Information.")
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
        const engineer = new Engineer (response.name, response.id, response.email, response.github);
        engineerA.push(engineer);
        if (response.anotherEmployee === 'Engineer'){
            engineerQ(manager, engineerA, internA, filename, companyName);
        } else if (response.anotherEmployee === 'Intern'){
            internQ(manager, engineerA, internA, filename, companyName);
        } else {
            writeToFile(manager, engineerA, internA, filename, companyName);
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
        const filename = `${response.companyName}.html`;
        let engineerA = [];
        let internA = [];
        const companyName = response.companyName;
        const manager = new Manager (response.name, response.id, response.email, response.oNumber);
        if (response.anotherEmployee === 'Engineer'){
            engineerQ(manager, engineerA, internA, filename, companyName);
        } else if (response.anotherEmployee === 'Intern'){
            internQ(manager, engineerA, internA, filename, companyName);
        } else {
            writeToFile(manager, engineerA, internA, filename, companyName);
        }
    });
}

init();
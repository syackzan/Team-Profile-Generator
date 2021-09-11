const inquirer = require ("inquirer")
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const internal = require("stream");
let engineerA = [];
let internA = [];

function internQ(manager, engineerA, internA){
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
        const intern = new Intern (response.name, response.id, response.email, response.school);
        internA.push(intern);
        console.log(internintern);
        console.log(internA);
        if (response.anotherEmployee === 'Engineer'){
            engineerQ(manager, engineerA, internA);
        } else if (response.anotherEmployee === 'Intern'){
            internQ(manager, engineerA, internA);
        } else {
            return;
        }
    });
}


function engineerQ(manager, engineerA, internA){
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
        const engineer = new Engineer (response.name, response.id, response.email, response.github);
        engineerA.push(engineer);
        console.log(engineer);
        console.log(engineerA);
        console.log(engineerA[0].name)
        console.log(manager);
        if (response.anotherEmployee === 'Engineer'){
            engineerQ(manager, engineerA, internA);
        } else if (response.anotherEmployee === 'Intern'){
            internQ(manager, engineerA, internA);
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
        const manager = new Manager (response.name, response.id, response.email, response.oNumber);
        console.log(manager);
        if (response.anotherEmployee === 'Engineer'){
            engineerQ(manager);
        } else if (response.anotherEmployee === 'Intern'){
            internQ(manager);
        } else {
            writeToFile();
        }
    });
}

init();
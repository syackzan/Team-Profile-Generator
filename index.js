const inquirer = require ("inquirer")
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function init(){
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
            message: 'What is your email',
            name: 'email'
        },
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'No Other Employees'],
            message: 'Would you like to enter another Employee?'
        }
    ])
    .then((response) => {
        let filename = "employee.html"
        console.log(response);
    });
}
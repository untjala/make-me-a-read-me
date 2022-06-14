// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What does your project do?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Describe the installation process for your project: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'List any contributors to your project: ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What tests did you perform for your project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What liscense is your project under?',
        name: 'license',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

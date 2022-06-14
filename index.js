// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const utils = require('./utils/generateMarkdown')
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
        type: 'rawlist',
        message: 'What license is your project under?',
        name: 'license',
        choices: [
            'Apache',
            'BSD',
            'Common Development and Distribution',
            'Eclipse',
            'GNU',
            'MIT',
            'Mozilla Public License',
        ]
    },
];
inquirer.prompt(questions).then((answers) => {
    utils.generateMarkdown(answers)
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }
// fs.writeFileSync('./output/README.md', template);
// console.log('Done!')
// TODO: Create a function to initialize app
function init() { 
    // writeToFile();
}

// Function call to initialize app
init();

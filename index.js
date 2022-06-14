const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'How is your project used?',
        name: 'usage',
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
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log('Done!');
}
function init() {
    inquirer.prompt(questions)
        .then((answers) => writeToFile('./output/README.md', generateMarkdown(answers)))
}

// Function call to initialize app
init();

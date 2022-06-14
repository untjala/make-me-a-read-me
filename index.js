//Required packages for application functionality
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//Array to hold prompt questions and their labels
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
        message: 'Are you currently seeking testers for your project?',
        name: 'tests',
    },
    {
        type: 'rawlist',
        message: 'What license is your project under?',
        name: 'license',
        //Seperate choice array for the different licenses
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
//This function calls on fs to collect the file name and data to be sent to the README.md
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log('Done!');
}
//Init function to run questions and send them to the README in the output file once complete
function init() {
    inquirer.prompt(questions)
        .then((answers) => writeToFile('./output/README.md', generateMarkdown(answers)))
}

// Function call to initialize app
init();

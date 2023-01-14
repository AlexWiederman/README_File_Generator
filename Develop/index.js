// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = ['What is the projects title?', 'What is the description?', 'What is the installation instructions?',
    'What is the usage?', 'List your collaborators.', 'Are there any Tests?', 'Choose your License:', 'What is your Github username?', 'What is your email?'];
const names = ['title', 'description', 'install', 'usage', 'collab', 'tests', 'license', 'github', 'email']
const licenseList = ['Apache','GNU General Public v3.0', 'MIT']

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: names[0],
                message: questions[0],
            },
            {
                type: 'input',
                name: names[1],
                message: questions[1],
            },
            {
                type: 'input',
                name: names[2],
                message: questions[2],
            },
            {
                type: 'input',
                name: names[3],
                message: questions[3],
            },
            {
                type: 'input',
                name: names[4],
                message: questions[4],
            },
            {
                type: 'input',
                name: names[5],
                message: questions[5],
            },
            {
                type: 'list',
                name: names[6],
                message: questions[6],
                choices: licenseList
            },
            {
                type: 'input',
                name: names[7],
                message: questions[7],
            },
            {
                type: 'input',
                name: names[8],
                message: questions[8],
            },
        ])
}

// Function call to initialize app
init();

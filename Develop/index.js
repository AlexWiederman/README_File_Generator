// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Adding second javascript file
const generateMarkdown = require('./utils/generateMarkdown');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case licenseList[0]:
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break;
        case licenseList[1]:
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
            break;
            case licenseList[2]:
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
            break;
            case licenseList[3]:
            return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
            break;
            case licenseList[4]:
            return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
            break;
            case licenseList[5]:
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            break;
            case licenseList[6]:
            return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
            break;
            case licenseList[7]:
            return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            break;
            case licenseList[8]:
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
                }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case licenseList[0]:
            return 
            break;
        case licenseList[1]:
            return 
            break;
            case licenseList[2]:
            return 
            break;
            case licenseList[3]:
            return
            break;
            case licenseList[4]:
            return 
            break;
            case licenseList[5]:
            return 
            break;
            case licenseList[6]:
            return 
            break;
            case licenseList[7]:
            return 
            break;
            case licenseList[8]:
            return 
            break;
                }

}

// TODO: Create an array of questions for user input
const questions = ['What is the projects title?', 'What is the description?', 'What is the installation instructions?',
    'What is the usage?', 'List your collaborators.', 'What kind of tests are there?', 'Choose your License:', 'What are the Features?', 'What is your Github username?', 'What is your email?'];
const names = ['title', 'description', 'install', 'usage', 'collab', 'tests', 'license', 'features', 'github', 'email']
const licenseList = ['Apache', 'Boost Software License 1.0','BSD 3-Clause License','CC0','Eclipse Public License 1.0','GNU GPL v3','IBM Public License Version 1.0','The Unlicense', 'The MIT License']

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
            {
                type: 'input',
                name: names[9],
                message: questions[9],
            },
        ])
        .then((data) => {
            var license = {};
            if (data.license != "") {
                license.badge = renderLicenseBadge(data.license);
                license.link = renderLicenseLink(data.license);
            } else {
                license.badge = "";
                license.link = "";
            }

            file = generateMarkdown(license, data)
            fs.writeFile('README.md', file, (err) =>
                err ? console.log(err) : console.log('Successfully created README File!')
            );
        })

}

// TODO: Create a function to initialize app
function init() {
    // Run this function last
    data = writeToFile()
}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in

const { default: inquirer } = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # <Your-Project-Title>

## Description

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

## Credits

${data.credits}

## License

${data.license}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

 [shields.io](https://shields.io/). 

## Features

${data.features}

## How to Contribute

Contributor Covenant Code of Conduct

## Tests

${data.test}
`;


}

module.exports = generateMarkdown;

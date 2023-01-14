// TODO: Create a function that returns a license badge based on which license is passed in

const { default: inquirer } = require("inquirer");




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}



// TODO: Create a function to generate markdown for README
function generateMarkdown(license, data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#Badges)
- [Features](#Features)
- [Tests](#Tests)

## Installation
${data.install}
## Usage
${data.usage}
## Credits
${data.collab}
## License
${data.license}
## Badges

${license.badge}

## Features
${data.features}
## How to Contribute

Contributor Covenant Code of Conduct

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;

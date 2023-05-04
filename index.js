//Packages needed
const fs = require('fs');
const inquirer = require('inquirer');

//User input questions
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project Title',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message:
        'Provide a description explaining the what, why, and how of your project. Include screenshots as needed. Provide links to GitHub repositories and website, as needed.',
      name: 'description',
    },
    {
      type: 'input',
      message:
        'What are the steps required to install your project, if necessary?',
      name: 'installation',
    },
    {
      type: 'input',
      message:
        'Provide instructions and examples for use. List any languages and technologies used.',
      name: 'usage',
    },
    {
      type: 'input',
      message:
        'List your collaborators with links to GitHub, as well as links to tutorials, articles and websites etc., if any.',
      name: 'credits',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please select a license applicable to this project.',
      choices: [
        'MIT',
        'APACHE2.0',
        'Boost1.0',
        'MPL2.0',
        'BSD2',
        'BSD3',
        'none',
      ],
    },
    {
      type: 'input',
      message: 'Optional: Badges. Add any badges you may have.',
      name: 'badges',
    },
    {
      type: 'input',
      message:
        'Optional: Features. If your project has a lot of features, list them here.',
      name: 'features',
    },
    {
      type: 'input',
      message:
        'Optional: Contribute. If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
      name: 'contribute',
    },
    {
      type: 'input',
      message:
        'Optional: Tests. Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter your email',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Enter your GitHub name',
      name: 'github',
    },
  ])
  .then((response) => {
    const readMeContent = generateReadMe(response);
    fs.writeFile('README.md', readMeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('success!');
      }
    });
  });

//Function that returns a license badge based on which license is passed in.
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

//Function to generate markdown for README
function generateReadMe(response) {
  const readMeTemplate = `

${renderLicenseBadge(response.license)}

# ${response.projectTitle}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Testing](#testing)
* [Questions](#questions)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Credits
${response.credits}

## License
Licensed under the ${response.license} license.

## Badges
${response.badges}

## Features
${response.features}

## How to Contribute
${response.contribute}

## Tests
${response.tests}

## Questions
Please send your questions to: ${response.email} or visit [github/${
    response.github
  }](https://github.com/${response.github}).


`;
  return readMeTemplate;
}

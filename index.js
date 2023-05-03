const fs = require('fs');
const inquirer = require('inquirer');

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
        'Provide a short description explaining the what, why, and how of your project. Include links to GitHub, website, etc.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project, if necessary?',
      name: 'installation',
    },
    {
      type: 'input',
      message:
        'Provide instructions and examples for use. List any languages and technologies used. Include screenshots as needed.',
      name: 'usage',
    },
    {
      type: 'input',
      message:
        'List your collaborators with links to GitHub, as well as links to tutorials, articles and websites etc., if any.',
      name: 'credits',
    },
    {
      type: 'input',
      message: 'Add your license',
      name: 'license',
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
  ])
  .then((response) => {
    const readMeContent = generateReadMe(response);
    fs.writeFile('new-ReadMe.md', readMeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('success!');
      }
    });
  });

function generateReadMe(response) {
  const readMeTemplate = `
  🏆 🏆 🏆

# Project Title
${response.projectTitle}

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Credits
${response.credits}

## License
Licensed under ${response.license} license.

---

## Badges
${response.badges}

## Features
${response.features}

## How to Contribute
${response.contribute}

## Tests
${response.tests}


`;
  return readMeTemplate;
}

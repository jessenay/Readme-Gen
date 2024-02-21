

function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
    ${data.description}

    
## Installation
    ${data.installation}

## Usage
    ${data.usage}

## License
    ${renderLicenseBadge(data.license)}
    ${renderLicenseSection(data.license)}

## Contributing
    ${data.contributing}

## Tests
    ${data.tests}

## Questions
    If you have any questions, please feel free to contact me at ${data.email}. 
    You can also find me on GitHub as ${data.github} at (https://github.com/${data.github}).
    `;
}

function renderLicenseBadge(license) {
    if (!license) {
        return '';
    } else {
        return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
    }
}

function renderLicenseLink(license) {
    if (!license) {
        return '';
    } else {
        return `https://opensource.org/licenses/${license}`;
    }
}

function renderLicenseSection(license) {
    if (!license) {
        return '';
    } else {
        return `This is licensed under the [${license}]. See license link for more info -> (${renderLicenseLink(license)})`;
    }
}
module.exports = generateMarkdown;

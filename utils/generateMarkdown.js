// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
  case "MIT License":
    return "!License:(https://img.shields.io/badge/License-MIT-yellow.svg)";
  case "Apache License 2.0":
    return "!License:(https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  case "BSD 3-Clause License":
    return "!License:(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  case "Mozilla Public License 2.0":
    return "!License: MPL 2.0:(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
  default:
    return "";
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "(https://opensource.org/licenses/MIT)";
    case "Apache License 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3-Clause License":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Mozilla Public License 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license) {
      return `${renderLicenseBadge(license)}
      ${renderLicenseLink(license)}`
    } else {
      return ""
    }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table Of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Email](#email)
- [GitHub](#github)
- [Questions](#questions)

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Tests
${data.tests}
## Email
${data.email}
## GitHub
${data.github}

## Questions
If there are any questions contact me at ${data.email} or visit my GitHub profile: [${data.github}](${data.questions})
  
## license 

${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;

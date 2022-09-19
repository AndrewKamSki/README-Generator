// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributors}

  ## License

  ${data.license}

  ## Badges

  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

  ## Tests

  ${data.test}
  
  ## Questions

  If you would like to collaborate or have any questions feel free to contact me on my Github or email!
  ![My github](https://github.com/${data.github})
  My email: ${data.email}
  `;
  }

module.exports = generateMarkdown;

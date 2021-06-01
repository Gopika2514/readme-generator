// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No-license") {
    return `![](https://img.shields.io/badge/License-${license}-red)`
  }
  else {
    return '';
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No-license") {
    return `* [License](#license)`
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No-license") {
    return `## License
    
    This project is under the license ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## GitHub username  
  ${data.github}
  
  ## Email  
  ${data.email}
  
  ## Table of Content
  
  * [Description](#Description) 
  * [Installation](#Installation)
  * [Usage](#Usage) 
  * [Contribution](#Contribution)
  * [Test](#Test) 
 ${renderLicenseLink(data.license)};
  
  
  ## Description\ 
  ${data.description}
  
  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## Contribution 
  ${data.contribution}
  
  ## Test 
  ${data.test}
  
  ${renderLicenseSection(data.license)};
  
  
  
  ## How to run
    ${data.run}
  ## Application Functionality Demo
  [Demo link](${data.demo})
`
}

module.exports = generateMarkdown;

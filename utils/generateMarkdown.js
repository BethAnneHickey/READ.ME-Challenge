// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license  !=="none of the above"){
   return`
   ! [license](https://img.shields.io/badge/license-${license}-blue.svg)
   
   `;
  }
 return ""
 
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license  !=="none of the above"){
   return`
   \n*[license](#license)\n
   
   `;
 }
 return ""
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license  !=="none of the above"){
 return`
 ##License
 The project is licensed under: ${license}license
 `
  }
return ""
}

// TODO: Create a function to generate markdown for README

  function generateMarkdown(data) {
    return `# ${data.title}
    ## License:
    ${renderLicenseBadge(data.license)}
   ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contribution](#contribution)
   - [Testing](#testing)
   - [Additional Information](#addtional-information)
   
   ## Description:
   ${data.description}
   ## Installation:
   ${data.installation}
   ## Usage:
   ${data.usage}
   ${renderLicenseLink(data.license)}
   ## License:
   ${renderLicenseSection(data.license)}
   ## Testing:
   ${data.test}
   ## Contact Information:
   - Github: [${data.github}](https://github.com/${data.github}
   - Email: [${data.email}](mailto:user@example.com) `;
  
  }

`;
}

module.exports = generateMarkdown;

//used const to set if statements for badge choices, as well as a return statement to display the badge on the page.
const renderLicenseBadge = (type) => {
  let color;
  if (type === "Apache") color = "red";
  if (type === "BSD") color = "#669999";
  if (type === "Common Development and Distribution") color = "#cc9999";
  if (type === "Eclipse") color = "#ffcccc";
  if (type === "GNU") color = "	#cc3300";
  if (type === "MIT") color = "#3399cc";
  if (type === "Mozilla Public License") color = "#003300";

  return (
    `<img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" height="44"/>`
  );
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License
  ${renderLicenseBadge(data.license)}
### Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributing)
- [Tests](#tests)
- [License](#license)
- Contact (#github, #linkedin)

## Usage
${data.usage}
## Installation
${data.installation}
## Contributing
${data.contributing}
## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;

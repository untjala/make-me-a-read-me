//used const to set if statements for badge choices, as well as a return statement to display the badge on the page--alternative to using multiple functions
const renderLicenseBadge = (type) => {
  let color;
  if (type === "Apache") color = "red";
  if (type === "BSD") color = "blue";
  if (type === "Common Development and Distribution") color = "green";
  if (type === "Eclipse") color = "orange";
  if (type === "GNU") color = "yellow";
  if (type === "MIT") color = "pink";
  if (type === "Mozilla Public License") color = "gray";

  return (
    `<img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}"/>`
  );
};

// Pulls data from array and badge src to be displayed in README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

### Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Usage
${data.usage}

## Installation
${data.installation}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License 
The licesne used for this project was ${data.license}.

## Contact 
Contact me at https://github.com/${data.github} or ${data.email}.
`;
}

module.exports = generateMarkdown;

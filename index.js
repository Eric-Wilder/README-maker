const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([{
        type: "input",
        message: "Type project title",
        name: "title",
    },
    {
        type: "input",
        message: "Type project description",
        name: "describe"
    },
    {
        type: "input",
        message: "Type installation instructions",
        name: "install"
    },
    {
        type: "input",
        message: "Type usage instructions",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter license",
        name: "license"
    },
    {
        type: "input",
        message: "Enter contributing",
        name: "contribute"
    },
    {
        type: "input",
        message: "Tests?",
        name: "test"
    },
    {
        type: "input",
        message: "Enter email",
        name: "email"
    },
    {
        type: "input",
        message: "Enter GitHub",
        name: "github"
    }
    ])
    .then(function ({ title, describe, install, usage, license, contribute, tests, email, github }) {
        console.log(title, describe, install, usage, license, contribute, tests, email, github);
        const readMeString = `# ${title}
        ${describe}
        ## Installation
        ${install}
        ## Usage
        ${usage}
        ## License
        ${license}
        ## Contributing
        ${contribute}
        ## Tests
        ${tests}
        ## Questions?
        Please contact me here: ${email} or my GitHub: ${github}`;

        function writeFile(fileName, data) {
            fs.writeFile(fileName, data, err => {
                if (err) {
                    throw err;
                }
            });
        }
        writeFile("README.md", readMeString);

    });
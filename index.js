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
        const readMeString = `# README-maker
        <h1>${title}</h1>
        ${describe}
        <h2>Installation</h2>
        ${install}
        <h2>Usage</h2>
        ${usage}
        <h2>License</h2>
        ${license}
        <h2>Contributing</h2>
        ${contribute}
        <h2>Tests</h2>
        ${tests}
        <h2>Questions?</h2>
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
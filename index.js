// TODO: Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from "inquirer";
import fs from "fs";
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'name of project',
            Message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            Message: 'What describes your project?'
        },
        {
            type: 'input',
            name: 'installation',
            Message: 'What needs to be installed?'
        },
        {
            type: 'input',
            name: 'Usage',
            Message:'What is your project used for?'
        },
        {
            type: 'input',
            name:'Contribution',
            Message: 'What is needed for others to contribute?'
        },
        {
            type:'input',
            name: 'Tests',
            Message: 'Provide test examples here.'
        },
        {
            type:'list',
            name:'license',
            Message:'Please select which license is required.',
            choices: ['MIT License', 'Apache License 2.0', 'BSD-2-Clause', 'MPL-2.0']
        },
        {
            type: 'input',
            name: 'github',
            Message:'Enter Your GitHub username.'
        },
        {
            type:'input',
            name:'email',
            Message:'Enter your email here.'
        },

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('error writing to file');
        } else {
            console.log(`Your README file has been written!`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
    const README = generateMarkdown(data);
    writeToFile("README.md", README);
});
}
    
// Function call to initialize app
init();

// TODO: Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from "inquirer";
import colors from "colors";
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
            Choices: ['MIT License', 'Apache License 2.0', 'BSD-2-Clause', 'MPL-2.0']
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
    fs.writeFile
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

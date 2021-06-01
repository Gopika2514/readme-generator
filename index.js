// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type :'input',
        name:'title',
        message:"What is your project's name?"
    },
    {
        type :'input',
        name:'github',
        message:"What is your github username?"
    },
    {
        type :'input',
        name:'email',
        message:"What is your email address?"

    },
    {
        type :'input',
        name :'description',
        message:"Give a description"
    },
    {
        type :'input',
        name :'installation',
        message:"How do you install?"
    },
    {
        type :'input',
        name :'usage',
        message:"How do you use?"
    },
    {
        type :'input',
        name :'contribution',
        message:"Rules for contribute?"
    },
    {
        type :'input',
        name :'test',
        message:"This is the instruction",
    },
    {
        type: 'list',
        name: 'license',
        message: "What license are you using ?",
        choices: ['MIT','APACHE','ABC','EFG','No-license']
    },
    {
        type :'input',
        name :'run',
        message:"How do you run your application?"

    },
    {
        type :'input',
        name :'demo',
        message:"How is your application demo link?"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync( path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then ((response) => {
        console.log('your readMe is being created.......');
        writeToFile('README.md',generateMarkdown({...response }))
    })

}


// Function call to initialize app
init();

const fs = require ("fs");
// const path = require ("path");
const inquirer = require ("inquirer");
const generateMarkdown = require ("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the URL to your project?",
        name: "url"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "use"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribute"
    },
];

function writeToFile(fileName, data) {
}

function init() {

}

init();

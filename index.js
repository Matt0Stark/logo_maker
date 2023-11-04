const inquirer = require("inquirer");
const svg = require("./lib/svg");
const {Circle, Triangle, Square} = require("./lib/shapes");
const fs = require("fs");

// fancy const fs from tutor, keeping for further exploration
// const {writeFile} = require("fs/promises")

class Init{
    run(){
        return inquirer
        .prompt([
          {
            type: 'input',
            name: 'logoText',
            message: 'Enter up to three letters for the logo text',
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for the logo text',
          },
          {
            type: 'list',
            name: 'logoShape',
            message: 'Choose a shape for the logo text background',
            choices: [
              "Circle",
              "Triangle",
              "Square"
            ]
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color for the backgroud shape',
          },
    
        ])
        .then







        
        // .catch((err) => {
        //   console.log(err);
        //   console.log('Oops. Something went wrong.');
    }
}


Init.run();
const inquirer = require("inquirer");
const svg = require("./lib/svg");
const {Circle, Triangle, Square} = require("./lib/shapes");

const {writeFile} = require("fs/promises")

class Init{
    run(){
        return inquirer
        .prompt([
          {
            type: 'input',
            name: 'text',
            message: 'enter the logo text',
          },




    
        ]).then
    }
}


Init.run();
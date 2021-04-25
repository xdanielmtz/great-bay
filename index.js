const inquirer = require("inquirer");

const init = () => {
    inquirer.prompt([
        {
             type: "list",
             name: "selection",
             message:"Welcome to great bay! Do you want to post an item or make a bid?",
             choices: ['Post', 'Bid'],
        }
    ]).then(response => {
        if (response.selection === )
    })
}
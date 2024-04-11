#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 15000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
//   12345  ===  1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amaountAns = await inquirer.prompt([
            {
                name: "amaount",
                message: "enter your amaount",
                type: "number",
            }
        ]);
        // =, -=, +=
        myBalance -= amaountAns.amaount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("yourbalance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}

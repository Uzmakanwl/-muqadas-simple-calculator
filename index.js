import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter secound number", type: "number", name: "secoundNumber" },
    {
        message: "select one of the opreaters to perform operation ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplicaton", "Division"],
    },
]);
if (answer.operater === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operater === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operater === "Multiplicaton") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operater === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select Valid Operation.");
}

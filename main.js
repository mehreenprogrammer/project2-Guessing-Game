import inquirer from "inquirer";
let systemgenerateno = Math.floor(Math.random() * 10);
let answer = await inquirer.prompt({
    type: "number",
    name: "userguess",
    message: "guess number between 1 to 10"
});
console.log(`userguess ${answer.userguess} systemgenerateno ${systemgenerateno}`);
if (answer.userguess === systemgenerateno) {
    console.log("yay your guess is right");
}
else {
    console.log(`opps correct number is ${systemgenerateno} please try again`);
}
;

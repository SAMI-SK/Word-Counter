import inquirer from "inquirer";

const userAns:{
    sentence: string
}= await inquirer.prompt(
    [
    {
        name:"sentence",
        type: "input",
        message: "Enter the sentence to count the words:"
    }
    ]
)
// trim left/right spaces ko khatam krta hai/ split convert data in Array form.
const words = userAns.sentence.trim().split(" ")

console.log(words);

console.log(`your sentence word count is ${words.length}`);

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoarr:string[]=["Ahmed","Ali"]

async function createtodo (todoarr:string[]){
    let answer= await inquirer.prompt(
    {
        

name:"todo",
type:"list",
message:("Please select an option: "),
choices:["add","replace","delete","exit"]

})


if(answer.todo=="add"){
let addTodo=await inquirer.prompt({
name:"todoAdd",
type:"input",
message:"Please add an item: "
})

    todoarr.push(addTodo.todoAdd)
    console.log(todoarr)
    
}

else if(answer.todo=="replace"){

    let updateTodo=await inquirer.prompt({
        name:"todoReplace",
        type:"list",
        message:"Which item would you like to replace?",
        choices:todoarr.map(item=>item)
    })


let addTodo=await inquirer.prompt({
    name:"todoAdd",
    type:"input",
    message:"Please add an item: "
})
let newTodos = todoarr.filter(val=>val!== updateTodo.todo)
todoarr=[...newTodos,addTodo.todoAdd]
console.log(todoarr)
}

else if(answer.todo== "delete"){
let deleteTodo = await inquirer.prompt({

name:"todoDelete",
type:"list",
message:"Which item would you like to delete? ",
choices:todoarr.map(item=>item)
})
let newTodos = todoarr.filter(val=>val!== deleteTodo.todo)
todoarr=[...newTodos,deleteTodo.todoDelete]
console.log(todoarr)
}
else if (answer.todo=="exit"){

console.log(chalk.bgGreenBright.italic.yellowBright
    ("Thankyou for using this application"))
   
   
   }

}


createtodo(todoarr)






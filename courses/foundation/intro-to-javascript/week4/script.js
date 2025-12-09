let userName = "";
let todos = [];

function getReply(command) {

    // NAME ---
    if (command.startsWith("Hello my name is ")) {
        userName = command.replace("Hello my name is ", "");
        console.log("Nice to meet you " + userName);
        return;
    }

    if (command === "What is my name") {
        console.log("Your name is " + userName);
        return;
    }

    // ADD TODO ---
    if (command.startsWith("Add ") && command.includes(" to my todo")) {
        let item = command.replace("Add ", "").replace(" to my todo", "");
        todos.push(item);
        console.log(item + " added to your todo");
        return;
    }

    // REMOVE TODO ---
    if (command.startsWith("Remove ") && command.includes(" from my todo")) {
        let item = command.replace("Remove ", "").replace(" from my todo", "");
        let index = todos.indexOf(item);
        if (index !== -1) {
            todos.splice(index, 1);
            console.log("Removed " + item + " from your todo");
        } else {
            console.log(item + " is not in your todo list");
        }
        return;
    }

    // TODO LIST ---
    if (command.startsWith("What is on my todo")) {
        if (todos.length === 0) {
            console.log("Your todo list is empty");
        } else {
            console.log("You have " + todos.length + " todos: " + todos.join(" and "));
        }
        return;
    }

    // DATE ---
    if (command === "What day is it today?") {
        const today = new Date();
        const date = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        console.log(date + ". of " + month + ". of " + year);
        return;
    }

    // SIMPLE MATH ---
    if (command.toLowerCase().startsWith("what is")) {
        let expression = command.replace("What is", "");

        const operators = ["+", "-", "*", "/"];
        let operator = null;
        for (let i = 0; i < operators.length; i++) {
            if (expression.includes(` ${operators[i]} `)) {
                operator = operators[i];
                break;
            }
        }

        let [num1, num2] = expression.split(` ${operator} `).map(Number);

        let result;
        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            result = num1 / num2;
        }

        console.log(`${command} = ${result}`);
        return;
    }

    // TIMER ---
    if (command.startsWith("Set a timer for ")) {
        let minutes = command
            .replace("Set a timer for ", "")
            .replace(" minutes", "");

        minutes = Number(minutes);

        const seconds = minutes * 60;
        const milliseconds = seconds * 1000;

        setTimeout(function () {
            console.log("Timer done");
        }, milliseconds);

        console.log("Timer set for " + minutes + " minutes");

        return;
    }

    // UNKNOWN ---
    console.log(`I don't get it! '${command}'`);
}

getReply("Hello my name is Benjamin");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("What is 3 + 3");
getReply("What is 10 + 2");
getReply("What is 7 * 8");
getReply("Set a timer for 1 minutes");

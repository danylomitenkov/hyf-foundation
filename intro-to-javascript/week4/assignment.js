// _________________________________________________________________
// Part 2: Voice Assistant

let savedName = "";
const todos = [];

function getReply(command) {
  if (!command) {
    return "Please give a command";
  }

  if (command.startsWith("Hello my name is ")) {
    const name = command.slice(17);

    if (savedName === name) {
      return `You have already introduced yourself as ${savedName}!`;
    }

    savedName = name;
    return `Nice to meet you ${savedName}`;
  }

  if (command === "What is my name?" || command === "What is my name") {
    if (savedName === "") {
      return "You haven't told me your name yet!";
    }
    return `Your name is ${savedName}`;
  }

  if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    const todoItem = command.slice(4, command.length - 11);
    todos.push(todoItem);
    return `${todoItem} added to your todo`;
  }

  if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
    const todoItem = command.slice(7, command.length - 13);
    const index = todos.indexOf(todoItem);

    if (index !== -1) {
      todos.splice(index, 1);
      return `Removed ${todoItem} from your todo`;
    } else {
      return `${todoItem} is not on your todo list`;
    }
  }

  if (command === "What is on my todo?" || command === "What is on my todo") {
    if (todos.length === 0) {
      return "You have no todos on your list";
    }
    if (todos.length === 1) {
      return `You have 1 todo - ${todos[0]}`;
    }

    let listText = "";
    for (let i = 0; i < todos.length; i++) {
      if (i === 0) {
        listText += todos[i];
      } else if (i === todos.length - 1) {
        listText += ` and ${todos[i]}`;
      } else {
        listText += `, ${todos[i]}`;
      }
    }
    return `You have ${todos.length} todos - ${listText}`;
  }

  if (
    command === "What day is it today?" ||
    command === "What day is it today"
  ) {
    const today = new Date();
    const day = today.getDate();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    return `${day}. of ${month} ${year}`;
  }

  if (command.toLowerCase().startsWith("what is ")) {
    const words = command.split(" ");
    const num1 = Number(words[2]);
    const operator = words[3];
    let num2Str = words[4];

    if (num2Str && num2Str.endsWith("?")) {
      num2Str = num2Str.slice(0, -1);
    }
    const num2 = Number(num2Str);

    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      return num1 / num2;
    }
  }

  if (command.startsWith("Set a timer for ")) {
    const words = command.split(" ");
    const amount = Number(words[4]);
    const unit = words[5];

    let delay = amount * 60 * 1000;
    if (unit && unit.startsWith("sec")) {
      delay = amount * 1000;
    }

    setTimeout(function () {
      console.log("Timer done");
    }, delay);

    return `Timer set for ${amount} ${unit}`;
  }

  if (
    command.toLowerCase() === "tell me a joke" ||
    command.toLowerCase() === "tell me a joke?"
  ) {
    return "Why do programmers prefer dark mode? Because light attracts bugs!";
  }

  if (command.toLowerCase() === "flip a coin") {
    if (Math.random() > 0.5) {
      return "Heads!";
    } else {
      return "Tails!";
    }
  }

  return "Sorry, I don't know that command.";
}

console.log("\n--- Voice Assistant: Tests ---");

console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));

console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Add coding homework to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove skydiving from my todo"));

console.log(getReply("What day is it today?"));

console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("what is 100 - 25"));
console.log(getReply("what is 20 / 4"));

console.log(getReply("Tell me a joke"));
console.log(getReply("Flip a coin"));

console.log(getReply("Set a timer for 1 second"));

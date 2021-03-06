/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var stringArray = text.split(/(\s+)/);
  console.log(stringArray);
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (stringArray[0] == "hello") {
    hello(stringArray[2]);
  } else if (text == "help\n") {
    help();
  } else if (text == "tasks\n") {
    console.log(taskFunction());
  } else if (stringArray[0] == "add") {
    if (stringArray[2] != "") addTask(stringArray[2]);
  } else if (stringArray[0] == "remove") {
    if (stringArray[2] != " ") removeTask(stringArray[2]);
    else console.log("error");
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name) {
  if (name == "") {
    console.log("hello!");
  } else console.log("hello " + name + "!");
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Bassem kreidly");

//list all the commands by "help" word
function help() {
  console.log("help");
  console.log("write 'hello' to say hello!");
  console.log(" write 'quit' of 'exit' to get out of the program");
  console.log("list");
  console.log("add");
  console.log("remove");
}

let tasks = [
  "read the question",
  "read it again",
  "solve them sequencially",
  "let google be your first assistant"
];

function taskFunction() {
  for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
  }
}

function addTask(x) {
  tasks.push(x);
  taskFunction();
}

function removeTask(y) {
  let z = parseInt(y);
  console.log(tasks.length);
  if (z < tasks.length) {
    tasks.splice(z, 1);
  }
  taskFunction();
}

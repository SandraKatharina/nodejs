let readlineSync = require("readline-sync");

let name = readlineSync.question("What's up? What's your name? ");
console.log("hello, " + name + ", nice to meet you!");

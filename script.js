// Not really my first js code lol.

console.log("Hello, World!"); 
console.log("This is a sample JavaScript file.");
console.log("I like pizzas a lot haha :D");

// This is just a test file to do whatever I want :P

window.alert("What's up?"); // Just for fun :D
document.getElementById("words").innerText = "I love JavaScript!";
document.getElementById("para").innerText = "JavaScript is a versatile programming language used for web development.";

// Variables

let name = "Alice";
const age = 30;
var city = "New York";

console.log(name, age, city);
console.log(`My name is ${name}, and I am ${age}, and I am from ${city}`);

console.log("This is the end of the file.");

document.getElementById("h1").textContent = "I am learning JavaScript!";
document.getElementById("p1").textContent = "JavaScript is fun and powerful.";

// Agumented arithmetic operators and arithmetic operators

let x = 10;
console.log(x);

x += 5; // x = x + 5
console.log(x);

x -= 3; // x = x - 3
console.log(x);

x *= 2; // x = x * 2
console.log(x);

x /= 4; // x = x / 4
console.log(x);

x %= 3; // x = x % 3
console.log(x);

// Prompting user for input in a easy manner

let firstName = window.prompt("Enter your first name:");
document.getElementById("name").textContent = `Hello, ${firstName}! Welcome to JavaScript programming.`;

console.log(`Hello, ${firstName}! Welcome to JavaScript programming.`);

// Prompting user for input in a pro manner
let username;
document.getElementById("submit").onclick = function() {
    username = document.getElementById("username").value;
    document.getElementById("greeting").textContent = `Hello, ${username}`
}

// Type conversion

let num = window.prompt("Enter a number:");
num = Number(num+1); // Convert string to number
console.log(`The number you entered is: ${num}`);
console.log(`The type of the variable is: ${typeof num}`);

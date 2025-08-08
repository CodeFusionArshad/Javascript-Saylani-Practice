let studentNames = [];
let studentNamesObj = new Array();
let stringsArray = ["Ali", "Zara", "Ahmed"];
let numbersArray = [10, 20, 30, 40];
let booleanArray = [true, false, true];
let mixedArray = ["Ali", 25, true, 3.14];


let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.writeln("<h3>Qualifications in Pakistan:</h3>");
for (let i = 0; i < qualifications.length; i++) {
    document.writeln((i+1) + ") " + qualifications[i] + "<br>");
}

let names = ["Ali", "Zara", "Ahmed"];
let scores = [400, 350, 450];
let totalMarks = 500;

for (let i = 0; i < names.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    document.writeln(`Score of ${names[i]} is ${scores[i]}. Percentage: ${percentage}% <br>`);
}


let colors = ["Red", "Green", "Blue"];
document.writeln(colors + "<br>");

// a
let addStart = prompt("Color to add at start:");
colors.unshift(addStart);
document.writeln(colors + "<br>");

// b
let addEnd = prompt("Color to add at end:");
colors.push(addEnd);
document.writeln(colors + "<br>");

// c
colors.unshift("Yellow", "Purple");
document.writeln(colors + "<br>");

// d
colors.shift();
document.writeln(colors + "<br>");

// e
colors.pop();
document.writeln(colors + "<br>");

// f
let indexAdd = parseInt(prompt("Enter index to add color:"));
let colorNameAdd = prompt("Enter color name:");
colors.splice(indexAdd, 0, colorNameAdd);
document.writeln(colors + "<br>");

// g
let indexDel = parseInt(prompt("Enter index to delete color(s):"));
let numDel = parseInt(prompt("How many colors to delete?"));
colors.splice(indexDel, numDel);
document.writeln(colors + "<br>");

let scoresArray = [320, 230, 480, 120];
scoresArray.sort((a, b) => a - b);
document.writeln("Sorted Scores: " + scoresArray);

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(1, 4);
document.writeln("Selected Cities: " + selectedCities);


let arr = ["This", "is", "my", "cat"];
let singleString = arr.join(" ");
document.writeln(singleString);

let fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");
fifo.push("Monitor");

document.writeln("Out: " + fifo.shift() + "<br>");
document.writeln("Out: " + fifo.shift() + "<br>");
document.writeln("Out: " + fifo.shift() + "<br>");
document.writeln("Out: " + fifo.shift() + "<br>");

let lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");
lifo.push("Monitor");

document.writeln("Out: " + lifo.pop() + "<br>");
document.writeln("Out: " + lifo.pop() + "<br>");
document.writeln("Out: " + lifo.pop() + "<br>");
document.writeln("Out: " + lifo.pop() + "<br>");

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.writeln("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.writeln(`<option>${phoneManufacturers[i]}</option>`);
}
document.writeln("</select>");

let multiArray = [[], [], []];
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

let tableNumber = parseInt(prompt("Enter table number:"));
let tableLength = parseInt(prompt("Enter table length:"));

document.writeln(`<h3>Table of ${tableNumber}</h3>`);
for (let i = 1; i <= tableLength; i++) {
    document.writeln(`${tableNumber} x ${i} = ${tableNumber * i} <br>`);
}

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

// a. Counting
document.write("<h3>Counting:</h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

// b. Reverse Counting
document.write("<h3>Reverse Counting:</h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

// c. Even
document.write("<h3>Even:</h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

// d. Odd
document.write("<h3>Odd:</h3>");
for (let i = 1; i < 20; i += 2) {
    document.write(i + ", ");
}

// e. Series with 'k'
document.write("<h3>Series:</h3>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}

let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
let userSearch = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();

if (bakery.includes(userSearch)) {
    alert(userSearch + " is available at index " + bakery.indexOf(userSearch) + " in our bakery.");
} else {
    alert("We are sorry, " + userSearch + " is not available in our bakery.");
}

let A = [24, 53, 78, 91, 12];
let largest = Math.max(...A);

document.write("Array items: " + A + "<br>");
document.write("The largest number is " + largest);

let B = [24, 53, 78, 91, 12];
let smallest = Math.min(...B);

document.write("Array items: " + B + "<br>");
document.write("The smallest number is " + smallest);

for (let i = 5; i <= 100; i += 5) {
    document.write(i + ", ");
}

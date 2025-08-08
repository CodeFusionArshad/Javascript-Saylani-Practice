let city = prompt("Enter your city name:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}


let gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am");
}

let signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):");

if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
}


let fuel = parseFloat(prompt("Enter remaining fuel in litres:"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true"); // Yes
}

// b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true"); // No
}

// c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true"); // No
}
if (c === 13) {
    alert("condition 2 is true"); // Yes
}
if (++c < 14) {
    alert("condition 3 is true"); // No
}
if (c === 14) {
    alert("condition 4 is true"); // Yes
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals"); // Yes
}

// e
if (true) {
    alert("True"); // Yes
}
if (false) {
    alert("False"); // No
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat"); // Yes
}


let sub1 = parseInt(prompt("Enter marks of subject 1:"));
let sub2 = parseInt(prompt("Enter marks of subject 2:"));
let sub3 = parseInt(prompt("Enter marks of subject 3:"));
let totalMarks = parseInt(prompt("Enter total marks:"));

let obtained = sub1 + sub2 + sub3;
let percentage = (obtained / totalMarks) * 100;
let grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write(`<h3>Total Marks: ${totalMarks}</h3>`);
document.write(`<h3>Marks Obtained: ${obtained}</h3>`);
document.write(`<h3>Percentage: ${percentage}%</h3>`);
document.write(`<h3>Grade: ${grade}</h3>`);
document.write(`<h3>Remarks: ${remarks}</h3>`);


let secretNumber = 7; // 1-10
let guess = parseInt(prompt("Guess the secret number (1-10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}


let num = parseInt(prompt("Enter a number:"));

if (num % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}


let num2_check = parseInt(prompt("Enter a number:"));

if (num2_check % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}

let number2 = parseInt(prompt("Enter a number:"));

if (number2 % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}


let number_even_odd = parseInt(prompt("Enter a number:"));

if (number_even_odd % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}


let temp = parseInt(prompt("Enter temperature:"));

if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}


let firstNum = parseFloat(prompt("Enter first number:"));
let secondNum = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");
let result;

if (operation === "+") {
    result = firstNum + secondNum;
} else if (operation === "-") {
    result = firstNum - secondNum;
} else if (operation === "*") {
    result = firstNum * secondNum;
} else if (operation === "/") {
    result = firstNum / secondNum;
} else if (operation === "%") {
    result = firstNum % secondNum;
} else {
    result = "Invalid operation";
}

alert(`Result: ${result}`);


let char = prompt("Enter a character (number or letter):");

let ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    alert("It is a number");
} else if (ascii >= 65 && ascii <= 90) {
    alert("It is an uppercase letter");
} else if (ascii >= 97 && ascii <= 122) {
    alert("It is a lowercase letter");
} else {
    alert("Invalid input");
}


let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    alert(`${num1} is larger`);
} else if (num2 > num1) {
    alert(`${num2} is larger`);
} else {
    alert("Both numbers are equal");
}


let number_sign = parseFloat(prompt("Enter a number:"));

if (number_sign > 0) {
    alert("Positive number");
} else if (number_sign < 0) {
    alert("Negative number");
} else {
    alert("Zero");
}

let charInput = prompt("Enter a single character:").toLowerCase();

if (charInput === "a" || charInput === "e" || charInput === "i" || charInput === "o" || charInput === "u") {
    alert(true);
} else {
    alert(false);
}

let correctPassword = "abc123";
let userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}


var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert(greeting);


let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

if (time >= 0 && time < 1200) {
    alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
} else {
    alert("Invalid time format");
}

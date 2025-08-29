// Q1: Positive number - round, floor, ceil
var num = +prompt("Enter a positive number:");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");

// Q2: Negative floating number - round, floor, ceil
var num = +prompt("Enter a negative floating-point number:");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");

// Q3: Absolute value
var num = +prompt("Enter a number (positive or negative):");
var absValue = Math.abs(num);
document.write("The absolute value of " + num + " is " + absValue + "<br>");

// Q4: Dice roll (1-6)
var dice = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + dice + "<br>");

// Q5: Coin toss (Heads/Tails)
var toss = Math.random();
var result = toss < 0.5 ? "Heads" : "Tails";
document.write("Random coin value: " + result + "<br>");

// Q6: Random number 1-100
var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNum + "<br>");

// Q7: Parse user weight
var weight = prompt("Enter your weight (e.g., 50, 50.2kgs, etc.):");
var parsedWeight = parseFloat(weight);
document.write("Your weight is: " + parsedWeight + " kilograms<br>");

// Q8: Guess the secret number (1-10)
var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Guess a number between 1 and 10:");
if (userGuess === secretNum) {
    alert("🎉 Congratulations! You guessed it right! The secret number was " + secretNum);
} else {
    alert("Sorry! Wrong guess. The secret number was " + secretNum);
}
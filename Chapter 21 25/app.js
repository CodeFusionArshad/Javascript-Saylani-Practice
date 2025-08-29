var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");

var phone = prompt("Enter your favorite mobile phone model:");
document.write("My favorite phone is: " + phone + "<br>");

document.write("Length of string: " + phone.length);

var word = "Pakistani";
var index = word.indexOf("n");

document.write("String: Pakistani<br>");
document.write("Index of 'n': " + index);

var text = "Hello World";
var lastIndex = text.lastIndexOf("l");

document.write("String: Hello World<br>");
document.write("Last index of 'l': " + lastIndex);

var word = "Pakistani";
var char = word.charAt(3);

document.write("String: Pakistani<br>");
document.write("Character at index 3: " + char);

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "! Welcome!");

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("Original word: " + city + "<br>");
document.write("After replacement: " + newCity);

var message =
  "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Original message: " + message + "<br>");
document.write("After replacement: " + newMessage);

var str = "472";
var num = parseInt(str);
document.write("String: " + str + " (Type: " + typeof str + ")<br>");
document.write("Number: " + num + " (Type: " + typeof num + ")");

var userInput = prompt("Enter any text:");
var upperText = userInput.toUpperCase();
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperText);

var input = prompt("Enter a sentence:");
var words = input.toLowerCase().split(" ");

for (var i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
var titleCase = words.join(" ");

document.write("Input: " + input + "<br>");
document.write("Title case: " + titleCase);

var num = 35.36;
var str = num.toString();
var cleanStr = str.replace(".", "");

document.write("Number: " + num + "<br>");
document.write("After removing dot: " + cleanStr);

var username = prompt("Enter your username (no special symbols [@ . , !]):");
var isValid = true;

for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);
  if (
    charCode === 64 ||
    charCode === 46 ||
    charCode === 44 ||
    charCode === 33
  ) {
    isValid = false;
    break;
  }
}

if (!isValid) {
  alert("Please enter a valid username. No '@', '.', ',', or '!' allowed.");
} else {
  alert("Valid username: " + username);
}

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What do you want to search?");
var lowerInput = userInput.toLowerCase();
var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i] === lowerInput) {
    found = true;
    break;
  }
}

if (found) {
  alert(
    "Yes, '" + userInput + "' is available at index " + A.indexOf(lowerInput)
  );
} else {
  alert("Sorry, '" + userInput + "' is not available in our bakery.");
}

var password = prompt(
  "Enter a password (must be 6+ chars, start with letter, and contain letters & numbers):"
);

var hasAlpha = /[a-zA-Z]/.test(password);
var hasNum = /[0-9]/.test(password);

var startsWithLetter = /^[a-zA-Z]/.test(password);
var isLongEnough = password.length >= 6;

if (hasAlpha && hasNum && startsWithLetter && isLongEnough) {
  alert("Valid password!");
} else {
  alert("Invalid password! Please follow the rules.");
}

var university = "University of Karachi";
var arr = university.split("");

document.write("Each character:<br>");
for (var i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
}

var input = prompt("Enter any text:");
var lastChar = input.charAt(input.length - 1);

document.write("User input: " + input + "<br>");
document.write("Last character: " + lastChar);


var str = "The quick brown fox jumps over the lazy dog";
var lowerStr = str.toLowerCase();
var words = lowerStr.split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

document.write("Text: " + str + "<br>");
document.write("Occurrences of 'the': " + count);
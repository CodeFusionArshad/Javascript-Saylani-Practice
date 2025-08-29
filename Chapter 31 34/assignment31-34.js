// Q1: Display current date and time
document.write("Current date and time: " + new Date() + "<br>");

// Q2: Alert current month in words (e.g., December)
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = new Date().getMonth();
alert("Current month: " + months[currentMonth]);

// Q3: Alert first 3 letters of the current day (e.g., Sun)
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = new Date().getDay();
alert("Today is: " + days[currentDay]);

// Q4: Display "It’s Fun day" if Saturday or Sunday
var day = new Date().getDay();
if (day === 0 || day === 6) {
    document.write("It’s Fun day<br>");
}

// Q5: "First fifteen days of the month" or "Last days of the month"
var date = new Date().getDate();
if (date < 16) {
    document.write("First fifteen days of the month<br>");
} else {
    document.write("Last days of the month<br>");
}

// Q6: Minutes since midnight, Jan 1, 1970
var totalMs = new Date().getTime();
var totalMin = totalMs / (1000 * 60);
document.write("Minutes since Jan 1, 1970: " + totalMin + "<br>");

// Q7: Alert "It's AM" or "It's PM"
var hour = new Date().getHours();
if (hour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// Q8: Date object for last day of last month of 2020
var laterDate = new Date("December 31, 2020");
document.write("Later date: " + laterDate + "<br>");

// Q9: Days past since 1st Ramadan (June 18, 2015)
var ramadanStart = new Date("June 18, 2015");
var today = new Date();
var diffMs = today - ramadanStart;
var diffDays = diffMs / (1000 * 60 * 60 * 24);
alert("Days since 1st Ramadan (June 18, 2015): " + Math.floor(diffDays));

// Q10: Seconds elapsed between reference date and start of 2015
var start2015 = new Date("January 1, 2015");
var refDate = new Date();
var secElapsed = (refDate - start2015) / 1000;
document.write("Seconds elapsed since Jan 1, 2015: " + secElapsed + "<br>");

// Q11: Get current hours, reset 1 hour ahead, display date
var dateObj = new Date();
var currentHour = dateObj.getHours();
dateObj.setHours(currentHour + 1);
document.write("Date after adding 1 hour: " + dateObj + "<br>");

// Q12: Alert date 100 years back
var pastDate = new Date();
pastDate.setFullYear(pastDate.getFullYear() - 100);
alert("100 years back: " + pastDate);

// Q13: Calculate and display birth year from user age
var age = +prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear + "<br>");

// Q14: Generate K-Electric bill
var customerName = "ABC Customer";
var currentMonth = "February";
var units = 410;
var chargesPerUnit = 28.5;
var lateSurcharge = 350;

var netAmount = units * chargesPerUnit;
var grossAmount = netAmount + lateSurcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + currentMonth + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + lateSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2) + "<br>");
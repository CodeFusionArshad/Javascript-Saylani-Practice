var num1 = 10;
    var num2 = 20;
 
  var sum = num1 + num2;
  document.write("The sum of " + num1 + " and " + num2 + " is " + sum + ".");

var num1 = 20;
    var num2 = 5;

     var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;
    var remainder = num1 % num2;
    
    document.write("<h2>Arithmetic Operations:</h2>");
    document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");
    document.write("Subtraction of " + num2 + " from " + num1 + " is " + difference + "<br>");
    document.write("Multiplication of " + num1 + " and " + num2 + " is " + product + "<br>");
    document.write("Division of " + num1 + " by " + num2 + " is " + quotient + "<br>");
    document.write("Modulus of " + num1 + " % " + num2 + " is " + remainder + "<br>");



  var number = 7; // Change this to any number you want
    document.write("<h2>Multiplication Table of " + number + "</h2>");

    for (var i = 1; i <= 10; i++) {
        document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }   

 var priceItem1 = 500;
  var priceItem2 = 300;
  var quantityItem1 = 3;
  var quantityItem2 = 2;
  var shippingCharges = 100;
  
  var totalCostItem1 = priceItem1 * quantityItem1;
  var totalCostItem2 = priceItem2 * quantityItem2;  

      // Calculate overall total cost
    var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;
    document.write("<h1>Shopping Cart Receipt</h1>");
    document.write("Price of item 1: " + priceItem1 + " PKR<br>");
    document.write("Quantity of item 1: " + quantityItem1 + "<br>");
    document.write("Price of item 2: " + priceItem2 + " PKR<br>");
    document.write("Quantity of item 2: " + quantityItem2 + "<br>");
    document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");

    document.write("Total cost of item 1: " + totalCostItem1 + " PKR<br>");
    document.write("Total cost of item 2: " + totalCostItem2 + " PKR<br><br>");

    document.write("<b>Total Cost (including shipping): " + totalCost + " PKR</b>"); 
    
    var totalMarks = 500;        
      var marksObtained = 420;  
       var percentage = (marksObtained / totalMarks) * 100;
       document.write("<h1>Result</h1>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + marksObtained + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%");   
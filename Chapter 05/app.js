// // Task# 01


// var a = +prompt("Enter first word")
// var b = +prompt("Enter second word")
// var c = a + b;
// document.write("Sum of " + a + " and " + b + " is equal to " + c + "  ")


// // Task# 02


// var a = +prompt("Enter first word")
// var b = +prompt("Enter second word")
// var c = a - b;
// document.write("Subtact of " + a + " and " + b + " is equal to " + c + "  ")




// var a = +prompt("Enter first word")
// var b = +prompt("Enter second word")
// var c = a * b;
// document.write("Multily of " + a + " and " + b + " is equal to " + c + "  ")



// var a = +prompt("Enter first word")
// var b = +prompt("Enter second word")
// var c = a / b;
// document.write("Division of " + a + " and " + b + " is equal to " + c + "  ")


// var a = +prompt("Enter first value")
// var b = +prompt("Enter second value")
// var x = a + b;
// var c = +prompt("Enter third value")
// var y = x - c;
// document.write("Sum of " + a + " and " + b + " is equal to " + x + " then Subtract by third value is equal to  " + y + "   ")


// // Task# 03


// var a;

// a = 56;

// document.write("Value after variable declaration is " + a + " <br>")

// var b = 10;

// document.write("Initial value:" + b + " <br>")

// var c = ++b;

// document.write("Value after increament is:" + c + "<br>")

// var c = b + (5);

// document.write("Value after addition is:" + c + "<br>")

// var c = --b;

// document.write("Value after decreament is:" + c + "<br>")

// var b = 9 % 3;

// document.write("The remainder is:" + b + "<br>")

// // Task# 04

// var ticket = 600;

// ticket * 5;

// document.write("Total cost to buy 5 tickets a movie is " + ticket + "<br>")

// // Task# 05

// for (var i = 1; i <= 10; i++) {
//     document.write("24" + "x" + i + "=" + 24 * i + "<br>")
// }

// // Task# 06

// // Fehrenteit to Celsius

// var fehrenheit = +prompt("Enter a temprature in fehrenheit");

// var celsius = (fehrenheit + - +32) * +5 / 9;

// document.write(fehrenheit + "°F is " + celsius + "°C");


// // Celsius to Fehrenteit


// var celsius = +prompt("Enter a temprature in fehrenheit");

// var fehrenheit = (celsius * +9 / 5) + 32;

// document.write(celsius + "°C is " + fehrenheit + "°F");


// // Task# 07

// var price_item_1, price_item_2, quantity_of_item_1, quantity_of_item_2, shipping_charges, total_charges;

// price_item_1 = 650;

// price_item_2 = 100;

// quantity_of_item_1 = 3;

// quantity_of_item_2 = 7;

// shipping_charges = 100;

// total_charges = price_item_1 * quantity_of_item_1 + price_item_2 * quantity_of_item_2 + shipping_charges;

// document.write("<h1> Shopping cart </h1>")
// document.write("Price of item 1 is " + price_item_1 + "<br>");
// document.write("Quantity of item 1 is " + quantity_of_item_1 + "<br>");
// document.write("Price of item 2 is " + price_item_2 + "<br>");
// document.write("Quantity of item 2 is " + quantity_of_item_2 + "<br>");
// document.write("Shipping Charges " + shipping_charges + "<br><br>");
// document.write("The total cost of your order is " + total_charges + "");


// // Task# 08


// var obtained_marks, total_marks;
// obtained_marks = +prompt("Enter obtained Marks ")
// total_marks = 980;

// document.write("Total Marks is " + total_marks + "<br> And Your Obtained marks is " + obtained_marks + " <br>And Your Percentage is " + obtained_marks / total_marks * 100 + "%")


// // Task# 09

// var pkr, usd;
// usd = +prompt("Enter the currency of United State")
// pkr = 165.65;

// document.write("Total currency in PKR: " + usd * pkr + "<br>")

// // Saudi riyal

// var pkr, riyal;
// riyal = +prompt("Enter the currency of Saudi Riyal")
// pkr = 44.16;

// document.write("Total currency in PKR: " + riyal * pkr + "")


// // Task# 10

// var number = 8;

// var calculation = ((number + 5) * 10) / 2;

// document.write(calculation);


// // Task# 11


// var current_year = +prompt("Enter current year")
// var myage, birth_year = +prompt("Enter your birth year")
// myage = current_year - birth_year;

// document.write("<h1>Age Calculator</h1>")
// document.write("Current Year: " + current_year + "<br>")
// document.write("Birth Year: " + birth_year + "<br>")
// document.write("Your age is: " + myage + "");


// // Task# 12


// var radius = 20;

// document.write("<h1>The Geometrizer</h1> <br><br>")
// document.write("Radius of a Circle " + radius + "<br><br>")

// var Circumference = ((2 * 3.142) * radius);

// document.write("The Circumference of a circle =" + Circumference + "<br>(Hint : Formula = 2 π r , π = 3.142)<br><br>");

// var Area = (3.142 * 400)

// document.write("The Area of a circle =" + Area + "<br>(Hint : Formula = π r2, π = 3.142   )");


// // Task# 13


// var favi_snacks, current_age, max_age, ammount_per_day;

// favi_snacks = " Choclate chip ";

// current_age = 22;

// max_age = 70;

// ammount_per_day = 2;

// document.write("<h1>The lifetime Supply Calculator</h1><br>")

// document.write("Favourite Snacks: " + favi_snacks + "<br>")

// document.write("Current Age: " + current_age + "<br>")

// document.write("Estimated Maximum Age: " + max_age + "<br>")

// document.write("Ammount Of Snacks Per Day: " + ammount_per_day + "<br>")

// document.write("You will need " + (max_age - current_age) * ammount_per_day + " " + favi_snacks + " to last until the ripe old age of " + max_age + "<br>")
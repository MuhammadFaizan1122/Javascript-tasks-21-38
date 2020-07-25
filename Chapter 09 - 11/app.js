// Task # 01


// var city_name = prompt("Enter your city name");

// if (city_name === "karachi" || city_name === "Karachi" || city_name === "KARACHI") {
//     alert("Welcome to the city of lights");
// } else {
//     alert("Welcome to " + city_name + "")
// }


// Task # 02


// var gender = prompt("Please enter your gender");

// if (gender === "male" || gender === "Male" || gender === "MALE") {
//     alert("Good Morning Sir.");
// } else if (gender === "female" || gender === "Female" || gender === "FEMALE") {
//     alert("Good Morning Ma'am.")
// }


// Task # 03


// var Taffic_light = prompt("Enter the traffic light colour");

// if (Taffic_light === "green") {
//     alert("Move Now");
// } else if (Taffic_light === "yellow") {
//     alert("Ready To move")
// } else if (Taffic_light === "red") {
//     alert("Must Stop")
// }


// Task # 04



// var fuel = +prompt("Enter your remaining car fuel")

// if (fuel <= 0.25) {
//     alert("Please refill the fuel in your car!")
// } else {
//     alert("You must go on your drive")
// }



// Task # 05 (a)


// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }


// Task # 05 (b)


// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }


// Task # 05 (c)


// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }


// Task # 05 (d)


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }


// Task # 05 (e)


// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }


// Task # 05 (f)


// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// Task # 06




// var sub1 = +prompt("Enter the obtained marks of first subject")
// var sub2 = +prompt("Enter the obtained marks of second subject")
// var sub3 = +prompt("Enter the obtained marks of third subject")

// var total, sum, percent, grade, remarks;

// total = 300;
// sum = sub1 + sub2 + sub3;
// percent = sum / total * 100;

// if (percent >= 80 && percent <= 100) {
//     grade = "A-1"
// } else if (percent >= 70 && percent <= 80) {
//     grade = "A"
// } else if (percent >= 60 && percent <= 70) {
//     grade = "B"
// } else if (percent >= 50 && percent <= 60) {
//     grade = "C"
// } else if (percent >= 40 && percent <= 50) {
//     grade = "D"
// } else(grade = "Fail")


// if (percent >= 80 && percent <= 100) {
//     remarks = "Excellent"
// } else if (percent >= 70 && percent <= 80) {
//     remarks = "Good"
// } else if (percent >= 60 && percent <= 70) {
//     remarks = "You need to improve your self"
// } else if (percent >= 50 && percent <= 60) {
//     remarks = "Poor"
// } else if (percent >= 50 && percent <= 60) {
//     remarks = "Sorry"
// }

// document.write("<h1>Mark Sheet</h1><br>")
// document.write("Total Marks : " + total + " <br>")
// document.write("Obtained Marks : " + sum + "<br>")
// document.write("Percentage : " + percent + "%<br>")
// document.write("Grade : " + grade + "<br>")
// document.write("Remarks : " + remarks + "<br>")


// Task # 07


// var a = 5;
// var b = +prompt("Gusse the feeded number");

// if (b === a) {
//     alert("“Bingo! Correct answer”")
// } else if (b === 6) {
//     alert("Close enough to the correct answer")
// } else {
//     alert("Wrong Answar")
// }


// Task # 08


// var divide, check;
// divide = +prompt("Enter a number to check (divisible by 3)")

// if (divide % 3 == 0) {
//     alert("It is divisible by 3 ");
// }


// Task # 09

// var num_check;

// num_check = +prompt("Enter a number to check Even Or Odd")

// if (num_check % 2 == 0) {
//     alert("" + num_check + " is a Even number");
// }
// if (num_check % 2 == 1) {
//     alert("" + num_check + " is a Odd number");
// }



// Task # 10


// var temprature = +prompt("Enter the temprature")

// if (temprature >= 40 && temprature <= 100) {
//     alert("It is too hot Outside.")
// }
// if (temprature >= 30 && temprature <= 40) {
//     alert("The Weather today is Normal.")
// }
// if (temprature >= 20 && temprature <= 30) {
//     alert("Today’s Weather is cool.")
// }
// if (temprature >= 10 && temprature <= 20) {
//     alert("OMG! Today’s weather is so Cool.")
// }


// Task # 11


// var calc1, calc2, sign, result;

// calc1 = +prompt("Enter The First value")
// sign = prompt("Enter The Operator Sign")
// calc2 = +prompt("Enter The Second value")

// if (sign == "/") {
//     result = calc1 / calc2;
//     alert(calc1 + sign + calc2 + "=" + result)
// } else if (sign == "*") {
//     result = calc1 * calc2;
//     alert(calc1 + sign + calc2 + "=" + result)
// } else if (sign == "+") {
//     result = calc1 + calc2;
//     alert(calc1 + sign + calc2 + "=" + result)
// } else if (sign == "-") {
//     result = calc1 - calc2;
//     alert(calc1 + sign + calc2 + "=" + result)
// } else {
//     alert("Please enter the correct value's for right answer ")
// }
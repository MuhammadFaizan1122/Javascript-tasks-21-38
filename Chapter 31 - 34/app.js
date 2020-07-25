// Task # 01



// var a = new Date();


// document.write(a);



// Task # 02


// var a = new Date();

// var b = a.toString();

// var c = b.slice(4, 8)

// document.write("Current month: " + c + "");



// Task # 03



// var a = new Date();

// var b = a.toString();

// var c = b.slice(0, 3)

// alert("Today is : " + c + "");


// Task # 04


// var a = new Date();

// var b = a.toString();

// var c = b.slice(0, 3)

// if (c = Sat || Sun) {
//     alert("Today is Fun Day!");

// }



// Task # 05


// var a = new Date();

// var b = a.getDate();

// if (b <= 15) {
//     document.write("First fifteen date of the month");
// } else {
//     document.write("Last days of the months")
// }



// Task # 06


// var date = new Date();

// document.write("Current Date: " + date + "<br>")

// var date1 = date.getTime();

// document.write("Elapsed miliseconds since january 1, 1970: " + date1 + "<br>")

// var Min = date1 * 60

// document.write("Elapsed Minutes since january 1, 1970: " + Min + "<br>")


// Task # 07


// var a = new Date();

// var currentHrs = a.getHours();

// if (currentHrs <= 12) {
//     alert("It's AM")
// } else(
//     alert("It's PM")
// )


// Task # 08



// var laterDate = new Date();

// laterDate.setMonth(11);

// laterDate.setDate(31);

// document.write(laterDate);



// Task # 09



// var laterDate = new Date();

// laterDate.setFullYear(2020);

// laterDate.setMonth(3);

// laterDate.setDate(24);

// var date = new Date();

// var diff = date - laterDate;

// var diffMili = diff / (1000 * 60 * 60 * 24);

// document.write("" + diffMili + " days have passed since 1st rammdan, 2021");



// Task # 10



// var laterDate = new Date();

// document.write("On refrence date " + laterDate + "<br>")

// laterDate.setFullYear(2020);

// laterDate.setMonth(5);

// laterDate.setDate(1);

// var date = new Date();

// var diff = date - laterDate;

// var diffMili = Math.floor(diff / (1000 * 60));

// document.write("" + diffMili + " Seconds had passed since beginning of jun 2021");



// Task # 11


// var date = new Date;

// document.write(date + "<br>");

// var date1 = new Date();
// date1.getHours() - 1;
// document.write(date1 + "<br>");



// Task # 12



// var date = new Date();

// document.write("Current date: " + date + "<br>")

// var date1 = new Date();

// date1.setFullYear(1920);

// alert("100 years back, it was  " + date1 + "")


// Task # 13


// var input = prompt("Enter Your age")

// document.write("Your age is " + input + "<br>")

// var date = new Date;

// var result = date.getFullYear() - input;

// document.write("Your Birth year is " + result + "")



// Task # 14

// var date = new Date();

// var arr = ["name", "month", "unit", "unit_charges", "late_fees"]
// name = "ABC Customer";
// month = date.getMonth();
// unit = Math.floor(Math.random() * 500) + 1;
// unit_charges = 16;
// late_fees = 350;

// document.write("Customer name: " + name + "<br>")
// document.write("Current Month: " + month + "<br>")
// document.write("Number of Units: " + unit + "<br>")
// document.write("Charge Per Unit: " + unit_charges + "<br>")
// document.write("Net ammount payable (within Due Date): " + unit_charges * unit + "<br>")
// document.write("Late payment surcharge: " + late_fees + "<br>");
// document.write("Gross ammount payable (after Due Date): " + (unit_charges * unit) + late_fees + "<br>")
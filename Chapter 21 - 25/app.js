// Task # 01


// var a, b, c;
// a = prompt("Enter first name")
// b = prompt("Enter last name")
// c = a + b;


// document.write(c)



// Task # 02

// var mobileName = prompt("Enter your favorite moblie phone model.");

// document.write("My favorite phone is: " + mobileName + "<br>")

// var numChars = mobileName.length;

// document.write("Lenght of String: " + numChars + "")

// Task # 03


// var text = "Pakistani";

// document.write("String: " + text + "<br>");

// var a = text.lastIndexOf("n");

// document.write("Last Index of 'n': " + a + "");




// Task # 04



// var text = "Hello World";

// document.write("String: " + text + "<br>");

// var a = text.lastIndexOf("l");

// document.write("Last Index of 'l': " + a + "");




// Task # 05


// var text = "Pakistani";

// document.write("String: " + text + "<br>");

// document.write("Character at index 3: " + text.charAt(3) + "");



// Task # 06



// var first_name = prompt("Enter first name");;
// var second_name = prompt("Enter second name");
// var children = first_name.concat(second_name);


// document.write(children);



// Task # 07



// var cityName = "Hyderabad";

// document.write("City: " + cityName + "<br>")


// // var name = function(cityName, Islamabad)


// Name = cityName.replace("Hyder", "Islam");

// document.write("City name after replacing: " + Name + "");



// Task # 08


// var message = "Ali and Sami are best friends. They play cricket and football together.";


// var message1 = message.replace(/and/g, "&");

// document.write(message1)



// Task # 09


// var num = "472";

// document.write("Value: " + num + "<br>  Type: " + typeof(num) + "<br>");

// var convert = Number(num);

// document.write("Value: " + num + "<br>  Type: " + typeof(convert) + "");



// Task # 10



// var capitalInput = prompt("Enter any input to convert capitalize");

// document.write("User Input: " + capitalInput + "<br>")

// var convert = capitalInput.slice(0);

// convert = convert.toUpperCase();

// document.write("Upper case: " + convert + "");



// Task # 11


// var capitalInput = prompt("Ener any input to convert capitalize"t);

// document.write("User Input: " + capitalInput + "<br>")

// var convert1 = capitalInput.slice(0, 1);
// var convert2 = capitalInput.slice(1);

// convert1 = convert1.toUpperCase();
// convert2 = convert2.toLowerCase();

// var convert = convert1 + convert2;

// document.write("Title case: " + convert + "");



// Task # 12



// var num = prompt("Enter an integer");

// document.write("Number: " + num + "<br>")

// var convert = num.replace(".", "")

// document.write("result: " + convert + "")



// Task # 13


// var username = prompt("Enter your name");

// for (var i = 0; i < username.length; i++) {
//     if (username[i].charCodeAt() = 64 || 46 || 44 || 33) {
//         alert("Invalid username")
//     }
//     break;
// }


// Task # 14



// var A = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"]

// var b = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am")

// var convert1 = b.slice(0, 1);
// var convert2 = b.slice(1);

// convert1 = convert1.toUpperCase();
// convert2 = convert2.toLowerCase();

// var convert = convert1 + convert2;

// for (var i = 0; i <= A.length; i++) {
//     if (convert === A[i]) {

//         alert(convert + " is available at index " + i + " in our bakery")
//         break;
//     } else {
//         alert("Sorry! " + convert + " is not available in our bakery. ")
//         break;
//     }
// }



// Task # 15


// function Faizan() {



//     var password = document.getElementById('password').value;
//     console.log(password);
//     for (var i = 0; i < password.length; i++) {
//         if (password[i].charCodeAt() >= 97 && 99, password[i].charCodeAt() <= 122 || password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 91 || password[i].charCodeAt() >= 48 && password[i].harCodeAt() <= 57) {
//             // console.log()
//             // alert("Character Found");
//             // break;
//         }
//     }

// }



// Task # 16



// var university = "University Of Karachi";

// var name = university.split(1);

// for (var i = 0; i < name.length; i++) {

// document.write(university);

// }


// Task # 17


// var str = prompt("Enter some text");
// document.write("User Input: " + str + "<br>")
// var n = str.slice(-1);
// document.write("Last Character of input: " + n + "")
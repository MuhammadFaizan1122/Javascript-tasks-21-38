// Task # 01


// function date(a) {
//     var b = new Date();
//     document.write(b);
// }
// date();



// Task # 02



// function greet() {
//     var a = prompt("Enter First Name");
//     var b = prompt("Enter Second Name");
//     document.write(a + " " + b)
// }
// greet();



// Task # 03


// function Number(a, b) {
//     var a = +prompt("Enter first number");
//     var b = +prompt("Enter second number");
//     var c = a + b;
//     document.write(c)
// }

// Number();


// Task # 04


// function greet(a, b, c) {


//     if (b === "+") {
//         return a + c
//     } else if (b === "-") {
//         return a - c
//     } else if (b === "*") {
//         return a * c
//     } else if (b === "/") {
//         return a / c
//     } else {
//         alert("Unvalid Operator")
//     }
// }

// var f = greet(5, "+", 93);
// document.write(f);


// Task # 05


// function squares(num) {
//     var num = +prompt("Enter a number:");
//     var i;
//     for (i = 0; i <= num; i++) {
//         var sum = 0;
//         i = i * i;
//         sum = i;
//     }
//     document.write("The sum of squares for numbers up to and including " + num + "is " + sum + "");
// }
// squares();


// Task # 06



// function factorial(n) {
//     if (n > 0 && n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial());



// Task # 07

// function counting() {
//     var start = prompt("Enter First number")
//     var end = prompt("Enter Second number")
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting();



// Task # 08


// var calc1 = +prompt("Enter The Base");
// var calc2 = +prompt("Enter The perpendicular");

// function outerfunc() {
//     var base;
//     var perpendicular;

//     function innerfunc() {
//         base = calc1 * calc1;
//         perpendicular = calc2 * calc2;
//     }
//     innerfunc()
//     var hypotanious = base + perpendicular;
//     var squarOfHypotanious = hypotanious * hypotanious;
//     document.write("Formula : Hypotenuse<sup>2</sup> = Base<sup>2</sup> + Perpendicular<sup>2</sup><br>");
//     document.write("Base = " + calc1 + " Perpendicular = " + calc2 + "<br>");
//     document.write("The Hypotenuse value is = " + squarOfHypotanious + "");
// }
// outerfunc();


// Task # 09

// pattren # 01 


// function areaOfrectangle(height, width) {
//     return width * height;
// }
// var calc = areaOfrectangle(40, 20);
// document.write(calc);


// pattren # 02 

// function areaOfrectangle() {
//     var height = 40;
//     var width = 11;
//     return width * height;
// }
// var calc = areaOfrectangle(height, width);
// document.write(calc);


// Task # 10



// var str = "abcdcba"

// function palindromeCheck(inStr) {
//     inStr = inStr.replace(/[^a-zA-Z0-9]+/g, '');
//     inStr = inStr.toLowerCase();
//     console.log(inStr)
//     for (var i = 0; i < inStr.length; i += 1) {
//         if (inStr[i] !== inStr[inStr.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// document.write(palindromeCheck(str));


// Task # 11



// function uppercase(str) {
//     var array = str.split(' ');
//     var array1 = [];

//     for (var i = 0; i < array.length; i++) {
//         array1.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
//     }
//     return array1.join(' ');
// }
// document.write(uppercase("hayee i'm muhamamd faizan"));



// Task # 12


// Pattren # 01



// function findLongWord(str) {
//     var a = str.match(/\w[a-z]{0,}/gi)
//     var b = a[0];

//     for (var i = 0; i < a.length; i++) {
//         if (b.length < a[i].length) {
//             return a[i];
//         }
//     }
//     return b;
// }
// console.log(findLongWord('Muhammad Faizan Salahuddin'))


// Pattren # 02


// var str = "My name is muhammad faizan"

// function longestWord() {
//     var strArray = str.split(' ');
//     var sortedStrArray = strArray.sort((strA, strB) => {
//         return strB.length - strA.length;
//     });
//     return sortedStrArray[0];
// }
// console.log(longestWord());


// Task # 13


// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var position = 0; position < str.length; position++) {
//         if (str.charAt(position) == letter) {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }
// document.write(char_count('w3resource.com', 'o'))



// Task # 14



// function circle(radius) {
//     this.radius = radius;

//     this.area = function() {
//         return Math.PI * this.radius * this.radius;
//     }
//     this.perimeter = function() {
//         return 2 * Math.PI * this.radius;
//     };
// }
// var c = new circle(3);
// console.log("Area = " + c.area().toFixed(2))
// console.log("Perimeter = " + c.perimeter().toFixed(2))
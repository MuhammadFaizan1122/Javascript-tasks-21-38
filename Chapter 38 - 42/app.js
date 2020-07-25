// Task # 01

// function findA(a, b) {
//     var ans = 0;
//     for (var i = 0; i <= b; i++) {
//         ans = a * ans;
//     }
//     return ans;
// }
// document.write(findA(4, 5));



// Task # 02


// function leapyear(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(100));



// Task # 03


// function findS() {
//     var side1 = 5;
//     var side2 = 6;
//     var side3 = 7;
//     var s = (side1 + side2 + side3) / 2;
//     console.log("S = " + s + "");

//     function findSides() {
//         var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
//         console.log("Area = " + area + "");
//     }
//     findSides();
// }
// findS();



// Task # 04


// function mainFunction() {
//     var sub1 = +prompt("Enter first subject marks");
//     var sub2 = +prompt("Enter second subject marks");
//     var sub3 = +prompt("Enter third subject marks");

//     function percentage() {
//         var per = (sub1 + sub2 + sub3) / 3.0
//         return per;
//     }
//     console.log("Percentage = " + percentage())

//     function average() {
//         var avg = (percentage() / 300) * 100;
//         return avg;
//     }
//     console.log("Average = " + average());
// }
// mainFunction();



// Task # 05


// function indexOf() {
//     var str = ["faizan", "rafi", " faraz", "Ali"]
//     var name = str.indexOf("rafi")
//     return name;
// }
// console.log(indexOf());



// Task # 06

// Not understand

// function vowel(str) {

//     var name = str.replace(/e/gi, "")
//     return name;
// }
// console.log(vowel("The vowel name is a e i o u"));



// Task # 07



// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split();
//     var count = 0;

//     for (var i = 0; i < chars.length - 1; i++) {
//         var char = chars[i];
//         var next = chars[i + 1];

//         if (isCorrectCharachter(char) && isCorrectCharachter(next)) {
//             console.log(count++)
//         }
//     }
//     return count;
// }

// function isCorrectCharachter() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split();
//     switch (str) {
//         case 'a':
//             console.log("a")
//             break;
//         case 'e':
//             console.log("e")
//             break;
//         case 'i':
//             console.log("i")
//             break;
//         case 'o':
//             console.log("o")
//             break;
//         case 'u':
//             console.log("u")
//             break;
//             return true
//         default:
//             return false
//     }
// }


// var found = isCorrectCharachter();
// console.log(found);


// Task # 08


// var km = +prompt("Enter The Distance in Kilometers");

// function distancecalc() {
//     var m = km * 1000;
//     var feet = m * 3.28;
//     var inch = feet * 12;
//     var cm = inch * 2.54;

//     console.log("Meter's = " + m + ", Fits = " + feet + ", Inches = " + inch + ", Centemeters = " + cm + "");

// }
// distancecalc();


// Task # 09


// function findOverTime() {
//     var hours = +prompt("Enter your duty hours")
//     if (hours > 40) {
//         var overTime = hours - 40;
//         var calcTime = overTime * 12;
//         console.log("Your Over time payment is RS : " + calcTime + "");
//     } else {
//         alert("You can not doing over time duty")
//     }
// }
// findOverTime();



// Task # 10


// function withdrawAmmount() {
//     var cash = +prompt("Enter the ammount of withdraw")
//     var hundred = Math.floor(cash / 100);
//     var fifty = Math.floor((cash % 100) / 50);
//     var ten = Math.floor(((cash % 100) % 50) / 10);
//     var coin = Math.floor(((cash % 100) % 50) % 10);
//     document.write("You will have " + hundred + " hundred notes " + fifty + " fifty note " + ten + " ten notes and " + coin + " coins.")
// }
// withdrawAmmount();
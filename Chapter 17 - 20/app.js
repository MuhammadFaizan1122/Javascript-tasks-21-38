// Task # 01 


// var arr = [arr1[''], arr2[''], arr3[''], arr4['']];


// Task # 02 

// var i, j, arr = [
//     [0, 2, 3, 4],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// for (i = 0; i < 3; i++) {
//     for (j = 0; i < 4; j++) {

//         document.write(arr[i][j] + " ");
//     }
//     document.write("<br>");
// }



// Task # 03


// var num;


// for (num = 1; num <= 10; num++) {
//     document.write("<br>" + num + "")
// }



// Task # 04


// var table, i, sum;

// table = +prompt("Enter a number  to show the Multiplication table");

// sum = +prompt("Enter lenght Multiplication table");

// document.write("The Multiplication table number " + table + " and length is " + sum + "<br>")

// for (i = 1; i <= sum; i++) {
//     document.write(table + " x " + i + " = " + i * sum + "<br>")
// }



// Task # 05


// var i, fruits = ["Apple", "Bnana", "Mango", "Orange", "Strawberry"];


// for (i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// for (i = 0; i < fruits.length; i++) {
//     document.write("Elements at index " + i + " " + fruits[i] + "<br>");

// }




// Task # 06



// var a, b, c, d, e;
// document.write("<br> <h3>Counting :</h3>")
// for (a = 1; a <= 15; a++) {
//     document.write(a + ", ")
// }

// document.write("<br> <h3>Reverse :</h3>")
// for (b = 10; b >= 1; b--) {
//     document.write(b + ", ")
// }

// document.write("<br> <h3>Even :</h3>")
// for (c = 0; c <= 20; c = c + (2)) {
//     document.write(c + ", ")
// }

// document.write("<br> <h3>Odd :</h3>")
// for (d = 1; d <= 19; d = d + (2)) {
//     document.write(d + ", ")
// }

// document.write("<br> <h3>Series :</h3>")
// for (e = 2; e <= 20; e = e + (2)) {
//     document.write("" + e + "k, ")
// }



// Task # 07


// var A = ["Cake", "apple pie", "Cookie", "Chips", "patties"]

// var b = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am")

// for (i = 0; i <= 5; i++) {
//     if (b === A[i]) {
//         alert(b + " is available at " + i + " in our bakery")
//         break;
//     } else {
//         alert("Sorry! " + b + " is not available in our bakery. ")
//     }
// }


// Task # 08


// var i, large_num, B = [24, 53, 78, 91, 12]

// document.write("<br><h3>Array items: </h3>" + B + "<br>")

// large_num = B[0];

// for (i = 0; i < B.length; i++) {
//     if (large_num < B[i]) {
//         large_num = B[i];
//         value = B[i]
//     }
// }
// document.write("The largest number is " + value + "")


// Task # 09


// var i, small_num, B = [24, 53, 78, 91, 12]

// document.write("<br><h3>Array items: </h3>" + B + "<br>")

// small_num = B[0];

// for (i = 1; i < B.length; i++) {
//     if (small_num > B[i]) {
//         small_num = B[i];
//         value = B[i]
//     }
// }
// document.write("The Smallest number is " + value + "")



// Task # 10


// var i, table;

// table = 5

// for (i = 1; i <= 20; i++) {
//     document.write(table * i + ", ")
// }
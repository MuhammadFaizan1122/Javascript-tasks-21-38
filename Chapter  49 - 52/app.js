// function form12() {
//     var firstName = document.getElementById("first-name")
//     var lastName = document.getElementById("last-name")
//     var email = document.getElementById("inputEmail4")
//     var password = document.getElementById("inputPassword4")
//     var address = document.getElementById("inputAddress")
//     var city = document.getElementById("inputCity")
//     var state = document.getElementById("inputState")
//     var zip = document.getElementById("inputZip")
//     document.write("1) First Name = " + firstName.value + "<br>");
//     document.write("2) Last Name = " + lastName.value + "<br>");
//     document.write("3) Email = " + email.value + "<br>");
//     document.write("4) Password = " + password.value + "<br>");
//     document.write("5) Address = " + address.value + "<br>");
//     document.write("6) City = " + city.value + "<br>");
//     document.write("7) State = " + state.value + "<br>");
//     document.write("8) Zip = " + zip.value + "<br>");
// }



// Task # 02


// function paragraph() {
//     var text = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla qui omnis ab harum quidem saepe. Nam vitae magnam itaque rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla qui omnis ab harum quidem saepe. Nam vitae magnam itaque rem.";
//     var para = document.getElementById("para")
//     para.innerHTML = text
// }



// Task # 03



// var stdName = document.getElementById("name")
// var rollNum = document.getElementById("rollNum")
// var Marks = document.getElementById("Marks")
// var tr = document.getElementById("firstRow")


// function form1() {
//     var td = document.createElement("td")
//     var tdText = document.createTextNode(stdName.value)
//     td.appendChild(tdText)
//     tr.appendChild(td)

//     // roll number

//     var td2 = document.createElement("td")
//     var tdText2 = document.createTextNode(rollNum.value)
//     td2.appendChild(tdText2)
//     tr.appendChild(td2)
//         // console.log(tr)

//     // Marks

//     var td3 = document.createElement("td")
//     var tdText3 = document.createTextNode(Marks.value)
//     td3.appendChild(tdText3)
//     tr.appendChild(td3)

//     // Delete Button

//     var btn = document.createElement("Button")
//     var btnText = document.createTextNode("Delete");
//     btn.appendChild(btnText)
//     btn.setAttribute("onclick", "dlt(this)")
//     tr.appendChild(btn)
//     console.log(tr)
// }

// function dlt(f) {
//     f.parentNode.remove()
// }
// Q 1&2
// var a = 12;
// var b= 4;
// var addition = a + b;
// var multiplication = a*b;
// var division = a/b;
// var modulus = a%b
// document.write("sum of " + a + " & " + b + " = "+ addition + "<br>");
// document.write("multiplication of " + a + " & " + b + " = "+ multiplication + "<br>");
// document.write("modulus of " + a + " & " + b + " = "+ modulus+ "<br>");
// document.write("division of " + a + " & " + b + " = "+ division + "<br>");

// // Q 3

// var value;
// document.write("value of variable after declaration is "+ value+ "<br>");

// value = 5;
// document.write("initial value is "+ value + "<br>");

// newValue = ++value;
// document.write("value after increment is "+ newValue + "<br>");

// newValue1 = newValue + 7;
// document.write("value after 7 increment is "+ newValue1 + "<br>");

// newValue2 = --newValue1;
// document.write("value after decrement is "+ newValue1+ "<br>");

// newValue3 = newValue2%3;
// document.write("reminder after dividing the variable by 3 is "+ newValue3);

// //Q 4

// const movieTicket = 600;
// const totalTicket = movieTicket*5;
// document.write("total cost of 5 tickets to a movie is " + totalTicket);

// //Q 5
// var table=+prompt("write your table")
// // var table=Number(prompt("write your table"))
// if (!isNaN(table))
// {
// for(let i=1;i<=10;i++){
//     document.write(table + "x" + i + "=" + (table*i)+ "<br>" )
// }
// }
// //Q 6
// document.write("what conversion do u want" + "<br>");
// document.write("try to conversion key word with f to c or cto f");
// alert ("welcome to site, tmerature conversion");

// var x = prompt("what conversion do u want");
// if ( x === "f to c"){
//     var degreeF = +prompt("what is your temperture in F");
//      document.write("your temperature in C "+(degreeF-32)*5/9 + "<br>");}
// else if (x === "c to f"){

//     var degreeC = +prompt("what is your temperture in C");
//     document.write("your temperature in F is "+ ((degreeC * (9/5)+32)));
// }
// else {alert("no number");};

// // Q 7

// let item1 = +prompt("price of item1");
// let item2 = +prompt("price of item2");
// let qItem1 = +prompt("price of qitem1");
// let qItem2 = +prompt("price of qitem2");
// let shipping = +prompt("price of shipping charges");

// document.write("price of item 1 is " + item1 + "<br>", "quantity of item 1 is " + qItem1 + "<(br>","price of item 2 is " + item2 +  "<br>", "quantity of item 2 is " + qItem2 + "<br>", "shipping charges is " + shipping);

// document.write("total cost of your order is " + (item1*qItem1 + item2*qItem2 + shipping ))

// //Q 8
// var totalMarks = +prompt ("what is the total marks");
// var marksObtained = +prompt ("what is the obtained marks");

// document.write("percentage = " + ((marksObtained/totalMarks)*100 ) + "%")

// //Q8
// var x = +prompt("write your value in $");
// var y = +prompt("write your value in SR");

// document.write("total currency in Pkr " + ((x*104)+(y*28)))

// Q 10
// var n1 = 15;
// var n2 = 10;

// document.write (`addition ${((n1+5)*10)/2} `);

// // Q 11//

// var current = {
//     date: +prompt (`current date`),
//     month: +prompt (`current month`),
//     year: +prompt (`current year`),
// };


// var birth = {
//     date: +prompt(`birth date`),
//     month: +prompt(`bith month`),
//     year: +prompt(`birth year`)
// };


// if (birth.year == 1995 && birth.month >= 6 ){
//  document.write (`your age is :${current.year-birth.year}`)
// }
// // else if (birth.month < 6 && birth.year ==1995 ) { document.write (`now your age is : ${--yourAge}`) }

// else {document.write ("your age is : "+ (current.year-birth.year-1))}

// Q 11///

// const radius = +prompt ("write the radius of circle");
// const pi = 3.142;

// document.write (`radius of circle is = ${radius} <br>`)
// document.write(`The circumference of circle is: ${2*radius*pi} <br>`);
// document.write (`the areaof circle is : ${pi*radius*radius}`)

// / Q 12//

var snack = "biryani";
var age = 28;
var maxAge = 40;
var amountSnack = 2;

document.write (`your favourite snack: ${snack} <br>`);
document.write (`your age: ${age}`);
document.write (`your maximum age: ${maxAge}<br>`);
document.write (`Amount of snack per day: ${maxAge}<br>`);
document.write (`you need ${(maxAge-age)*2} <br>`);




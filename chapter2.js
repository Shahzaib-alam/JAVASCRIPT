// //Q1 & 2
// var userName;
// var myName;
// userName = "alam.shahzaib";
// myName = "syed shahzaib alam";
// //Q 3
// var message = "hello world";
// alert(message);

// //Q 4
// var biodata = {name:"shahzaib" , age:"28" , certification:"certified in mobile app development"}
// alert(biodata.name)
// alert(biodata.age)
// alert(biodata.certification)

// const person = {
//     firstName: "shahzaib",
//     lastName: "alam",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   document.write(person.fullName());

// //Q 5
// let a;
// a = "PIZZA \nPIZZ \nPIZ \nPI \nP";

// alert(a);

// // //Q 6
// var email = "shahzaibalam3321@Gmail.com"
// alert("my email address is"+" "+ email)

// // //Q 7
// var book = "smarter way to learn JavaScript"
// alert("i am tring to learn from the book" +" "+ book)

// // Q 8
// document.write ("yeah! I can write HTML content through javascript")

// // Q 9
//alert("....*****....")
//! Chapter 12 and 13

//? Q1

// var ch = prompt("Enter a character:");

// if  (ch >= "A" && ch <= "Z"){
//     document.write(ch + " is an UpperCase character <br>");
// }
// else if (ch >= "a" && ch <= "z"){
//     document.write(ch + " is an LowerCase character <br>");
// }
// else{
//     document.write(ch + " is a number <br>");
// }

 
//? Q2

// const num1 = +prompt("Enter the first integer:");
// const num2 = +prompt("Enter the second integer:");

// if (num1 === num2){
// document.write("Both numbers are equal: " + num1);
// }
// else if (num1 > num2){
// document.write("The larger number is: " + num1);
// }
// else{
// document.write("The larger number is: " + num2);
// }


//? Q3

// var num = +prompt("Enter any number: ");

// if(num > 0){
//     document.write(num + " is a positive number.");
// }
// else if(num < 0){
//     document.write(num + " is a negative number.");
// }
// else if(num === 0){
//     document.write(num + " is zero.")
// }
// else{
//     document.write("Invalid input")
// }


//? Q4

// var char = prompt("Enter a character: ").toLowerCase();

// if(char.length == 1){
//     if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
//         alert("true")
//     }
//     else{
//         alert("false")
//     }
// }
// else{
//     alert("Invalid input.")
// }


//? Q5

// const correctPassword = "MyPassword";
// const enteredPassword = prompt("Enter your password: ");

// if(!enteredPassword){
//     alert("Please enter your password");
// }
// else if(enteredPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password")
// }


//? Q6

//? else opening bracket was missing in this question which is now added

// var greeting;
// var hour = 13;

// if (hour < 18){
//     greeting = "Good day";
// }
// else { 
//     greeting = "Good evening";
// }


//? Q7

// var time = prompt("Enter time in 24 hour format", "1200");

// if (time >= 0000 && time < 1200){
//     alert("Good morning!")
// }
// else if (time >= 1200 && time < 1700){
//     alert("Good afternoon!")
// }
// else if (time >= 1700 && time < 2100){
//     alert("Good evening!")
// }
// else if (time >= 2100 && time <= 2359){
//     alert("Good night")
// }
// else {
//     alert("Invalid input")
// }


//! Chapter 14 - 16

//? Q1

// var studentsName = [];

//? Q2

// var studentsName = [];

//? Q3

// var stringsArray;
// stringsArray = ["black", "white", "grey", "blue"];

//? Q4

// var numberArray = [2, -34, 0, 57.89];

//? Q5

// var booleanArray = [true, false];

//? Q6

// var mixedArray = ["name", 324, true, "s"];

//? Q7

// var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
// qualificationList = "Qualification: <br>";

// for(var i=0; i<qualification.length; i++){
//     qualificationList += (i+1)+ ") "+ qualification[i]  + "<br>";
// }
// document.write(qualificationList);


//? Q8

// const studentNames = ["Michael", "John", "Tony"];
// const studentScores = [320, 230, 480];

// const totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//     const name = studentNames[i];
//     const score = studentScores[i];
//     const percentage = (score / totalMarks) * 100;
    
//     const message = `Score of ${name} is ${score}. Percentage: ${Math.round(percentage)}%<br>`;
//     document.write(message);
// }

//? Q9

// var colors = ["black", "blue", "green", "purple"];
// alert(colors);

// //* (a)
// var beginColor = prompt("What color do want to add to the beginning of the array?").toLowerCase();
// colors.unshift(beginColor);
// document.write("Colors after adding colour to the beginning: <br>", colors, "<br>");

// //* (b)
// var endColor = prompt("What color do want to add to the end of the array?").toLowerCase();
// colors.push(endColor);
// document.write("<br>Colors after adding color to the end: <br> ",colors, "<br>");

// //* (c)
// colors.unshift("violet", "magenta");
// document.write("<br>Colors after adding two more colors to the beginning: <br> ",colors, "<br>");

// //* (d)
// colors.shift();
// document.write("<br>Colors after deleting first color: <br> ",colors, "<br>");

// //* (e)
// colors.pop();
// document.write("<br>Colors after deleting last color: <br> ",colors, "<br>");

// //* (f)
// var index_f = +prompt("enter at which index you want to add color:");
// var color_f = prompt("Enter the color you want to add: ");
// colors.splice(index_f, 0, color_f);
// document.write("<br>Colors after adding color at specific index: <br> ",colors, "<br>");
  
// //* (g)
// var index_g = +prompt("enter at which index you want to remove color:");
// var removeColors = +prompt("How many colors you want to remove?");
// colors.splice(index_g, removeColors);
// document.write("<br>Colors after removing colors at specific index: <br> ",colors, "<br>");

//? Q10

// var scores = [320, 230, 480, 120];
// document.write("Scores of Students : ", scores);
// document.write("<br>Ordered Scores of Students : ",scores.sort());

//? Q11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = [cities[2], cities[3]];

// document.write("Cities list: <br>", cities);
// document.write("<br><br>Selected cities list: <br>", selectedCities);

//? Q12

// var arr = ["This", "is", "my", "cat"];
// var combinedString = arr.join(" ");

// document.write("Array: <br>", arr);
// document.write("<br><br>String: <br>", combinedString);


//? Q13

// var devices = ["keyboard", "mouse", "printer", "monitor <br><br>"];
// document.write("Devices: <br>", devices);

// for (var i=0; i<devices.length; i++){
//     document.write("Out: <br>", devices[i], "<br>");
// }


//? Q14

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices: <br>", devices, "<br><br>");

// for (var i=devices.length-1 ; i>=0; i--){
//     document.write("Out: <br>", devices[i], "<br>");
// }
// Chapter 17 - 20

//? Q1
// var empty2DArray = [[], []];

//? Q2
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix[i].length; j++) {
//         document.write(matrix[i][j] + " ");
//     }
//     document.write("<br>");
// }

//? Q3
// for (var i = 1; i <= 10; i++) {
//     document.write(i);
//     document.write("<br>");
// }

//? Q4
// var number = +prompt("Enter the number to show its multiplication table:");
// var length = +prompt("Enter the length of the multiplication table:");

// if (!isNaN(number) && !isNaN(length)) {
//     for (var i = 1; i <= length; i++) {
//         var result = number * i;
//         document.write(number + " x " + i + " = " + result + "<br>");
//     }
// } else {
//     alert("Please enter valid numeric inputs.");
// }

//? Q5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];


// for (var i = 0; i < fruits.length; i++) {
//     document.write( fruits[i] + "<br>"); 
// }
// document.write("<br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write( "Element at index "+ [i] + " is "+ fruits[i] + "<br>"); 
// }

//? Q6
// document.write("<h3>Counting:</h3>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<h3>Reverse counting:</h3>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<h3>Even:</h3>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h3>Odd:</h3>");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h3>Series:</h3>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }

//? Q7
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

// var found = false;

// for (var i = 0; i < items.length; i++) {
//     if (items[i] === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery.");
//         break;
//     }
// }
// if (!found) {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
// }

//? Q8
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: ");
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + ", ");
// }
// document.write("<br>");

// var largestNumber = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }
// document.write("The largest number is " + largestNumber);

//? Q9
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: ");
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + ", ");
// }
// document.write("<br>");
// var smallestNumber = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallestNumber) {
//         smallestNumber = A[i];
//     }
// }
// document.write("The smallest number is " + smallestNumber);

//? Q10
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ", ");
//     }
// }

//! Chapter 21 -25

//? Q1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Nice to meet you.");

//? Q2
// var favoritePhone = prompt("Enter your favorite mobile phone model:");
// var inputLength = favoritePhone.length;

// document.write("My favourite phone is: " + favoritePhone + "<br>");
// document.write("Length of string: " + inputLength);

//? Q3
// var word = "Pakistani";
// var letterToFind = "n";
// var index = word.indexOf(letterToFind);

// document.write("String: " + word + "<br>");
// document.write("Index of '" + letterToFind + "': " + index);

//? Q4
// var word = "Hello World";
// var letterToFind = "l";
// var lastIndex = word.lastIndexOf(letterToFind);

// document.write("String: " + word + "<br>");
// document.write("Last Index of '" + letterToFind + "': " + lastIndex);

//? Q5
// var word = "Pakistani";
// var characterAtIndex3 = word.charAt(3);

// document.write("String: " + word + "<br>");
// document.write("Character at 3rd index: " + characterAtIndex3);

//? Q6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "! Nice to meet you.");

//? Q7
// var city = "Hyderabad";
// var replacedCity = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br>");
// document.write("After replacement: " + replacedCity);

//? Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = message.replace(/and/g, "&");

// document.write("Original Message: " + message + "<br>");
// document.write("After replacement: " + replacedMessage);

//? Q9
// var stringNumber = "472";
// var number = +(stringNumber);

// document.write("value: " + stringNumber + "<br>");
// document.write("type: " + typeof stringNumber + "<br>");

// document.write("value: " + number + "<br>");
// document.write("type: " + typeof number + "<br>");

//? Q10
// var userInput = prompt("Enter some text:");
// var uppercaseText = userInput.toUpperCase();

// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + uppercaseText);

//? Q11
// var userInput = prompt("Enter some text:");

// var firstChar = userInput.charAt(0).toUpperCase();
// var restOfText = userInput.slice(1).toLowerCase();

// var titleCaseText = firstChar + restOfText;

// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + titleCaseText);

//? Q12
// var num = 35.36;
// var numString = num.toString().replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + numString);

//? Q13
// var username = prompt("Enter a username:");

// if (username.includes("@") || username.includes(".") || username.includes("!") || username.includes(",")) {
//     alert("Please enter a valid username");
// } else {
//     alert("Username accepted: " + username);
// }

//? Q14

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

// var found = false;

// for (var i = 0; i < items.length; i++) {
//     if (items[i] === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery.");
//         break;
//     }
// }
// if (!found) {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }

//? Q15
// const password = prompt("Enter password: ");
// if (!/[a-zA-Z0-9]+/.test(password)) {
//   alert("Password must contain alphabets and numbers.");
// }
// if (/^[0-9]/.test(password)) {
//   alert("Password cannot start with a number.");
// }
// if (password.length < 6) {
//   alert("Password must be at least 6 characters long.");
// }
// else {
//   alert("Password is valid.");
// }


//? Q16
// var university = "University of Karachi";
// var universityArray = university.split(" ");

// for (var i = 0; i < universityArray.length; i++) {
//     document.write("<br>");
    
//     var characters = universityArray[i].split("");
    
//     for (var j = 0; j < characters.length; j++) {
//         document.write(characters[j] + "<br>");
//     }
// }

//? Q17
// var userInput = prompt("Enter some text:");

// if (userInput !== null && userInput !== "") {
//     var lastCharacter = userInput.charAt(userInput.length - 1);
//     document.write("User input: " + userInput + "<br>");
//     document.write("Last character of input: " + lastCharacter);
// } else {
//     document.write("No input provided. Please enter some text.");
// }

//? Q18
// var inputString = "The quick brown fox jumps over the lazy dog";
// var lowercaseString = inputString.toLowerCase();
// var wordToSearch = "the";
// var words = lowercaseString.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordToSearch) {
//         count++;
//     }
// }
// document.write("Text: " + inputString + "<br>");
// document.write("There are " + count + " occurrence(s) of the word '" + wordToSearch + "'");
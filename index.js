// ***********************************************************
//              ===> TASK 1 <===

// var age = window.prompt("Enter your age");
// console.log(age);
// ***********************************************************

// ***********************************************************
//              ===> TASK 2 <===

// var num = window.prompt("Enter your number");

// if (num % 3 == 0) {
//   console.log("The number is divisible by 3");
// } else if (num % 4 == 0) {
//   console.log("The number is divisible by 4");
// } else {
//   console.log("The number is not divisible by 3 or 4");
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 3 <===

// var num1 = Number(window.prompt("Enter your first number"));
// var num2 = Number(window.prompt("Enter your second number"));

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 4 <===

// var num = Number(window.prompt("Enter your number"));

// if (num > 0) {
//   console.log("The number is positive");
// } else {
//   console.log("The number is Negative");
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 5 <===

// var num1 = Number(window.prompt("Enter your first number"));
// var num2 = Number(window.prompt("Enter your second number"));
// var num3 = Number(window.prompt("Enter your third number"));

// >>>>> the easiest way, but we haven't reached it yet <<<<<

// console.log("Max element = " + Math.max(num1, num2, num3));
// console.log("Min element = " + Math.min(num1, num2, num3));

// >>>>> the HARD way <<<<<
// if (num1 > num2 && num1 > num3) {
//   console.log("Max element = " + num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("Max element = " + num2);
// } else {
//   console.log("Max element = " + num3);
// }

// if (num1 < num2 && num1 < num3) {
//   console.log("Min element = " + num1);
// } else if (num2 < num1 && num2 < num3) {
//   console.log("Min element = " + num2);
// } else {
//   console.log("Min element = " + num3);
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 6 <===

// var num = Number(window.prompt("Enter your first number"));

// if (num % 2 == 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 7 <===

// var character = window.prompt("Enter your character");
// if (
//   character === "a" ||
//   character === "e" ||
//   character === "i" ||
//   character === "o" ||
//   character === "u"
// ) {
//   console.log("The character is vowel");
// } else {
//   console.log("The character is not vowel");
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 8 <===

// var num = Number(window.prompt("Enter your number"));
// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 9 <===

// var num = Number(window.prompt("Enter your number"));
// for (var i = 0; i < 12; i++) {
//   console.log(num * (i + 1));
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 10 <===

// var num = Number(window.prompt("Enter your number"));

// for (var i = 1; i < num / 2; i++) {
//   console.log(i * 2);
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 11 <===

// var num1 = Number(window.prompt("Enter your first number"));
// var num2 = Number(window.prompt("Enter your second number"));

// // >>>>> the easiest way, but we haven't reached it yet <<<<<
// // console.log(Math.pow(num1, num2));
// // >>>>> OR <<<<<
// // console.log(num1 ** num2);

// // >>>>> the HARD way <<<<<
// var result = 1;
// for (var i = 0; i < num2; i++) {
//   result *= num1;
// }
// console.log(result);
// ***********************************************************

// ***********************************************************
//              ===> TASK 12 <===

// var mark1 = Number(window.prompt("Enter your first mark"));
// var mark2 = Number(window.prompt("Enter your second mark"));
// var mark3 = Number(window.prompt("Enter your third mark"));
// var mark4 = Number(window.prompt("Enter your fourth mark"));
// var mark5 = Number(window.prompt("Enter your fifth mark"));

// console.log("Total marks = " + (mark1 + mark2 + mark3 + mark4 + mark5));
// console.log("Average marks = " + (mark1 + mark2 + mark3 + mark4 + mark5) / 5);
// console.log(
//   "Percentage = " + ((mark1 + mark2 + mark3 + mark4 + mark5) / 500) * 100 + " %"
// );
// ***********************************************************

// ***********************************************************
//              ===> TASK 13 <===

// var month = Number(window.prompt("Enter the month number"));

// if (month % 2 == 0 && month <= 12) {
//   console.log("The month has 30 days");
// } else if (month % 2 != 0 && month <= 12) {
//   console.log("The month is not 31 days");
// } else if (month > 12) {
//   console.log("The month is not valid");
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 14 <===

// var physics = window.prompt("Enter your mark in Physics");
// var chemistry = window.prompt("Enter your mark on Chemistry");
// var mathematics = window.prompt("Enter your mark on Mathematics");
// var computer = window.prompt("Enter your mark on Computer");
// var biology = window.prompt("Enter your mark on Biology");

// // >>>>> the easiest way, but we haven't reached it yet <<<<<
// var grads = [
//   { subject: "Physics", mark: physics },
//   { subject: "Chemistry", mark: chemistry },
//   { subject: "Mathematics", mark: mathematics },
//   { subject: "Computer", mark: computer },
//   { subject: "Biology", mark: biology },
// ];
// grads.map((grade) => {
//   switch (true) {
//     case grade.mark.toLowerCase() == "a":
//       console.log(
//         `Your grade in ${grade.subject} is A and your percentage is 90%`
//       );
//       break;
//     case grade.mark.toLowerCase() == "b":
//       console.log(
//         `Your grade in ${grade.subject} is B and your percentage is 80%`
//       );
//       break;
//     case grade.mark.toLowerCase() == "c":
//       console.log(
//         `Your grade in ${grade.subject} is C and your percentage is 70%`
//       );
//       break;
//     case grade.mark.toLowerCase() == "d":
//       console.log(
//         `Your grade in ${grade.subject} is D and your percentage is 60%`
//       );
//       break;
//     case grade.mark.toLowerCase() == "e":
//       console.log(
//         `Your grade in ${grade.subject} is E and your percentage is 50%`
//       );
//       break;
//     case grade.mark.toLowerCase() == "f":
//       console.log(
//         `Your grade in ${grade.subject} is F and your percentage is 40%`
//       );
//       break;
//   }
// });

// // >>>>> the HARD way <<<<<
// if (physics === "a" || physics == "A") {
//   console.log("Your grade in Physics is A and your percentage is 90% ");
// } else if (physics === "b" || physics === "B") {
//   console.log("Your grade in Physics is B and your percentage is 80% ");
// } else if (physics === "c" || physics === "C") {
//   console.log("Your grade in Physics is C and your percentage is 70%");
// } else if (physics === "D" || physics === "d") {
//   console.log("Your grade in Physics is D and your percentage is 60%");
// } else if (physics === "E" || physics === "e") {
//   console.log("Your grade in Physics is E and your percentage is 50%");
// } else if (physics === "F" || physics === "f") {
//   console.log("Your grade in Physics is F and your percentage is 40%");
// } else {
//   console.log("Invalid mark");
// }

// if (chemistry === "a" || chemistry === "A") {
//   console.log("Your grade in chemistry is A and your percentage is 90% ");
// } else if (chemistry === "b" || chemistry === "B") {
//   console.log("Your grade in chemistry is B and your percentage is 80% ");
// } else if (chemistry === "c" || chemistry === "C") {
//   console.log("Your grade in chemistry is C and your percentage is 70%");
// } else if (chemistry === "D" || chemistry === "d") {
//   console.log("Your grade in chemistry is D and your percentage is 60%");
// } else if (chemistry === "E" || chemistry === "e") {
//   console.log("Your grade in chemistry is E and your percentage is 50%");
// } else if (chemistry === "F" || chemistry === "f") {
//   console.log("Your grade in chemistry is F and your percentage is 40%");
// } else {
//   console.log("Invalid mark");
// }

// if (mathematics === "a" || mathematics == "A") {
//   console.log("Your grade in mathematics is A and your percentage is 90% ");
// } else if (mathematics === "b" || mathematics === "B") {
//   console.log("Your grade in mathematics is B and your percentage is 80% ");
// } else if (mathematics === "c" || mathematics === "C") {
//   console.log("Your grade in mathematics is C and your percentage is 70%");
// } else if (mathematics === "D" || mathematics === "d") {
//   console.log("Your grade in mathematics is D and your percentage is 60%");
// } else if (mathematics === "E" || mathematics === "e") {
//   console.log("Your grade in mathematics is E and your percentage is 50%");
// } else if (mathematics === "F" || mathematics === "f") {
//   console.log("Your grade in mathematics is F and your percentage is 40%");
// } else {
//   console.log("Invalid mark");
// }

// if (computer === "a" || computer == "A") {
//   console.log("Your grade in computer is A and your percentage is 90% ");
// } else if (computer === "b" || computer === "B") {
//   console.log("Your grade in computer is B and your percentage is 80% ");
// } else if (computer === "c" || computer === "C") {
//   console.log("Your grade in computer is C and your percentage is 70%");
// } else if (computer === "D" || computer === "d") {
//   console.log("Your grade in computer is D and your percentage is 60%");
// } else if (computer === "E" || computer === "e") {
//   console.log("Your grade in computer is E and your percentage is 50%");
// } else if (computer === "F" || computer === "f") {
//   console.log("Your grade in computer is F and your percentage is 40%");
// } else {
//   console.log("Invalid mark");
// }

// if (biology === "a" || biology == "A") {
//   console.log("Your grade in biology is A and your percentage is 90% ");
// } else if (biology === "b" || biology === "B") {
//   console.log("Your grade in biology is B and your percentage is 80% ");
// } else if (biology === "c" || biology === "C") {
//   console.log("Your grade in biology is C and your percentage is 70%");
// } else if (biology === "D" || biology === "d") {
//   console.log("Your grade in biology is D and your percentage is 60%");
// } else if (biology === "E" || biology === "e") {
//   console.log("Your grade in biology is E and your percentage is 50%");
// } else if (biology === "F" || biology === "f") {
//   console.log("Your grade in biology is F and your percentage is 40%");
// } else {
//   console.log("Invalid mark");
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 15 <===

// var month = Number(window.prompt("Enter your month number"));

// switch (month % 2 == 0) {
//   case true:
//     console.log("The month has 30 days");
//     break;
//   case false:
//     console.log("The month is not 31 days");
//     break;
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 16 <===

// var character = window.prompt("Enter your character");
// switch (character) {
//   case "a":
//   case "A":
//   case "e":
//   case "E":
//   case "i":
//   case "I":
//   case "o":
//   case "O":
//   case "u":
//   case "U":
//     console.log("The character is a vowel");
//     break;
//   default:
//     console.log("The character is a consonant");
//     break;
// }
// ***********************************************************
// ***********************************************************
//              ===> TASK 17 <===

// var num1 = Number(window.prompt("Enter your first number"));
// var num2 = Number(window.prompt("Enter your second number"));

// switch (num1 > num2) {
//   case true:
//     console.log("The first number is greater than the second number");
//     break;
//   case false:
//     console.log("The second number is not greater than the first number");
//     break;
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 18 <===

// var num = Number(window.prompt("Enter your number"));

// switch (num % 2 == 0) {
//   case true:
//     console.log("The number is even");
//     break;
//   case false:
//     console.log("The number is odd");
//     break;
// }

// ***********************************************************

// ***********************************************************
//              ===> TASK 19 <===

// var num = Number(window.prompt("Enter your number"));

// switch (true) {
//   case num == 0:
//     console.log("The number is zero");
//     break;
//   case num > 0:
//     console.log("The number is positive");
//     break;
//   case num < 0:
//     console.log("The number is negative");
//     break;
// }
// ***********************************************************

// ***********************************************************
//              ===> TASK 20 <===

// var num1 = Number(window.prompt("Enter your first number"));
// var res = window.prompt("Enter your operation symbol");
// var num2 = Number(window.prompt("Enter your second number"));
// switch (res) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;
//   case "%":
//     console.log(num1 % num2);
//     break;
//   default:
//     console.log("Invalid operation");
//     break;
// }

// ***********************************************************

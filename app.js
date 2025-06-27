// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var user_input = Number(prompt("Enter a number"));

document.write("Number :" + user_input + "<br>");

var roundNmuber = Math.round(user_input);
document.write("Round of value :" + roundNmuber + "<br>");

var floorNmuber = Math.floor(user_input);
document.write("Floor value :" + floorNmuber + "<br>");

var ceilNmuber = Math.ceil(user_input);
document.write("Ceil value :" + ceilNmuber + "<br>");



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var user_input1 = Number(prompt("Enter a negative float number"));

document.write("Number: " + user_input1 + "<br>");

var roundNumber1 = Math.round(user_input1);
document.write("Round of value: " + roundNumber1 + "<br>");

var floorNumber2 = Math.floor(user_input1);
document.write("Floor value: " + floorNumber2 + "<br>");

var ceilNumber2 = Math.ceil(user_input1);
document.write("Ceil value: " + ceilNumber2 + "<br>");



// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = +prompt("Enter a number");
var absoluteNumber = Math.abs(num);
document.write("The absolute value of " + num + " is " + absoluteNumber);



// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

var dicNumber = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + dicNumber);



// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in yourbrowser

var toss = Math.floor(Math.random() * 2) + 1; // 1 or 2

document.write("Toss value: " + toss + "<br>");

if (toss === 1) {
    document.write("Random coin value is Heads");
} else {
    document.write("Random coin value is Tails");
}


// 6. Write a program that shows a random number between 1 and 100 in your browser.

var userNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + userNumber);


// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


var userInput_weight = prompt("Enter your weight (50, 50kgs, 50.2kgs, 50.2kilograms):");

var user_weight = parseFloat(userInput_weight);

document.write("The weight of user is " + user_weight + " kilograms")


// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret number, congratulate the user.

var user_input = Number(prompt("Enter number from 1 to 10"));
var randomSecretNumber = Math.floor(Math.random() * 10) + 1;
if (randomSecretNumber == user_input) {
    alert("Congratulation! you guessed the number");
}   else {
    alert("Sorry, you did not guess the number. The secret number was " + randomSecretNumber);
}

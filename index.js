"use strict";
// Question 01
let greeting;
greeting = "Hello, World!";
console.log(greeting);
//Question 02
let num1 = 5;
let num2 = 7;
let sum = num1 + num2;
console.log(sum);
let difference = num1 - num2;
console.log(difference);
let product = num1 * num2;
console.log(product);
let quotient = num1 / num2;
console.log(quotient);
//Question 03
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(`After swapping values a = ${a} and b = ${b}`);
//Question 04
let message;
message = 5; // (We cannot assign a number to a string type variable)
//Question 05
let x = 16;
let y = 4;
console.log(x % y);
//Question 06
let increment = 5;
console.log("increment by using ++ ", increment++);
console.log("increment by using += ", increment += 1);
//Question 07
let c = true;
let d = false;
let e = true;
console.log(c || d || e);
console.log(c && d && e);
console.log(!(c || d || e));
//Question 08
let num = 10;
console.log("Result of num+=2, when num = 10 is ", num += 2);
console.log("Result of num-=2, when num = 12 is ", num -= 2);
console.log("Result of num*=2, when num = 10 is ", num *= 2);
console.log("Result of num/=2, when num = 20 is ", num /= 2);
//Question 09
let n = 150;
if (n % 2 == 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}
//Question 10
let age = 10;
if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}
//Question 11
let score = 30;
if (score >= 85) {
    console.log("Your grade is A");
}
else if (score >= 70 && score < 85) {
    console.log("Your grade is B");
}
else if (score >= 60 && score < 70) {
    console.log("Your grade is C");
}
else if (score >= 50 && score < 60) {
    console.log("Your grade is D");
}
else {
    console.log("Your grade is F");
}
//Question 12
let f = 4;
let g = 7;
let h = 9;
if (f > g && f > h) {
    console.log("f is the maximum number");
}
else if (g > f && g > h) {
    console.log("g is the maximum number");
}
else {
    console.log("h is the maximum number");
}
//Question 13
let year = 2022;
if (year % 4 == 0 && year % 100 != 0) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
}
//Question 14
let temperature = 132;
let celsius = ((temperature - 32) * 5 / 9);
console.log(`Temperature in Celsius is ${celsius}`);
//Question 15
let number = -2.59;
if (number > 0) {
    console.log(`${number} is a positive number`);
}
else if (number < 0) {
    console.log(`${number} is a negative number`);
}
else {
    console.log(`${number} is zero`);
}
//Question 16
let Num = 9;
for (let i = 1; i <= 10; i++) {
    let result;
    if (i === 1) {
        result = Num;
    }
    else {
        result = Num * i;
    }
    console.log(`${Num} * ${i} = ${result}`);
}

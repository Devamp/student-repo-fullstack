/** Exercise 01 - Fizzbuzz

Author: Devam Patel
Date: 1/15/24
Homework 1

Write a program that writes all the numbers from 1 to 100, with some exceptions: 
- For numbers divisible by 3, print “fizz” 
- For numbers divisible by 5 (but not 3), print “buzz” 
- For numbers divisible by 3 and 5, print “fizzbuzz”

Use console.log() to write the proper output to the command line.

**/

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    const divBy3 = i % 3 == 0;
    const divBy5 = i % 5 == 0;

    if (divBy3 && divBy5) {
      console.log("fizzbuzz");
    } else if (divBy3) {
      console.log("fizz");
    } else if (divBy5) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizzbuzz();

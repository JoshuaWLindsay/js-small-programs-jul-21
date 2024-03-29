const readline = require('readline-sync');

function prompt(string) {
  console.log(`=> ${string}`);
}

// function isOdd(num) {
//   return (Math.abs(num) % 2 === 1);
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// function oddNum(beg, end) {
//   for (let i = beg; i <= end; i++) {
//     if (i % 2 === 1) {
//       console.log(i);
//     }
//   }
// }

// oddNum(1, 99);

// function evenNum(beg, end) {
//   for (let i = beg; i <= end; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// evenNum(1, 99);

// function roomArea() {
//   prompt(`Would you like to enter your measurements in feet or meters?`);
//   let feetOrMeters = readline.question().toLowerCase();

//   if (feetOrMeters[0] === 'f') {
//     prompt(`What is the length of your room in feet?`);
//     let length = readline.question();
    
//     prompt(`What is the width of your room in feet?`);
//     let width = readline.question();
  
//     let areaFeet = (length * width).toFixed(2);
//     const METERS_IN_FEET = 10.7639;
//     let areaMeters = (areaFeet / METERS_IN_FEET).toFixed(2); 
  
//     prompt(`The area of your room is ${areaFeet} square feet (${areaMeters} square meters)`);
  
//   } else if (feetOrMeters[0] === 'm') {
//     prompt(`What is the length of your room in meters?`);
//     let length = readline.question();
    
//     prompt(`What is the width of your room in meters?`);
//     let width = readline.question();

//     let areaMeters = (length * width).toFixed(2);
//     const METERS_IN_FEET = 10.7639;
//     let areaFeet = (areaMeters * METERS_IN_FEET).toFixed(2); 

//     prompt(`The area of your room is ${areaMeters} square meters (${areaFeet} square feet)`);
//   }
// }

// roomArea();

// function tipCalc() {
//   prompt(`What is the bill amount?`);
//   let billAmount = Number.parseFloat(readline.question());

//   prompt(`What is the tip percentage?`);
//   let tipPerc = Number.parseFloat(readline.question());

//   let tip = billAmount * (tipPerc / 100);

//   let total = billAmount + tip;

//   prompt(`The tip is $${tip.toFixed(2)}`);
//   prompt(`The total is $${total.toFixed(2)}`);
// }

// tipCalc();

// function sumOrProduct() {
//   prompt(`Please enter an integer greater than 0:`);
//   let integer = parseFloat(readline.question());

//   prompt(`Enter 's' to compute the sum, or 'p' to compute the product.`);
//   let operation = readline.question();

//   while (operation !== 's' || operation !== 'p') {
//     if (operation === 's') {
//       let sum = 0;
//       for (let i = 1; i <= integer; i++) {
//         sum += i;
//       }
//       prompt(`The sum of integers between 1 and ${integer} is ${sum}.`);
//       break;
//     } else if (operation === 'p') {
//       let product = 1;
//       for (let i = 1; i <= integer; i++) {
//         product *= i;
//       }
//       prompt(`The product of integers between 1 and ${integer} is ${product}.`);
//       break;
//     } else {
//       prompt(`Oops. Unknown operation.`);
//       prompt(`Enter 's' to compute the sum, or 'p' to compute the product.`);
//       operation = readline.question();
//     }
//   }
// }

// sumOrProduct();

// function shortLongShort(str1, str2) {
//   if (str1.length < str2.length) {
//     return str1 + str2 + str1;
//   } else
//   if (str2.length < str1.length) {
//     return str2 + str1 + str2;
//   }
// }
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// function isLeapYear(year) {
//   if (year % 100 === 0 && year % 400 !== 0) {
//     return false;
//   } else
//   if (year % 4 !== 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// function isLeapYear(year) {
//   if (year < 1752) {
//     return year % 4 === 0;
//   } else {
//     if (year % 100 === 0 && year % 400 !== 0) {
//       return false;
//     } else
//     if (year % 4 !== 0) {
//       return false;
//     } else {
//       return year % 4 === 0;
//     }
//   }
// }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true

// function multisum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// function utf16Value(string) {
//   let sum = 0;
//   for (let i = 0; i < string.length; i++) {
//     sum += string.charCodeAt(i);
//   }
//   return sum;
// }

// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

// function greetings(arrayName, objectTitle) {
//   let name = arrayName.join(' ');
//   let title = Object.values(objectTitle).join(' ');

//   return `Hello, ${name}! Nice to have a ${title} around.`;
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// function greetUser() {
//   prompt(`What is your name?`);
//   let name = readline.question();

//   if (name.endsWith('!')) {
//     name = name.slice(0, -1);
//     prompt(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
//   } else {
//   prompt(`Hello ${name}.`);
//   }
// }

// greetUser();

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// let multiply = (num1, num2) => num1 * num2;

// console.log(multiply(5, 3) === 15); // logs true

// let square = (num1) => num1 * num1;

// function exponential(num, power) {
//   if (power === 1) {
//     return num;
//   } else if (power === 0) {
//     return 1;
//   }

//   let solution = multiply(num, num);

//   for (let i = 2; i < power; i++) {
//     solution = multiply(solution, num);
//   }

//   return solution;
// }

// console.log(exponential(5, 0) === 1); // logs true
// console.log(exponential(-4, 4) === 256); // logs true

// function operations() {
//   prompt(`Enter the first number:`);
//   let num1 = parseFloat(readline.question());

//   prompt(`Enter the second number:`);
//   let num2 = parseFloat(readline.question());

//   let sum = num1 + num2;
//   let difference = num1 - num2;
//   let product = num1 * num2;
//   let quotient = num1 / num2;
//   let remainder = num1 % num2;
//   let exponent = num1 ** num2;

//   prompt(`${num1} + ${num2} = ${sum}`);
//   prompt(`${num1} - ${num2} = ${difference}`);
//   prompt(`${num1} * ${num2} = ${product}`);
//   prompt(`${num1} / ${num2} = ${Math.floor(quotient)}`);
//   prompt(`${num1} % ${num2} = ${remainder}`);
//   prompt(`${num1} ** ${num2} = ${exponent}`);
// }

// operations();

// function penultimate(string) {
//   let array = string.split(' ');
//   return array[array.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// function middleWord(string) {
//   let array = string.split(' ');

//   if (array.length % 2 === 1) {
//     let index = (array.length - 1) / 2;
//     return array[index];
//   } else {
//     let index = array.length / 2;
//     return `${array[index - 1]} ${array[index]}`;
//   }
// }

// console.log(middleWord('Hello my name is Bob.') === 'name');
// console.log(middleWord('Hello my other name is Bob.') === 'other name');

// function xor(value1, value2) {
//   if ((value1 === 'true' && value2 === 'true') ||
//       (value1 === 'false' && value2 === 'false')) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// function oddities(array) {
//   let oddArray = array.filter((element, index) => {
//     if (index % 2 === 0) {
//       return element;
//     }
//   });
//   // let newArray = [];
//   // for (let i = 0; i < array.length; i += 2) {
//   //   newArray.push(array[i]);
//   // }
//   // return newArray;
//   return oddArray;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// function hexadecimalToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15
//   };
//   let sign = 1;
//   let array = string.split('').map(char => DIGITS[char.toUpperCase()]);
//   if (string[0] === '-') {
//     sign = -1;
//     array[0] = 0;
//   } else if (string[0] === '+') {
//     array[0] = 0;
//   }
//   let number = 0;
//   array.forEach((element, index) => {
//       number += (element * (16 ** (array.length - 1 - index)));
//       // Change base 16 to base 10 for decimal
//   });
//   console.log(array);
//   return number * sign;
// }

// console.log(hexadecimalToInteger("-4321") === -4321); // logs true
// console.log(hexadecimalToInteger("+570") === 570); // logs true
// console.log(hexadecimalToInteger('4D9f') === 19871); // logs true

// function integerToString(integer) {
//   const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   let string = [];

//   let placeValue = 1;

//   while (placeValue <= integer) {
//     placeValue *= 10;
//   }

//   for (placeValue; placeValue >= 1; placeValue /= 10) {
//     let value = Math.floor(integer / placeValue);
//     string.push(DIGITS[value]);
//     integer = integer - (value * placeValue);
//   }

//   if (string.length > 1) {
//     string.shift();
//   }

//   return string.join('');
// }

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(1));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"

// function integerToString(integer) {
//   const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   let string = [];

//   let sign = Math.sign(integer);

//   integer = Math.abs(integer);

//   let placeValue = 1;

//   while (placeValue <= integer) {
//     placeValue *= 10;
//   }

//   for (placeValue; placeValue >= 1; placeValue /= 10) {
//     let value = Math.floor(integer / placeValue);
//     string.push(DIGITS[value]);
//     integer = integer - (value * placeValue);
//   }

//   if (string.length > 1) {
//     string.shift(1, 2);
//   }

//   switch (sign) {
//     case 1:
//       string.unshift('+');
//       break;
//     case 0:
//       break;
//     case -1:
//       string.unshift('-');
//       break;
//   }

//   return string.join('');
// }

// console.log(integerToString(4321));        // "+4321"
// console.log(integerToString(-123));           // "-123"
// console.log(integerToString(0));        // "0"

// function crunch(string) {
//   let array = string.split('');
//   let condensed = '';
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== array[i - 1]) {
//       condensed += array[i];
//     } else {
//       continue;
//     }
//   }
//   return condensed;
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// function logInBox(string, maxWidth = string.length) {
//   // if (string.length > maxWidth) {
//   //   string = string.slice(0, maxWidth);
//   // }
//   let header = ['+'];
//   let secondLine = ['|'];
//   for (let i = 0; i < maxWidth + 2; i++) {

//     header.push('-');
//     secondLine.push(' ');
//   }

//   header.push('+');
//   secondLine.push('|');

//   console.log(header.join(''));
//   console.log(secondLine.join(''));

//   for (let i = 0; i < string.length; i++) {
//     let substring = '';
//     for (let i = 0; i < maxWidth; i++) {
//       substring += string[i];
//     }
//     console.log(`| ${substring} |`);
//     string = string.slice(maxWidth);
//   }

//   console.log(secondLine.join(''));
//   console.log(header.join(''));
// }

// logInBox('To boldly go where no one has gone before.', 10);

// function logInBox(string, maxWidth = string.length) {
//   // if (string.length > maxWidth) {
//   //   string = string.slice(0, maxWidth);
//   // }
//   let header = ['+'];
//   let secondLine = ['|'];
//   for (let i = 0; i < maxWidth + 2; i++) {

//     header.push('-');
//     secondLine.push(' ');
//   }

//   header.push('+');
//   secondLine.push('|');

//   console.log(header.join(''));
//   console.log(secondLine.join(''));

//   for (let i = maxWidth; i < string.length + maxWidth; i += 0) {
//     let substring = string.substring(0, i);
//     while (substring.length < maxWidth) {
//       substring += ' ';
//     }
//     console.log(`| ${substring} |`);
//     string = string.slice(maxWidth);
//   }

//   console.log(secondLine.join(''));
//   console.log(header.join(''));
// }

// logInBox('To boldly go where no one has gone before.', 10);

// function stringy(num) {
//   let string = '1';
//   for (let i = num - 1; i > 0; i--) {
//     string += (Math.floor(Math.random() * 2));
//   }
//   console.log(string);
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// function stringy(num) {
//   let string = '';
//   for (let i = 0; i < num; i++) {
//     if (i % 2 === 0) {
//       string += '1';
//     }
//     else {
//       string += '0';
//     }
//   }
//   console.log(string);
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// function findFibonacciIndexByLength(digits) {
//   let number = [1n, 1n];
//   let lastElement = number[number.length - 1];
//   let secondToLast = number[number.length - 2];
//   let newElement = lastElement + secondToLast;
//   while (String(lastElement).length < digits) {
//     number.push(newElement);
//     lastElement = number[number.length - 1];
//     secondToLast = number[number.length - 2];
//     newElement = lastElement + secondToLast;
//   }
//   return BigInt(number.length);
// }

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

// function triangle(integer) {
//   for (let i = 1; i <= integer; i++) {
//     console.log(' '.repeat(integer - i) + '*'.repeat(i));
//   }
// }

// triangle(5);
// triangle(9);

// function madlibs() {
//   prompt(`Enter a noun:`);
//   let noun = readline.question();
//   prompt(`Enter a verb:`);
//   let verb = readline.question();
//   prompt(`Enter an adjective:`);
//   let adjective = readline.question();
//   prompt(`Enter an adverb:`);
//   let adverb = readline.question();

//   console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
//   console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
//   console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
// }

// madlibs();

// function doubleNumber(number) {
//   let numStr = String(number);
//   if (numStr.length % 2 === 0) {
//     return (numStr.slice(0, numStr.length / 2)) ===
//            (numStr.slice(numStr.length / 2));
//   } else {
//     return false;
//   }
// }

// function twice(number) {
//   if (doubleNumber(number)) {
//     return number;
//   } else {
//     return number * 2;
//   }
// }

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

// function getGrade(grade1, grade2, grade3) {
//   let score = (grade1 + grade2 + grade3) / 3;

//   if (score >= 90) {
//     return 'A';
//   } else if (score >= 80) {
//     return 'B';
//   } else if (score >= 70) {
//     return 'C';
//   } else if (score >= 60) {
//     return 'D';
//   } else if (score < 60) {
//     return 'F';
//   }
// }

// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

// function cleanUp(string) {
//   let newString = string.replace(/[^a-z]/gi, ' ').replace(/\s+/gi, ' ');
//   return newString;
// }

// cleanUp("---what's my +*& line?");    // " what s my line "

// function century(year) {
//   let century = Math.floor((year - 1) / 100) + 1;

//   if (century % 100 >= 11 && century % 100 <= 13) {
//     century += 'th';
//   } else if (century % 10 === 1) {
//     century += 'st';
//   } else if (century % 10 === 2) {
//     century += 'nd';
//   } else if (century % 10 === 3) {
//     century += 'rd';
//   } else {
//     century += 'th';
//   }

//   return century;
// }

// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"
// century(13456);       // "135th"

// let age = Math.floor(Math.random() * 101) +20;

// prompt(`Teddy is ${age} years old!`);

// function sixthNumber() {
//   let numberArray = [];
//   prompt(`Enter the 1st number:`);
//   numberArray.push(readline.question());
//   prompt(`Enter the 2nd number:`);
//   numberArray.push(readline.question());
//   prompt(`Enter the 3rd number:`);
//   numberArray.push(readline.question());
//   prompt(`Enter the 4th number:`);
//   numberArray.push(readline.question());
//   prompt(`Enter the 5th number:`);
//   numberArray.push(readline.question());
//   prompt(`Enter the last number:`);
//   let lastNumber = readline.question();

//   if (numberArray.includes(lastNumber)) {
//   prompt(`The number ${lastNumber} appears in ${numberArray.join()}.`);
//   } else {
//   prompt(`The number ${lastNumber} does not appear in ${numberArray.join()}.`);
//   }
// }

// sixthNumber();

// function whenRetire() {
//   prompt(`What is your age?`);
//   let age = readline.question();
//   prompt(`At what age would you like to retire?`);
//   let retireAge = readline.question();

//   let currentYear = new Date().getFullYear();
//   let yearsOfWork = retireAge - age;

//   prompt(`It's ${currentYear}. You will retire in ${currentYear + yearsOfWork}.`);
//   prompt(`You have only ${yearsOfWork} years of work to go!`);
// }

// whenRetire();

// function isPalindrome(string) {
//   let reverse = string.split('').reverse().join('');

//   return (string === reverse && string.length > 1);
// }

// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

// function isRealPalindrome(string) {
//   let alphaNum = [];

//   for (let i = 0; i < string.length; i++) {
//     if (string[i].match(/^[a-z0-9]+$/i)) {
//       alphaNum.push(string[i]);
//     }
//   }

//   string = alphaNum.join('').toLowerCase();
//   return string === string.split('').reverse().join('');
// }

// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false

// function isPalindromicNumber(number) {
//   let numStr = String(number);
//   let reverse = numStr.split('').reverse().join('');

//   return numStr === reverse;
// }

// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

// function runningTotal(array) {
//   let runningTotal = 0;
//   // let newArray = [];
//   // for (let i = 0; i < array.length; i++) {
//   //   runningTotal += array[i];
//   //   newArray.push(runningTotal);
//   // }
//   array = array.map(element => {
//     return runningTotal += element;
//   })
//   return array;
//   // return newArray;
// }

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// function wordSizes(string) {
//   let wordArray = string.split(' ');

//   wordArray = wordArray.map(element => element.length);
//   let wordLengths = {};
//   wordArray.forEach(element => {
//     if (wordLengths[element]) {
//       wordLengths[element] += 1;
//     } else if (element === 0) {
//     } else {
//       wordLengths[element] = 1;
//     }
//   })
//   console.log(wordLengths);
// }

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}

// function wordSizes(string) {
//   let wordArray = string.split(' ');

//   wordArray = wordArray.map(element => {
//     element = element.replace(/[^a-z]/gi, '');
//     return element.length;
//   });
//   let wordLengths = {};
//   wordArray.forEach(element => {
//     if (wordLengths[element]) {
//       wordLengths[element] += 1;
//     } else if (element === 0) {
//       return false;
//     } else {
//       wordLengths[element] = 1;
//     }
//   })
//   console.log(wordLengths);
// }

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');                                            // {}

// function swap(string) {
//   let wordArray = string.split(' ');
//   wordArray = wordArray.map(element => {
//     element = element.split('');
//     let first = element.shift();
//     let last = element.pop();
//     element.push(first);
//     element.unshift(last);
//     return element = element.join('');
//   })
//   return wordArray.join(' ');
// }

// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"

// function dms(degree) {
//   while (degree > 360) {
//     degree = degree - 360;
//   }
//   while (degree < 0) {
//     degree = degree + 360;
//   }
//   let minute = (degree - Math.floor(degree)) * 60;
//   let roundMinute = String(Math.floor(minute)).padStart(2, 0);
//   let second = String(Math.floor((minute - Math.floor(minute)) * 60)).padStart(2, 0);
//   if (degree === 360) {
//     console.log(`360°00'00" or 0°00'00"`);
//   } else {
//     console.log(`${Math.floor(degree)}\xB0${roundMinute}'${second}"`);
//   }
// }

// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
// dms(-1);   // 359°00'00"
// dms(400);  // 40°00'00"
// dms(-40);  // 320°00'00"
// dms(-420); // 300°00'00"

// function union(array1, array2) {
//   let combined = array1.slice();
//   array2.forEach(element => {
//     if (!array1.includes(element)) {
//       combined.push(element);
//     }
//   })
//   return combined;
// }

// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// function halvsies(array) {
//   let newArray = []
//   if (array.length % 2 === 0) {
//     newArray = [array.slice(0, array.length / 2), array.slice(array.length / 2)];
//   } else {
//     newArray = [array.slice(0, (array.length + 1) / 2), array.slice((array.length + 1) / 2)];
//   }
//   return newArray;
// }

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

// function findDup(array) {
//   array.sort();
//   let repeat;
//   array.forEach(element => {
//     if (element === repeat) {
//       return element;
//     } else {
//       repeat = element;
//     }
//   })
// }

// findDup([1, 5, 3, 1]);                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

// function interleave(array1, array2) {
//   let newArray = [];
//   let count = 0;
//   while (array1.length > 0 || array2.length > 0) {
//     if (count % 2 === 0) {
//       newArray.push(array1.shift());
//       count += 1;
//     } else {
//       newArray.push(array2.shift());
//       count += 1;
//     }
//   }
//   return newArray;
// }

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// function multiplicativeAverage(array) {
//   let product = 1;
//   array.forEach(element => product *= element);
//   let average = product / array.length;
//   return String(average.toFixed(3));
// }

// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// function multiplyList(array1, array2) {
//   let productArray = [];
//   array1.forEach((element, index) => {
//     productArray.push(element * array2[index]);
//   })
//   return productArray;
// }

// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// function digitList(integer) {
//   let digits = String(integer).split('');
//   digits = digits.map(element => Number(element));
//   console.log(digits);
// }

// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

// function countOccurrences(array) {
//   let objects = {};
//   array.forEach(element => {
//     if (objects[element]) {
//       objects[element] += 1;
//     } else {
//     objects[element] = 1;
//     }
//   });
//   for (const [key, value] of Object.entries(objects)) {
//     console.log(`${key} => ${value}`);
//   }
// }

// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output -- your output sequence may be different
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2

// function average(array) {
//   let sum = 0;
//   // array.forEach(element => sum += element);
//   sum = array.reduce((previousValue, currentValue) => previousValue + currentValue,
//   sum);
//   let average = Math.floor(sum / array.length);
//   console.log(average);
// }

// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40

// function timeOfDay(minutes) {
//   let hrCount;
//   if (minutes < 0) {
//     hrCount = 23;

//     while (Math.abs(minutes) >= 60) {
//       minutes += 60;
//       hrCount -= 1;
//     }
  
//     while (hrCount < 0) {
//       hrCount += 24;
//     }

//     minutes = 60 + minutes;
  
//   } else {
//     hrCount = 0;

//     while (Math.abs(minutes) >= 60) {
//       minutes -= 60;
//       hrCount += 1;
//     }

//     while (hrCount > 24) {
//       hrCount -= 24;
//     }
//   }

//   return `${String(hrCount).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
// }

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// function afterMidnight(time) {
//   let hours = Number(time.slice(0, 2));
//   if (hours === 24) hours = 0;
//   let minutes = Number(time.slice(3));
//   return hours * 60 + minutes;
// }

// function beforeMidnight(time) {
//   let hours = 24 - Number(time.slice(0, 2));
//   if (hours === 24) hours = 0;
//   let minutes = Number(time.slice(3));
//   return hours * 60 - minutes;
// }

// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);

// function repeater(string) {
//   let newWord = '';
//   for (let i = 0; i < string.length; i++) {
//     newWord += string[i] + string[i];
//   }
//   return newWord;
// }

// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

// function doubleConsonants(string) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   string = string.split('').map(letter => {
//     if (vowels.includes(letter)) {
//       return letter;
//     } else if (letter.match(/[A-Za-z]/g)) {
//       return letter + letter;
//     } else {
//       return letter;
//     }
//   }).join('');
//   console.log(string);
// }

// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""

// function reverseNumber(integer) {
//   let reverse = Number(String(integer).split('').reverse().join(''));
//   return reverse;
// }

// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
// reverseNumber(1);        // 1

// function centerOf(string) {
//   if (string.length % 2 === 0) {
//     return string.slice(string.length / 2 - 1, string.length / 2 + 1);
//   } else {
//     return string[(string.length - 1) / 2];
//   }
// }

// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// function negative(number) {
//   (number < 0) ? console.log(number): console.log(number * -1);
// }

// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

// function sequence(count) {
//   let array = [];
//   for (let i = 1; i <= count; i++) {
//     array.push(i);
//   }
//   return array;
// }

// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]

// function swapName(name) {
//   let nameArray = name.split(' ');
//   let lastName = nameArray.pop();
//   console.log(`${lastName}, ${nameArray.join(' ')}`);
// }

// swapName('Joe Roberts');    // "Roberts, Joe"
// swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"

// function sequence(count, start) {
//   let array = [];
//   for (let i = 1; i <= count; i++) {
//     array.push(start * i);
//   }
//   return array;
// }

// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []

// function reverseSentence(string) {
//   console.log(string.split(' ').reverse().join(' '));
// }

// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"

// function reverseWords(string) {
//   let array = string.split(' ');
//   array = array.map(word => {
//     if (word.length >= 5) {
//       return word.split('').reverse().join('');
//     } else {
//       return word;
//     }
//   });
//   return array.join(' ');
// }

// reverseWords('Professional');             // "lanoisseforP"
// reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
// reverseWords('Launch School');            // "hcnuaL loohcS"

// function reverse(array) {
//   let leftIndex = 0;
//   let rightIndex = array.length - 1;

//   while (leftIndex < array.length / 2) {
//     [array[leftIndex], array[rightIndex]] =
//     [array[rightIndex], array[leftIndex]];
//     leftIndex += 1;
//     rightIndex -= 1;
//   }
//   return array;
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

// function isBalanced(string) {
//   let array = string.split('');
//   let leftParenthesis = [];
//   let rightParenthesis = [];
//   let balanced = false;
//   array.forEach((char, index) => {
//     if (char === '(') {
//       leftParenthesis.push(index);
//     } else if (char === ')') {
//       rightParenthesis.push(index);
//     }
//   });
//   if (leftParenthesis.length === rightParenthesis.length) {
//     balanced = true;
//   }
//   for (let i = 0; i < rightParenthesis.length; i++) {
//     if (leftParenthesis[i] >= rightParenthesis[i]) {
//       balanced = false;
//       break;
//     }
//   }
//   return balanced;
// }

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// function sum(integer) {
//   let digits = String(integer).split('');
//   let sum = 0;
//   digits.forEach(digit => {
//     digit = Number(digit);
//     sum += digit;
//   })
//   console.log(sum);
// }

// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

// const writtenNumbers = ['zero', 'one', 'two', 'three', 'four', 'five',
// 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
// 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
// 'nineteen'];

// function alphabeticNumberSort(array) {
//   writtenNumbers.forEach((number, index) => {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === index) {
//         array[i] = number;
//       }
//     }
//   });
//   array.sort();
//   writtenNumbers.forEach((number, index) => {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === number) {
//         array[i] = index;
//       }
//     }
//   });
//   console.log(array);
// }

// alphabeticNumberSort(
//    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// function multiplyAllPairs(array1, array2) {
//   let productArray = [];
//   array1.forEach(integer1 => {
//     array2.forEach(integer2 => {
//       productArray.push(integer2 * integer1);
//     })
//   })
//   return productArray.sort((a, b) => a - b);
// }

// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// function leadingSubstrings(string) {
//   // let subArray = [];
//   // let subString = '';
//   // for (let char = 0; char < string.length; char++) {
//   //   subString += string[char];
//   //   subArray.push(subString);
//   // }
//   // console.log(subArray);

//   let charArray = string.split('');
//   let subString = ''
//   let subArray = charArray.map(char => {
//     subString += char;
//     return subString;
//   })

//   return subArray;
// }

// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// function substrings(string) {
//   let substringArray = [];
//   for (let char = 0; char < string.length; char++) {
//     let subString = string.substring(char);
//     let array = leadingSubstrings(subString);
//     substringArray.push(array);
//   }
//   return substringArray.flat();
// }

// substrings('abcde');

// // returns
// // [ "a", "ab", "abc", "abcd", "abcde",
// //   "b", "bc", "bcd", "bcde",
// //   "c", "cd", "cde",
// //   "d", "de",
// //   "e" ]

// function palindromes(string) {
//   return substrings(string).filter(isPalindrome);
// }

// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye');
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// palindromes('knitting cassettes');
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// function sumOfSums(array) {
//   let sum = 0;
//   for (let i = 1; i <= array.length; i++) {
//     sum += array.slice(0, i).reduce((accum, current) => accum + current);
//   }
//   return sum;
// }

// sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35

// function buyFruit(array) {
//   let newArray = [];
//   array.forEach(item => {
//     for (let i = 1; i <= item[1]; i++) {
//       newArray.push(item[0]);
//     }
//   });
//   return newArray;
// }

// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// function transactionsFor(value, array) {
//   return array.filter(object => object.id === Number(value));
// }

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// transactionsFor(101, transactions);
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]

// function isItemAvailable(value, array) {
//   let valueArray = transactionsFor(value, array);
//   let sum = 0;
//   valueArray.forEach(object => {
//     if (object.movement === 'in') sum += object.quantity;
//     else if (object.movement === 'out') sum -= object.quantity;
//   });
//   return sum > 0;
// }

// isItemAvailable(101, transactions);     // false
// isItemAvailable(103, transactions);     // false
// isItemAvailable(105, transactions);     // true

// function isUppercase(string) {
//   return string === string.toUpperCase();
// }

// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true

// function removeVowels(array) {
//   return array.map(string => {
//     return string.split('').filter(char => !['a', 'e', 'i', 'o', 'u']
//     .includes(char.toLowerCase())).join('');
//   });
// }

// function removeVowels(strings) {
//   return strings.map(string => string.replace(/[aeiou]/gi, ""));
// }

// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// function letterCaseCount(string) {
//   let object = {lowercase: 0, uppercase: 0, neither: 0};

//   string.split('').forEach(char => {
//     if (/[a-z]/g.exec(char) !== null) object.lowercase++;
//     else if (/[A-Z]/g.exec(char) !== null) object.uppercase++;
//     else object.neither++;
//   })

//   return object;
// }

// letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

// function wordCap(string) {
//   return string.split(' ').map(word => {
//     let wordArray = word.split('');
//     return wordArray.shift().toUpperCase() + wordArray.join('');
//   }).join(' ');
// }

// wordCap('four score and seven');       // "Four Score And Seven"
// wordCap('the javaScript language');    // "The Javascript Language"
// wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

// function swapCase(string) {
//   return string.split('').map(char => {
//     if (/[a-z]/.exec(char) !== null) {
//       return char.toUpperCase();
//     } else if (/[A-Z]/.exec(char) !== null) {
//       return char.toLowerCase();
//     } else {
//       return char;
//     }
//   }).join('');
// }

// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// function staggeredCase(string) {
//   return string.split('').map((char, index) => {
//     if (index % 2 === 0) return char.toUpperCase();
//     else return char.toLowerCase();
//   }).join('');
// }

// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

// function staggeredCase(string) {
//   let count = 0;
//   return string.split('').map((char) => {
//     if (/[a-z]/gi.exec(char) === null) {
//       return char;
//     } else if (count % 2 === 0) {
//       count++;
//       return char.toUpperCase();
//     } else {
//       count++;
//       return char.toLowerCase();
//     }
//   }).join('');
// }

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

// function wordLengths(string) {
//   if (typeof string !== 'string' || string.length === 0) return [];
//   return string.split(' ').map(word => word + ' ' + word.length);
// }

// wordLengths('cow sheep chicken');
// // ["cow 3", "sheep 5", "chicken 7"]

// wordLengths('baseball hot dogs and apple pie');
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// wordLengths("It ain't easy, is it?");
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// wordLengths('Supercalifragilisticexpialidocious');
// // ["Supercalifragilisticexpialidocious 34"]

// wordLengths('');      // []
// wordLengths();        // []

// function searchWord(exp, string) {
//   let regex = new RegExp(exp, 'gi');
//   let count = 0;
//   let stringArray = string.split(' ');
//   stringArray.forEach(word => {
//     if (regex.exec(word) !== null) count++;
//   });
//   console.log(count);
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// searchWord('qui', text);      // 3

// function searchWord(exp, string) {
//   let regex = new RegExp(exp, 'gi');
//   console.log(string.split(' ').map(word => {
//     if (regex.exec(word) !== null) return `**${word.toUpperCase()}**`;
//     else return word;
//   }).join(' '));
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

// searchWord('sed', text);
// // returns
// // "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"

// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   else if (array.length === 0) return array;
//   let rotatedArray = array.slice();
//   let firstElement = rotatedArray.shift();
//   rotatedArray.push(firstElement);
//   return rotatedArray; 
// }

// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

// function rotateRightmostDigits(number, count) {
//   let rightDigits = String(number).slice(-count).split('');
//   let leftDigits = String(number).slice(0, -count);
//   rightDigits = rotateArray(rightDigits).join('');
//   let rotatedNumber = Number(leftDigits + rightDigits);
//   return rotatedNumber;
//   // return Number(String(number).split('').filter((digit, index) => {
//   //   return index !== (String(number).length - count);
//   // }).join('') + String(number)[String(number).length - count]);
// }

// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

// function maxRotation(number) {
//   let numberLength = String(number).length;
//   for (let i = numberLength; i > 0; i--) {
//     number = rotateRightmostDigits(number, i);
//   }
//   return number;
// }

// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

// function minilang(command) {
//   let stack = [];
//   let register = 0;
//   let commandArray = command.split(' ');
//   commandArray.forEach(token => {
//     if (Number.isInteger(+token)) {
//       register = Number(token);
//     }
    
//     switch (token) {
//       case 'PUSH':
//         stack.push(register);
//         break;
//       case 'ADD':
//         register += stack.pop();
//         break;
//       case 'SUB':
//         register -= stack.pop();
//         break;
//       case 'MULT':
//         register *= stack.pop();
//         break;
//       case 'DIV':
//         register /= stack.pop();
//         register = Math.floor(register);
//         break;
//       case 'REMAINDER':
//         register %= stack.pop();
//         break;
//       case 'POP':
//         register = stack.pop();
//         break;
//       case 'PRINT':
//         console.log(register);
//         break;
//       default:
//         break;
//     }
//   })
// }

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

// function wordToDigit(string) {
//   const digitWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
//                'seven', 'eight', 'nine'];
//   let regex = /\w+|\s+|[^\s\w]+/g;
//   let wordsArray = string.match(regex);
//   wordsArray = wordsArray.map(word => {
//     digitWords.forEach((number, index) => {
//       if (word === number) {
//         word = index;
//       }
//     })
//     return word;
//   })
//   console.log(wordsArray.join(''));
// }

// wordToDigit('Please call me at five five five one two three four. Thanks.');
// // "Please call me at 5 5 5 1 2 3 4. Thanks."

function fibonacci(term) {
  let termMinus2 = 1;
  let termMinus1 = 1;
  let termValue = 0;
  if (term === 1 || term === 2) {
    return termValue = 1;
  }
  for (let i = 3; i <= term; i++) {
    termValue = termMinus2 + termMinus1;
    termMinus2 = termMinus1;
    termMinus1 = termValue;
  }
  console.log(termValue);
}

// function fibonacci(nth) {
//   if (nth <= 2) {
//     return 1;
//   }
//   return fibonacci(nth - 1) + fibonacci(nth - 2);
// }

// fibonacci(1);       // 1
// fibonacci(2);       // 1
// fibonacci(3);       // 2
// fibonacci(4);       // 3
// fibonacci(5);       // 5
// fibonacci(12);      // 144
// fibonacci(20);      // 6765

// fibonacci(20);       // 6765
// fibonacci(50);       // 12586269025
// fibonacci(75);       // 2111485077978050

// function letterPercentages(string) {
//   let percentObject = letterCaseCount(string);
//   percentObject.lowercase = (percentObject.lowercase / string.length * 100)
//   .toFixed(2);
//   percentObject.uppercase = (percentObject.uppercase / string.length * 100)
//   .toFixed(2);
//   percentObject.neither = (percentObject.neither / string.length * 100)
//   .toFixed(2);
//   return percentObject;
// }

// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// function triangle(side1, side2, side3) {
//   let triArray = [side1, side2, side3].sort((a, b) => a - b);
//   if (triArray[0] + triArray[1] <= triArray[2] || triArray[0] === 0) {
//     console.log(`invalid`);
//   } else if (side1 === side2 && side2 === side3) {
//     console.log(`equilateral`);
//   } else if (triArray[0] === triArray[1] || triArray[1] === triArray[2]) {
//     console.log(`isosceles`);
//   } else {
//     console.log(`scalene`);
//   }
// }

// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"

// function triAngle(angle1, angle2, angle3) {
//   let triArray = [angle1, angle2, angle3].sort((a, b) => a - b);
//   if (triArray[0] + triArray[1] + triArray[2] !== 180 || triArray[0] === 0) {
//     console.log(`invalid`);
//   } else if (triArray[2] < 90) {
//     console.log(`acute`);
//   } else if (triArray[2] === 90) {
//     console.log(`right`);
//   } else {
//     console.log(`obtuse`);
//   }
// }

// triAngle(60, 70, 50);       // "acute"
// triAngle(30, 90, 60);       // "right"
// triAngle(120, 50, 10);      // "obtuse"
// triAngle(0, 90, 90);        // "invalid"
// triAngle(50, 50, 50);       // "invalid"

// function fridayThe13ths(year) {
//   let count = 0;
//   for (let month = 0; month < 12; month++) {
//     let day = new Date(year, month);
//     day.setDate(13);
//     if (day.getDay() === 5) count++;
//   }
//   return count;
// }

// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

// function repeats(number) {
//   let repeats = false;
//   let digits = String(number).split('').sort((a, b) => a - b);
//   for (let i = 0; i < digits.length; i++) {
//     if (digits[i] === digits[i - 1]) {
//       repeats = true;
//       break;
//     }
//   }
//   return repeats;
// }

// function featured(number) {
//   let featuredNumber = 7;
//   let factor = 1;
//   if (number >= 9876543201) {
//     return `There is no possible number that fulfills those requirements.`;
//   }
//   while (number >= featuredNumber || repeats(featuredNumber)) {
//     featuredNumber = 7 * factor;
//     factor += 2;
//   }
//   return featuredNumber;
// }

// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirements."

// function factorial(number) {
//   let factorial = 1;
//   for (let i = number; i > 0; i--) {
//     factorial *= i;
//   }
//   console.log(factorial);
// }

// factorial(10);

// function sumSquareDifference(count) {
//   let sequence = [];
//   for (let i = count; i > 0; i--) {
//     sequence.push(i);
//   }
//   let squareOfSums = sequence.reduce((a, b) => a + b, 0) ** 2;
//   let sumOfSquares = sequence.map(number => number ** 2);
//   sumOfSquares = sumOfSquares.reduce((a, b) => a + b, 0);
//   let difference = squareOfSums - sumOfSquares;
//   console.log(difference);
// }

// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150

// function compareValues(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function bubbleSort(array) {
//   array.sort(compareValues);
//   console.log(array);
// }

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// function longestSentence(string) {
//   let regex = /[.!?]|[\s\w,'-]+/gi;
//   let sentenceArray = string.match(regex);
//   let longIndex = 0;
//   let length = 0;
//   sentenceArray.forEach((sentence, index) => {
//     let sentenceLength = sentence.trim().split(' ').length;
//     if (sentenceLength > length) {
//       length = sentenceLength;
//       longIndex = index;
//     }
//   })
//   console.log(sentenceArray[longIndex].trim() + sentenceArray[longIndex + 1]);
//   console.log(`The longest sentence has ${length} words.`)
// }

// let longText =
//   'Four score and seven years ago our fathers brought forth on this ' +
//   'continent a new nation, conceived in liberty, and dedicated to the ' +
//   'proposition that all men are created equal. Now we are engaged in a ' +
//   'great civil war, testing whether that nation, or any nation so ' +
//   'conceived and so dedicated, can long endure. We are met on a great ' +
//   'battlefield of that war. We have come to dedicate a portion of that ' +
//   'field, as a final resting place for those who here gave their lives ' +
//   'that that nation might live. It is altogether fitting and proper that ' +
//   'we should do this.';

// let longerText = longText +
//   'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
//   'we can not hallow this ground. The brave men, living and dead, who ' +
//   'struggled here, have consecrated it, far above our poor power to add ' +
//   'or detract. The world will little note, nor long remember what we say ' +
//   'here but it can never forget what they did here. It is for us the ' +
//   'living, rather, to be dedicated here to the unfinished work which ' +
//   'they who fought here have thus far so nobly advanced. It is rather ' +
//   'for us to be here dedicated to the great task remaining before us -- ' +
//   'that from these honored dead we take increased devotion to that ' +
//   'cause for which they gave the last full measure of devotion -- that ' +
//   'we here highly resolve that these dead shall not have died in vain ' +
//   '-- that this nation, under God, shall have a new birth of freedom -- ' +
//   'and that government of the people, by the people, for the people, ' +
//   'shall not perish from the earth.';

// longestSentence(longText);
// // Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
// //
// // The longest sentence has 30 words.

// longestSentence(longerText);
// // It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
// //
// // The longest sentence has 86 words.

// longestSentence("Where do you think you're going? What's up, Doc?");
// // Where do you think you're going?
// //
// // The longest sentence has 6 words.

// longestSentence("To be or not to be! Is that the question?");
// // To be or not to be!
// //
// // The longest sentence has 6 words.

// function transpose(matrix) {
//   let rowLength = matrix[0].length;
//   let transposedMatrix = [];
//   for (let i = 0; i < rowLength; i++) {
//     transposedMatrix.push([]);
//   }
//   matrix.forEach(array => {
//     array.forEach((element, index) => {
//       transposedMatrix[index].push(element);
//     })
//   });
//   return transposedMatrix;
// }

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// const matrix = [
//   [1, 5, 8, 5],
//   [4, 7, 2, 0],
//   [3, 9, 6, 1]
// ];

// let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
// console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

// transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
// transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
// transpose([[1]]);                     // [[1]]

// transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

// function rotate90(matrix) {
//   let rotatedMatrix = transpose(matrix);
//   rotatedMatrix = rotatedMatrix.map(array => array.reverse());
//   return rotatedMatrix;
// }

// let matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// let matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];

// let newMatrix1 = rotate90(matrix1);
// let newMatrix2 = rotate90(matrix2);
// let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// function merge(array1, array2) {
//   let sortAndCombine = [];
//   let index1 = 0;
//   let index2 = 0;
//   if (array1.length === 0) {
//     sortAndCombine = array2;
//   } else if (array2.length === 0) {
//     sortAndCombine = array1;
//   } else {
//     while (index1 < array1.length || index2 < array2.length) {
//       if (array1[index1] <= array2[index2] || index2 === array2.length) {
//       sortAndCombine.push(array1[index1]);
//       index1++;
//       } else if (array2[index2] <= array1[index1] || index1 === array1.length) {
//         sortAndCombine.push(array2[index2]);
//         index2++;
//       } 
//     }
//   }
//   console.log(sortAndCombine);
// }

// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]

// function mergeSort(array) {
//   if (array.length === 1) return array;

//   let subArray1 = array.slice(0, array.length / 2);
//   let subArray2 = array.slice(array.length / 2);
//   subArray1 = mergeSort(subArray1);
//   subArray2 = mergeSort(subArray2);

//   return merge(subArray1, subArray2);
// }

// mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
// mergeSort([5, 3]);                 // [3, 5]
// mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

// function lightsOn(switches) {
//   let lights = [];
//   for (let i = 1; i <= switches; i++) {
//     lights.push([i, 'on']);
//   }
//   for (let i = 2; i <= switches; i++) {
//     lights = lights.map(light => {
//       if (light[0] % i === 0) {
//         if (light[1] === 'on') {
//           light[1] = 'off';
//         } else if (light[1] === 'off') {
//           light[1] = 'on';
//         }
//       }
//       return light;
//     });
//   }
//   lights = lights.filter(light => {
//     return light[1] === 'on';
//   }).map(light => light[0]);
//   console.log(lights);
// }

// lightsOn(5);        // [1, 4]
// // Detailed result of each round for `5` lights
// // Round 1: all lights are on
// // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// function diamond(oddInteger) {
//   for (let i = 1; i <= oddInteger; i += 2) {
//     let repeatedSpace = ' '.repeat((oddInteger - i) / 2);
//     let repeatedAsterisk = '*'.repeat(i);
//     console.log(`${repeatedSpace}${repeatedAsterisk}${repeatedSpace}`);
//   }
//   for (let j = oddInteger - 2; j > 0; j -= 2) {
//     let repeatedSpace = ' '.repeat((oddInteger - j) / 2);
//     let repeatedAsterisk = '*'.repeat(j);
//     console.log(`${repeatedSpace}${repeatedAsterisk}${repeatedSpace}`);
//   }
// }

// diamond(1);
// diamond(3);
// diamond(9);

// const BLOCKS = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu',
//                 'vi', 'ly', 'zm'];

// function isBlockWord(word) {
//   let wordArray = word.toLowerCase().split('');
//   let stack = [];
//   let repeats;

//   wordArray.forEach(letter => {
//     let block = BLOCKS.find(block => block.includes(letter));
//     if (stack.includes(block)) {
//       repeats = true;
//     } else {
//       stack.push(block);
//     }
//   });

//   return !repeats;
// }

// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true

// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true
// console.log(isBlockWord('floW'));       // true
// console.log(isBlockWord('APPLE'));      // false
// console.log(isBlockWord('apple'));      // false
// console.log(isBlockWord('apPLE'));      // false
// console.log(isBlockWord('Box'));        // false

// function star(oddInteger) {
//   let starArray = [];
//   for (let i = 0; i < (oddInteger / 2 - 1); i++) {
//     let firstSpace = ' '.repeat(i);
//     let inBetween = ' '.repeat(((oddInteger - 3) / 2) - i);
//     starArray.push(`${firstSpace}*${inBetween}*${inBetween}*`)
//   }
//   let reversedPattern = starArray.slice().reverse();

//   starArray.push('*'.repeat(oddInteger));

//   starArray = starArray.concat(reversedPattern);

//   starArray.forEach(line => console.log(line));
// }

// star(7);
// star(9);

// let ladder = '';

// ['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
//   if (ladder !== '') {
//     ladder += '-'
//   }

//   ladder += word
// })

// console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
//   'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
//   'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
//   'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
//   'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
//   'with', 'yield'];

// function isReserved(name) {
//   let isReserved = false;
//   RESERVED_KEYWORDS.forEach(reserved => {
//     if (name === reserved) {
//       isReserved = true;
//     }
//   });

//   return isReserved;
// }

// console.log(isReserved('monkey')); // false
// console.log(isReserved('patch'));  // false
// console.log(isReserved('switch')); // should be: true

// // Picks n random elements from an array,
// // and returns a new array with those elements.
// function random(array, n) {
//   if (n === undefined) {
//     n = 1;
//   }

//   let elements = array.slice();
//   let randomElements = [];

//   while (n > 0 && elements.length > 0) {
//     let randomIndex = Math.floor(Math.random() * elements.length);
//     let randomElement = elements[randomIndex];

//     randomElements.push(randomElement);
//     elements.splice(randomIndex, 1);
//     n--;
//   }

//   return randomElements;
// }

// // Ingredients

// let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
//   'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

// let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
//   'poppy seed', 'cumin'];

// let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// // Name

// let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
// let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
// let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// // Generate!

// let dishName = [].concat(random(adjective), random(firstNoun), random(secondNoun));
// let dish = [].concat(random(ingredients, 3), random(spices, 2), random(extras, 1));

// console.log('How about: ' + dishName.join(' '));
// console.log('You need: ' + dish.join(', '));

// let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
//              'call plumber', 'feed fido', 'get gas',  'organize closet'];

// function addTask(task) {
//   if (todos.includes(task)) {
//     console.log('That task is already on the list.');
//   } else {
//     todos.push(task);
//   }
// }

// function completeTasks(n = 1) {
//   let tasksComplete = 0;

//   while (todos.length > 0 && tasksComplete < n) {
//     console.log(`${todos[0]} complete!`);
//     todos.shift();
//     tasksComplete++;
//   }

//   if (todos.length === 0) {
//     console.log('All tasks complete!');
//   } else {
//     console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
//   }
// }

// function displayTaskList() {

//   console.log(`ToDo list (${todos.length} tasks):`);
//   console.log('---------------------');

//   for (let idx = 0; idx < todos.length; idx++) {
//     console.log(`-- ${todos[idx]}`);
//   }
// }

// // Utilizing our task manager

// addTask('oil change');
// addTask('dentist');
// addTask('homework');

// completeTasks(3);
// displayTaskList();

// function range(start, end = -1) {
//   let range = [];

//   if (end === -1) {
//     end = start;
//     start = 0;
//   }

//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// // function range(end) {
// //   return range(0, end);
// // }

// // Examples

// console.log(range(10, 20));
// console.log(range(5));

// let memberDirectory = {
//   'Jane Doe': '323-8293',
//   'Margaret Asbury': '989-1111',
//   'Callum Beech': '533-9090',
//   'Juanita Eastman': '424-1919',
// };

// function isValidName(name) {
//   return (/^[A-Za-z ]+$/gi).test(name);
// }

// function isValidPhone(phone) {
//   return (/^\d{3}-\d{4}$/gi).test(phone);
// }

// function validMemberInfo(name, phone) {
//   return isValidName(name) && isValidPhone(phone);
// }

// function addMember(name, phone) {
//   if (validMemberInfo(name, phone)) {
//     memberDirectory[name] = phone;
//   } else {
//     console.log('Invalid member information.');
//   }
// }

// addMember('Laura Carlisle', '444-2223');
// addMember('Rachel Garcia', '232-1191');
// addMember('Earl 5mith', '331-9191');

// console.log(memberDirectory);

// Standard role-playing dice, with 20 faces,
// specified in terms of minimum and maximum face value.

// let d20 = {min: 1, max: 20};

// function roll(die) {
//   return Math.floor(Math.random() * (die.max - die.min + 1)) + die.min;
// }

// // Standard target roll tossing a 20-sided die,
// // with optional bonus and penalty dice.
// // Used to determine whether a character wanting to perform an action
// // succeeds or fails, based on whether the sum of the dice is higher
// // or lower than the relevant character trait.
// // (See below for examples.)
// function targetRoll(characterValue) {

//   let result = roll(d20);

//   console.log("--> " + result);

//   switch (result) {
//     case 1:
//       automaticFail();
//       break;
//     case 20:
//       automaticSuccess();
//       break;
//     default:
//       void (result >= characterValue ? success() : fail());
//   }
// }

// function success() {
//   console.log("Your character succeeds.");
// }

// function fail () {
//   console.log("Your character fails.");
// }

// function automaticSuccess() {
//   console.log("Your character succeeds without effort. Glory!");
// }

// function automaticFail() {
//   console.log("Meagre attempt. Your character fails miserably.");
// }

// // Example character.
// let myCharacter = {
//   name: 'Jenkins',
//   strength: 4,
//   constitution: 6,
//   education: 11,
//   luck: 3,
//   sanity: 9,
// };

// // Example rolls:

// // Jenkins wants to break in a door with brute force,
// // so he has to roll against his strength value.
// targetRoll(myCharacter.strength);

// // Jenkins found an ancient scroll and attempts to decipher it.
// // He has to roll against his education, in order to determine
// // whether he's able to read it.
// targetRoll(myCharacter.education);

// function average(nums) {
//   let sum = nums.reduce((total, num) => total + num);

//   return sum / nums.length;
// }

// function median(nums) {
//   nums.sort((a, b) => a - b);

//   let median;
//   let length = nums.length;
//   if (length % 2 === 0) {
//     median = average([nums[(length / 2) - 1], nums[length / 2]]);
//   } else {
//     median = nums[Math.floor(length / 2)];
//   }

//   return median;
// }

// // Tests

// let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
// let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
// let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
// let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// // should all log 'true':
// console.log(average(quarter1ExamScores) === 86.8);
// console.log(average(quarter2ExamScores) === 86.3);
// console.log(average(quarter3ExamScores) === 83.7);
// console.log(average(quarter4ExamScores) === 88.8);

// console.log(median(quarter1ExamScores) === 89.5);
// console.log(median(quarter2ExamScores) === 89.5);
// console.log(median(quarter3ExamScores) === 87);
// console.log(median(quarter4ExamScores) === 89.5);

// function toDate(string) {
//   return new Date(string + "T00:00:00");
// }

// const TODAY = toDate("2018-08-05");

// function toString(date) {
//   return date.toISOString().substring(0, 10);
// }

// function isInThePast(date) {
//   return date < TODAY;
// }

// function isWeekday(date) {
//   return date.getDay() >= 1 && date.getDay() <= 5;
// }

// let myCalendar = {
//   "2018-08-13": ["JS debugging exercises"],
//   "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
//   "2018-08-15": ["Read 'Demystifying Rails'"],
//   "2018-08-16": [],
//   "2018-08-30": ["Drone video project plan"],
//   "2018-09-10": ["Annual servicing of race bike"],
//   "2018-09-12": ["Study"],
//   "2018-11-02": ["Birthday Party"],
//   "2018-11-03": ["Birthday Party"]
// };

// let offeredClasses = {
//   "Back To The Future Movie Night": ["2018-07-30"],
//   "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
//   "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
//   "Mike's Hikes": ["2018-08-16"],
//   "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
//   "Powerboating 101": ["2018-09-15", "2018-09-16"],
//   "Discover Parachuting": ["2018-11-02"]
// };

// function getCompatibleEvents(classes, calendar) {
//   function isAvailable(date) {
//     let dateStr = toString(date);
//     return !calendar[dateStr] || calendar[dateStr].length === 0;
//     }

//   let compatibleClasses = [];

//   Object.keys(classes).forEach(className => {
//     let classDates = classes[className].map(toDate);
//     if (classDates.some(isInThePast)) {
//       return;
//     }

//     if (classDates.filter(isWeekday).every(isAvailable)) {
//       compatibleClasses.push(className);
//     }
//   });

//   return compatibleClasses;
// }

// console.log(getCompatibleEvents(offeredClasses, myCalendar));
// // expected: ["Mike's Hikes", "Powerboating 101"]

// function neutralize(sentence) {
//   let words = sentence.split(" ");

//   words = words.filter(word => !isNegative(word));

//   return words.join(" ");
// };

// function isNegative(word) {
//   return ["dull", "boring", "annoying", "chaotic"].includes(word);
// }
 
// console.log(
//   neutralize("These dull boring cards are part of a chaotic board game.")
// );
// // Expected: These cards are part of a board game.
// // Actual: These boring cards are part of a board game.

function toDate(string) {
  return new Date(string + "T00:00:00");
}

const TODAY = toDate("2018-08-05");

function toString(date) {
  return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 && date.getDay() <= 5;
}

let myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"]
};

let offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"]
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    let dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  let compatibleClasses = [];

  Object.keys(classes).forEach(className => {
    let classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]


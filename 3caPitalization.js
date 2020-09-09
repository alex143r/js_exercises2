"use strict";
const name = "Peter";

const lowercase = name.toLowerCase();

const thirdLetter = name.substring(2, 3);
const thirdCap = thirdLetter.toUpperCase();

const firstLetters = lowercase.substring(0, 2);
const lastLetters = lowercase.substring(3, 5);

console.log(firstLetters + thirdCap + lastLetters);
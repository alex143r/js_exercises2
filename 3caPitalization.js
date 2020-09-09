"use strict";
let name = "peTEr";
/*
const lowercase = name.toLowerCase();

const thirdLetter = name.substring(2, 3);
const thirdCap = thirdLetter.toUpperCase();

const firstLetters = lowercase.substring(0, 2);
const lastLetters = lowercase.substring(3, 5);

console.log(firstLetters + thirdCap + lastLetters);
*/
const cap = capitalize(name);

function capitalize(name) {
    name = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
    console.log(name);

}
console.log(cap);
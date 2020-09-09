"use strict";

const name = "Albus Percival Wulfric Brian Dumbledore";
console.log(name.length);

const letter2 = name[2];
console.log(letter2);

const letter6 = name[6];
console.log(letter6);

const indexd = name.indexOf("D");
console.log(indexd);

const indexe = name.lastIndexOf("e");
console.log(indexe);

const str1 = " There is    space here \n   ";
const str2 = str1.trim();
console.log(str1);
console.log(str2);

const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 5);
console.log(firstName);

const firstName1 = name.substring(0, 5);
console.log(firstName1);
const firstName2 = name.substring(29);
console.log(firstName2);
const firstName3 = name.substring(15, 22);
console.log(firstName3);
const firstName4 = name.substring(14, 22);
console.log(firstName4);
const firstName5 = name.substring(25, 28);
console.log(firstName5);
const firstName6 = name.substring(2, 5);
console.log(firstName6);
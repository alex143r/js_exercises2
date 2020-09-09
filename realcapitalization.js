"use strict";
const name = "aleXaNdEr oBeL tyLleSeN";

const lowercase = name.toLowerCase();
const firstL = name.substring(0, 1);
const firstCap = firstL.toUpperCase();
const indexSpace1 = lowercase.indexOf(" ");
const restOfFirstName = lowercase.substring(1, indexSpace1);
console.log(firstCap + restOfFirstName);
const firstName = firstCap + restOfFirstName;

const indexSpace2 = lowercase.lastIndexOf(" ");
const firstL2 = lowercase.substring(indexSpace1 + 1, indexSpace1 + 2);
const firstCap2 = firstL2.toUpperCase();
const restOfMiddleName = lowercase.substring(indexSpace1 + 2, indexSpace2);
console.log(firstCap2 + restOfMiddleName);
const middleName = firstCap2 + restOfMiddleName;

const restOfLastName = lowercase.substring(indexSpace2 + 2);
const firstL3 = lowercase.substring(indexSpace2 + 1, indexSpace2 + 2);
const firstCap3 = firstL3.toUpperCase();
console.log(firstCap3 + restOfLastName);
const lastName = firstCap3 + restOfLastName

console.log(firstName + " " + middleName + " " + lastName);
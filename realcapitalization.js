"use strict";
/*
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
*/
let name;

function fullName(lastName, firstName, middleName) {
    if (middleName === undefined) {
        fullName = firstName + " " + lastName;

    } else {
        fullName = firstName + " " + middleName + " " + lastName;

    }
    console.log(fullName);

}

getNameParts(name);

function getNameParts(name) {
    name = "Alexander Obel Mac Tyllesen";

    const indexSpace1 = name.indexOf(" ");
    const firstName = name.substring(0, indexSpace1);

    const indexSpace2 = name.lastIndexOf(" ");
    const middleName = name.substring(indexSpace1 + 1, indexSpace2);

    const lastName = name.substring(indexSpace2 + 1);
    console.log({
        firstName,
        middleName,
        lastName
    });

    fullName(lastName, firstName, middleName);
}
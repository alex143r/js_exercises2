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
let fullname = ("Harry", "Potter", "James");
const getName = getNameParts(fullname);

function fullName(fullname, lastName, firstName, middleName) {

    if (middleName === " ") {
        fullname = firstName + " " + lastName;
        fullname = fullname.trim();
        console.log("yee");
    } else {
        fullname = firstName + " " + middleName + " " + lastName.trim();
        fullname = fullname.trim();

    }
    console.log(fullname);

}

function getNameParts(fullname) {
    console.log("1" + fullname);
    const firstName = fullname.split(',')[-1];
    const middleName = fullname.split(',')[0];
    const lastName = fullname.split(',')[2];




    /*fullname = fullname.toString();
    console.log("bib" + fullname);

    const indexSpace1 = fullname.indexOf(" ");
    const firstName = fullname.substring(0, indexSpace1);
    console.log(firstName);

    const indexSpace2 = fullname.lastIndexOf(" ");
    let middleName = fullname.substring(indexSpace1 + 1, indexSpace2);

    const lastName = fullname.substring(indexSpace2 + 1);*/
    console.log({
        firstName,
        middleName,
        lastName
    });
    fullName(fullname, lastName, firstName, middleName);
}
"use strict";

const name1 = "Peter Heronimous Lind";
const firstName1 = name1.split(' ')[0];
console.log(firstName1);
const middleName1 = name1.split(' ')[1];
console.log(middleName1);
const lastName1 = name1.split(' ')[2];
console.log(lastName1);

const name = "Alexander Obel Tyllesen";

const indexSpace1 = name.indexOf(" ");
const first = name.substring(0, indexSpace1);

const indexSpace2 = name.lastIndexOf(" ");
const middle = name.substring(indexSpace1 + 1, indexSpace2);

const last = name.substring(indexSpace2 + 1);
console.log(first);
console.log(middle);
console.log(last);
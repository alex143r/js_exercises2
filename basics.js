"use strict";
const bool = true;
const num = 41;
const str = "reee";
const obj = {
    cats: 2,
    cars: 1
}
const nothing = null;
let undf;
const symbol = Symbol("symbol");

console.log(typeof bool);
typeof num;
typeof str;
typeof obj;
typeof nothing;
typeof undf;
typeof symbol;

const n1 = 1;
const n2 = 2;
const s1 = "1";
const s2 = "2";
console.log(n1 + n2);
console.log(s1 + s2);
console.log(n1 + s2);
console.log(s1 + n2);
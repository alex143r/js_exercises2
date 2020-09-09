"use strict";
let hex = "#bada55";
convertHex(hex);

function convertHex(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    console.log({
        r,
        g,
        b
    });
}
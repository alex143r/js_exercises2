"use strict";
let hex = "#bada55";
hexToRGB(hex);

function hexToRGB(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    console.log({
        r,
        g,
        b
    });
}


const rgb = {
    r: 1,
    g: 2,
    b: 3
};

rgbToHex(rgb);

function rgbToHex(rgb) {
    hex = "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
    console.log(hex);
}

/* 
#0c0211
*/
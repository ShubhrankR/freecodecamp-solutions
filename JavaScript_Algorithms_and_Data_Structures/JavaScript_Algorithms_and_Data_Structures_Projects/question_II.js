/**
 * Roman Numeral Converter
 * =========================
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 *
 * AC -
 * ---------
 * convertToRoman(2) should return the string II
 * convertToRoman(3) should return the string III
 * convertToRoman(4) should return the string IV
 * convertToRoman(5) should return the string V.
 * convertToRoman(9) should return the string IX.
 * convertToRoman(12) should return the string XII.
 * convertToRoman(16) should return the string XVI.
 * convertToRoman(29) should return the string XXIX.
 * convertToRoman(44) should return the string XLIV.
 * convertToRoman(45) should return the string XLV.
 * convertToRoman(68) should return the string LXVIII
 * convertToRoman(83) should return the string LXXXIII
 * convertToRoman(97) should return the string XCVII
 * convertToRoman(99) should return the string XCIX
 * convertToRoman(400) should return the string CD
 * convertToRoman(500) should return the string D
 * convertToRoman(501) should return the string DI
 * convertToRoman(649) should return the string DCXLIX
 * convertToRoman(798) should return the string DCCXCVIII
 * convertToRoman(891) should return the string DCCCXCI
 * convertToRoman(1000) should return the string M
 * convertToRoman(1004) should return the string MIV
 * convertToRoman(1006) should return the string MVI
 * convertToRoman(1023) should return the string MXXIII
 * convertToRoman(2014) should return the string MMXIV
 * convertToRoman(3999) should return the string MMMCMXCIX
 *
 * Hints -
 * ---------
 * - https://www.mathsisfun.com/roman-numerals.html
 * - https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-roman-numeral-converter/16044
 * - https://www.tutorialspoint.com/finding-place-value-of-a-number-in-javascript
 * - https://www.geeksforgeeks.org/place-value-of-a-given-digit-in-a-number/
 * - https://www.splashlearn.com/math-vocabulary/decimals/decimal-place-value
 * - https://stackoverflow.com/questions/24226324/getting-place-values-of-a-number-w-modulus
 * - 
 *
 */

// const splitNumber = (num, arr = [], m = 1) => {
//     if (num) {
//         return splitNumber(
//             Math.floor(num / 10),
//             [m * (num % 10)].concat(arr),
//             m * 10
//         );
//     }
//     return arr;
// };

const romanVals = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM",
    4000: "MMMM",
    5000: "MMMMM",
};

function convertToRoman(num) {
    // console.log("---- VLOG ----", num.toString().split(""));
    // console.log("---- VLOG ----", num % 10);
    let numArr = num
        .toString()
        .split("")
        .map((e) => parseInt(e));
    // console.log("Splited Num arr =", numArr);
    // console.log("Num modulus 10 =", num % 10);
    // console.log("Num divide 10 =", num / 10);
    // console.log("Num divide 10 =", Math.floor(num / 10));
    let updatedNum = num;
    let numPlacesValArr = [];
    let romanNumStr = "";
    for (let i = 0; i < numArr.length; i++) {
        // console.log("Inside loop");
        // console.log("Inside loop mod = ", (updatedNum % 10) * Math.pow(10, i));
        numPlacesValArr.unshift((updatedNum % 10) * Math.pow(10, i));
        updatedNum = Math.floor(updatedNum / 10);
    }
    // console.log("Array of places value = ", numPlacesValArr);
    numPlacesValArr.forEach((e) => {
        if (romanVals.hasOwnProperty(e)) {
            romanNumStr += romanVals[e];
        }
    });
    // console.log("Final ROMAN value will be =", romanNumStr);
    return romanNumStr;
}

convertToRoman(2);
convertToRoman(3);
convertToRoman(4);
convertToRoman(5);
convertToRoman(9);
convertToRoman(12);
convertToRoman(16);
convertToRoman(29);
convertToRoman(44);
convertToRoman(45);
convertToRoman(68);
convertToRoman(83);
convertToRoman(97);
convertToRoman(99);
convertToRoman(400);
convertToRoman(500);
convertToRoman(501);
convertToRoman(649);
convertToRoman(798);
convertToRoman(891);
convertToRoman(1000);
convertToRoman(1004);
convertToRoman(1006);
convertToRoman(1023);
convertToRoman(2014);
convertToRoman(3999);

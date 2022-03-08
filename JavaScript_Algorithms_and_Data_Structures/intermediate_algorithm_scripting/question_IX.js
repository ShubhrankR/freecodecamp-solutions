/**
 * Missing letters
 * ====================
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 *
 * AC -
 * ------------
 * fearNotLetter("abce") should return the string d
 * fearNotLetter("abcdefghjklmno") should return the string i
 * fearNotLetter("stvwx") should return the string u
 * fearNotLetter("bcdf") should return the string e
 * fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined
 * 
 * Hints -
 * -------
 * - https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-missing-letters/16023
 * - https://stackoverflow.com/questions/37277897/javascript-find-missing-number-in-array
 */

// First let's generate the UTF unicode of English Alphabats

const capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const normalAlphabets = "abcdefghijklmnopqrstuvwxyz";
const capAlphaArr = capitalAlphabets.split("");
const norAlphaArr = normalAlphabets.split("");

console.log("Capital alphabets =", capAlphaArr);
console.log("Normal alphabets =", norAlphaArr);

// for (const key in capAlphaArr) {
//     // prints the elements position
//     // N - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
//     console.log("key in array = ", key);
//     console.log("key in array | fromCharCode(key) =", String.fromCharCode(key));
// }

// for (const iterator of normalAlphabets) {
//     // N - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
//     // N - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
//     // console.log(iterator.charCodeAt());
//     console.log("Iterator of array =", iterator);
//     console.log(
//         "Iterator of array | iterator.codePointAt() =",
//         iterator.codePointAt()
//     );
// }

function fearNotLetter(str) {
    let rangeStart, rangeEnd;
    rangeStart = str[0].charCodeAt();
    rangeEnd = str[str.length - 1].charCodeAt();
    let utfCodeArr = [];
    let missingUtfCodeArr = [];
    for (const iterator of str) {
        utfCodeArr.push(iterator.charCodeAt());
    }
    console.log("Char UTF code array -", utfCodeArr);
    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (utfCodeArr.indexOf(i) === -1) {
            missingUtfCodeArr.push(i);
        }
    }
    if (missingUtfCodeArr.length === 0) {
        return undefined;
    } else {
        console.log(String.fromCharCode(missingUtfCodeArr[0]));
        return String.fromCharCode(missingUtfCodeArr[0]);
    }
}

// fearNotLetter("abce");
// fearNotLetter("abcdefghjklmno");
// fearNotLetter("stvwx");
// fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");

/**
 * Palindrome Checker
 * ====================
 * Return true if the given string is a palindrome. Otherwise, return false
 * A palindrome is a word or sentence that's spelled the same way both forward
 * and backward, ignoring punctuation, case, and spacing
 *
 * Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
 * and turn everything into the same case (lower or upper case) in order to check for palindromes.
 *
 * We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others
 *
 * We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2
 *
 * AC -
 * ---------
 * - palindrome("eye") should return a boolean.
 * - palindrome("eye") should return true.
 * - palindrome("_eye") should return true.
 * - palindrome("race car") should return true.
 * - palindrome("not a palindrome") should return false.
 * - palindrome("A man, a plan, a canal. Panama") should return true.
 * - palindrome("never odd or even") should return true.
 * - palindrome("nope") should return false.
 * - palindrome("almostomla") should return false.
 * - palindrome("My age is 0, 0 si ega ym.") should return true.
 * - palindrome("1 eye for of 1 eye.") should return false.
 * - palindrome("0_0 (: /-\ :) 0-0") should return true.
 * - palindrome("five|\_/|four") should return false.
 *
 * Hints -
 * ---------
 * - https://bobbyhadz.com/blog/javascript-remove-non-alphanumeric-characters-from-string#:~:text=To%20remove%20all%20non%2Dalphanumeric,string%20with%20all%20matches%20replaced.
 * - http://regexrenamer.sourceforge.net/help/regex_quickref.html
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
 * - https://stackoverflow.com/questions/31712808/how-to-force-javascript-to-deep-copy-a-string
 */

function palindrome(str) {
    function filterningTheString(str) {
        // const filteredStr = str.replace(/[^a-z0-9 -]/gi, "");
        // let filteredStr = str.replace(/[^a-z0-9]/gi, "");
        // const filteredStr = str.replace(/\W/gi, ""); // \w = [^a-zA-Z0-9_]
        // console.log("Filtered String =", filteredStr);
        // console.log("Filtered String in LowerCase =", filteredStr.toLowerCase());
        return str.replace(/[^a-z0-9]/gi, "").toLowerCase();

    }
    let cleanedStr = filterningTheString(str);
    const originalStr = cleanedStr.split('').join('');
    const palindromeStr = cleanedStr.split('').reverse().join('');
    // console.log('Cleaned ? -', cleanedStr)
    // console.log('Orig str =', originalStr)
    // console.log('Palindrome str =', palindromeStr)
    // console.log('Is palin =', originalStr === palindromeStr)
    return originalStr === palindromeStr;
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
